// useIntersectionObserver.js
import { useEffect, useRef } from "react";

export const useIntersectionObserver = () => {
  const ref = useRef(null);
  let timeoutId = null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If there's a timeout in progress, don't start the animation
          if (timeoutId !== null) return;

          entry.target.classList.add("pop");

          // Start a timeout when the animation is triggered
          timeoutId = setTimeout(() => {
            timeoutId = null; // Reset the timeout id when the timeout is over
          }, 15000); // 15 seconds timeout
        } else {
          entry.target.classList.remove("pop");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      // Clear the timeout when the component is unmounted
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return ref;
};