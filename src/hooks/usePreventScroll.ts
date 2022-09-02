import {useLayoutEffect} from "react";

interface PreventScrollOptions {
  isDisabled?: boolean
}

const SCROLL_KEYCODES = [33, 34, 37, 38, 39, 40];

function preventDefault(e: any) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e: KeyboardEvent) {
  if (SCROLL_KEYCODES.includes(e.keyCode)) {
    preventDefault(e);
  }
}

export function usePreventScroll(options: PreventScrollOptions) {
  const { isDisabled } = options;
  useLayoutEffect(() => {
    if (!isDisabled) {
      window.addEventListener('DOMMouseScroll', preventDefault, { passive: false });
      window.addEventListener('wheel', preventDefault, { passive: false});
      window.addEventListener('touchmove', preventDefault, { passive: false});
      window.addEventListener('keydown', preventDefaultForScrollKeys, { passive: false});
    } else {
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.removeEventListener('wheel', preventDefault);
      window.removeEventListener('touchmove', preventDefault);
      window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    return () => {
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
      window.removeEventListener('wheel', preventDefault);
      window.removeEventListener('touchmove', preventDefault);
      window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
  }, [isDisabled])
}
