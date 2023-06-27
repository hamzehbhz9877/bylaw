import { useEffect, useRef } from "react";

const useClickOutside = (ref:  React.MutableRefObject<any>, callback: (e: any) => void) => {
  const callbackRef = useRef<any>();
  callbackRef.current = callback;

  const handleClick = (e: any) => {
    if (!ref.current.contains(e.target) && callbackRef.current) {
      callbackRef.current(e);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [ref, callbackRef]);
};

export default useClickOutside;
