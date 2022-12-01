import { useEffect, useState } from 'react';
import { screens } from 'tailwindcss/defaultTheme';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const useMediaQuery = (screen: 'sm' | 'md' | 'lg' | 'xl' | '2xl') => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${screens[screen]})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, screen]);

  return matches;
};
