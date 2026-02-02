/*
  # Create Lead Submissions Table

  1. New Tables
    - `lead_submissions`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text, required) - Full name of the lead
      - `work_email` (text, required) - Work email address
      - `business_revenue` (text, required) - Revenue range dropdown value
      - `primary_goal` (text, required) - Primary business goal dropdown value
      - `created_at` (timestamptz) - Timestamp when the lead was submitted

  2. Security
    - Enable RLS on `lead_submissions` table
    - Add policy for anonymous inserts to allow form submissions without authentication
    - No read policies for anonymous users to protect lead data

  3. Notes
    - Revenue ranges: $0-$200k, $1M-$5M, $5M-$20M, $20M+
    - Primary goals: Revenue Growth, Cost Optimization, Market Expansion, Operational Efficiency, Exit Strategy, Digital Transformation
*/

CREATE TABLE IF NOT EXISTS lead_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  work_email text NOT NULL,
  business_revenue text NOT NULL,
  primary_goal text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE lead_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous lead submissions"
  ON lead_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
