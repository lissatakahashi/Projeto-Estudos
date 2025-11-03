import { useEffect } from 'react';

export default function usePageVisibility(onHidden?: () => void, onVisible?: () => void) {
  useEffect(() => {
    let hiddenAt: number | null = null;

    const handleVisibility = () => {
      if (document.hidden) {
        hiddenAt = Date.now();
        if (onHidden) onHidden();
      } else {
        if (hiddenAt && Date.now() - hiddenAt > 15000) {
          // >15s hidden
          console.log('Page was hidden > 15s');
        }
        hiddenAt = null;
        if (onVisible) onVisible();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [onHidden, onVisible]);
}
