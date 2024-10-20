import {useEffect, useRef, useState} from "react";

function useMouseTrack() {
  const [position, setPosition] = useState({x: 25, y: 50});
  const windowWidth = useRef(null);
  const windowHeight = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      windowWidth.current = window.innerWidth;
      windowHeight.current = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleMouseOver(e) {
    const x = Math.floor((e.clientX / windowWidth.current) * 100);
    const y = Math.floor((e.clientY / windowHeight.current) * 100);
    setPosition({x, y});
  }

  return {handleMouseOver, position};
}

export default useMouseTrack;
