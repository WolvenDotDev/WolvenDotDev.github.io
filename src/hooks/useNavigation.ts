import { useRef, useEffect, useState } from 'react';

type NavigationRef = {
  id: string;
  threshold: number;
  ref: React.MutableRefObject<null>;
};

const useNavigation = (
  sections: { id: string; threshold: number }[],
  defaultValue?: string,
): [Record<string, NavigationRef>, string[], React.Dispatch<React.SetStateAction<string[]>>] => {
  const [nav, setNav] = useState(defaultValue ? [defaultValue] : ['About']);

  const navRefs: Record<string, NavigationRef> = {};
  sections.forEach((sec) => {
    navRefs[sec.id] = {
      id: sec.id,
      threshold: sec.threshold,
      ref: useRef(null),
    };
  });

  const sectionObservers = Object.values(navRefs).map((navRef) => {
    const { threshold, ref } = navRef;
    const options = {
      rootMargin: '0px',
      threshold: threshold,
    };
    const observerCallback: IntersectionObserverCallback = (entries) => {
      setNav((prevState) => {
        const entry = entries[0];
        const navigationList = prevState;

        if (entry.isIntersecting) return navigationList.concat([entry.target.id]);
        else {
          if (navigationList.length == 1 && navigationList[0] == entry.target.id) return navigationList;
          else return navigationList.filter((n) => n != entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);
    return { observer, ref };
  });

  const refs = Object.values(navRefs).map((ref) => ref.ref);

  useEffect(() => {
    sectionObservers.forEach((so) => {
      const { observer, ref } = so;
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      sectionObservers.forEach((so) => {
        const { observer, ref } = so;
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [...refs]);

  return [navRefs, nav, setNav];
};

export default useNavigation;
