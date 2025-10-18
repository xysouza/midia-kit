type SmoothScrollOptions = {
  duration?: number;
  offset?: number;
  updateHash?: boolean;
};

export function smoothScrollTo(selector: string, options: SmoothScrollOptions = {}) {
  const { duration = 600, offset = 0, updateHash = false } = options;
  const target = document.querySelector(selector) as HTMLElement | null;
  if (!target) return;

  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + startY - offset;
  const startTime = performance.now();

  const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);
    const currentY = startY + (targetY - startY) * eased;
    window.scrollTo({ top: currentY });
    if (elapsed < duration) {
      requestAnimationFrame(step);
    } else if (updateHash) {
      history.replaceState(null, '', selector);
    }
  }

  requestAnimationFrame(step);
}
