import {useLayoutEffect} from "react";

interface PreventScrollOptions {
  isDisabled?: boolean
}

const SCROLL_KEYBOARD_CODE = [
  'ArrowDown',
  'ArrowUp',
  'ArrowLeft',
  'ArrowRight',
  'PageUp',
  'PageDown'
]

function preventDefault(e: any) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(evt: KeyboardEvent) {
  if (SCROLL_KEYBOARD_CODE.includes(evt.code)) {
    preventDefault(evt);
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
