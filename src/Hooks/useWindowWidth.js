import {useEffect, useRef} from "react";

function useWindowWidth() {
  const ref = useRef(null);
  let width = ref.current;

  useEffect(() => {
    ref.current = window.innerWidth;
  }, [window.innerWidth]);

  return width;
}

export default useWindowWidth;
