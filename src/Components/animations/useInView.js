import { useEffect, useRef, useState } from "react";

/**
 * Tiny IntersectionObserver hook that powers every scroll animation on the site.
 *
 * @param {object}  [options]
 * @param {number}  [options.threshold]  How much of the element must be visible (0-1).
 * @param {string}  [options.rootMargin] Shrinks/grows the trigger area (default fires
 *                                       slightly before the element hits the bottom edge).
 * @param {boolean} [options.once]       Animate a single time (default) or every time
 *                                       the element re-enters the viewport.
 * @returns {[React.RefObject, boolean]} `[ref, inView]`
 */
function useInView({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  once = true,
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Very old browsers / SSR: never hide the content.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, inView];
}

export default useInView;
