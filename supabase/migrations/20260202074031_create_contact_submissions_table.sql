/*
  # Contact Submissions Table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact's name
      - `email` (text) - Contact's email address
      - `company` (text, nullable) - Contact's company name
      - `message` (text) - Contact's message
      - `created_at` (timestamptz) - Timestamp of submission
      - `ip_address` (text, nullable) - IP address for abuse prevention
      - `user_agent` (text, nullable) - User agent for tracking

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for inserting contact submissions (public)
    - Add policy for authenticated admins to view submissions

  3. Notes
    - All submissions are stored securely with RLS
    - Public can only insert, not read their own submissions
    - Only authenticated users (admins) can read submissions
*/

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  ip_address text,
  user_agent text
);

-- Enable RLS
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert contact submissions (public form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Authenticated users can view all submissions (for admins)
CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster queries on created_at
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

-- Create index for email lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
  ON contact_submissions(email);
