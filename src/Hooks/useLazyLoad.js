import {useEffect, useRef} from "react";

function useLazyLoad() {
  const ref = useRef(null);

  useEffect(
    function () {
      if (!ref?.current?.childNodes) return;

      const reveal = (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("move-up-fade-in");
          entry.target.style.opacity = 1;
          observer.unobserve(entry.target);
        });
      };

      const options = {root: null, thresholds: 0.1, rootMargin: "-100px"};

      const elementObserver = new IntersectionObserver(reveal, options);

      Array.from(ref?.current?.childNodes).forEach((el) => {
        el.style.opacity = 0;
        elementObserver.observe(el);
      });

      return () => {
        if (elementObserver) elementObserver.disconnect();
      };
    },
    [ref]
  );

  return ref;
}

export default useLazyLoad;
