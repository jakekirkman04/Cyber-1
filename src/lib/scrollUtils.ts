export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    } else {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(
        () => {
          lastCall = Date.now();
          func(...args);
        },
        delay - (now - lastCall)
      );
    }
  };
};

export const useRafThrottle = (callback: () => void) => {
  let rafId: number | null = null;

  return () => {
    if (rafId !== null) return;

    rafId = requestAnimationFrame(() => {
      callback();
      rafId = null;
    });
  };
};
