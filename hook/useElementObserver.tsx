import { createRef, useEffect, useRef, useState } from 'react';
export default function useElementObserver(size: number) {
  const [sectionRefs, setSectionRefs] = useState<any>([useRef(null)]);
  const [activeHash, setActiveHash] = useState('#');
  const timer = useRef<any>(null);

  const callback = (entries: any) => {
    const isIntersecting = entries[0].isIntersecting;
    clearTimeout(timer.current);
    if (isIntersecting) {
      const hash = `#${entries[0].target.id}`;
      timer.current = setTimeout(() => {
        location.hash = hash;
      }, 200);
      setActiveHash(hash);
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

  return [sectionRefs, activeHash];
}
