import React, {
  forwardRef,
  LegacyRef,
  useCallback,
  useState
} from 'react';
import {DOMRef} from '@react-types/shared';
import {OpenTransition} from './OpenTransition';
import {createPortal} from "react-dom";

interface OverlayProps {
  isOpen: boolean,
  onEnter?: Function,
  onEntering?: Function,
  onEntered?: Function,
  onExit?: Function,
  onExiting?: Function,
  onExited?: Function,
  container: any,
  children: any,
}

const Overlay = (props: OverlayProps, ref: DOMRef<HTMLDivElement>) => {
  const {children, isOpen, container, onEnter, onEntering, onEntered, onExit, onExiting, onExited} = props;
  const [exited, setExited] = useState(!isOpen);

  const handleEntered = useCallback(() => {
    setExited(false);
    onEntered && onEntered();
  }, [onEntered])

  const handleExited = useCallback(() => {
    setExited(true);
    onExited && onExited()
  }, [onExited])

  const mountOverlay = !isOpen || !exited;

  if (!mountOverlay) {
    return null;
  }

  const contents = (
    <div
      ref={ref as LegacyRef<HTMLDivElement>}
    >
      <OpenTransition
        in={isOpen}
        appear
        onExit={onExit}
        onExiting={onExiting}
        onExited={handleExited}
        onEnter={onEnter}
        onEntering={onEntering}
        onEntered={handleEntered}
      >
        {children}
      </OpenTransition>
    </div>
  )

  return createPortal(contents, container || document.body);
};

const _Overlay = forwardRef(Overlay);

export {_Overlay as Overlay};
