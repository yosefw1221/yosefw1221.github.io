import React, { createRef, useEffect, useMemo, useRef, useState } from "react";

export default function useElementObserver() {
  const [sectionRefs, setSectionRefs] = useState<any>([useRef(null)]);
  const [activeHash, setActiveHash] = useState("#");
  const [size, setSize] = useState(1);
  const timer = useRef<any>(null);

  const callback = (entries: any) => {
    const isIntersecting = entries[0].isIntersecting;
    // if (timer.current) clearTimeout(timer.current);
    if (isIntersecting) {
      // timer.current = setTimeout(() => {
        const hash = `#${entries[0].target.id}`;
        setActiveHash(hash);
      // });
    }
  };

  useEffect(() => {
    const sectionRefs = Array.from({ length: size }, () => createRef());
    setSectionRefs(sectionRefs);
  }, [size]);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, {
      threshold: 0.7,
      root: null,
    });
    sectionRefs.forEach((element: any) => {
      if (element?.current) observer.observe(element.current);
    });

    return () => {
      sectionRefs.forEach((element: any) => {
        if (element?.current) observer.unobserve(element.current);
      });
    };
  }, [sectionRefs]);

  return [setSize, sectionRefs, activeHash];
}
