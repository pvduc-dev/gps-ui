import React, {FC, useRef} from 'react';
import type {AriaDialogProps} from '@react-types/dialog';
import type {ModalProps} from '@react-types/overlays';
import {usePreventScroll} from "../../hooks/usePreventScroll";
import {OverlayContainer, useDialog, useModal, useOverlay} from 'react-aria';
import {CSSTransition} from "react-transition-group";
import {mergeProps} from "@react-aria/utils";

interface DialogProps extends AriaDialogProps, ModalProps {
}

const Dialog: FC<DialogProps> = (props) => {
  const {isOpen, children} = props;
  usePreventScroll({
    isDisabled: !isOpen,
  });
  const ref = useRef<HTMLDivElement>(null);
  const {overlayProps, underlayProps} = useOverlay(props, ref);
  const {modalProps} = useModal();
  const {dialogProps} = useDialog({
    ...props,
    role: 'dialog',
  }, ref);
  return (
    <OverlayContainer>
      <CSSTransition
        in={isOpen}
        unmountOnExit
        timeout={{ enter: 0, exit: 250 }}
        classNames={{
          enter: "opacity-0",
          enterDone: "opacity-1 transition ease-in",
          exit: "opacity-0 transition ease-out"
        }}
      >
        <div
          className="fixed inset-0 flex justify-center z-50 bg-slate-400/20"
          {...underlayProps}
        >
          <CSSTransition
            in={isOpen}
            nodeRef={ref}
            timeout={{enter: 0, exit: 250}}
            classNames={{
              appear: "translate-y-2",
              appearDone: "translate-y-0 transition ease-in",
              exit: "translate-y-2 transition ease-out"
            }}
          >
            <div
              {...mergeProps(overlayProps, dialogProps, modalProps)}
              ref={ref}
              className="focus:outline-none my-auto"
            >
              {children}
            </div>
          </CSSTransition>
        </div>
      </CSSTransition>
    </OverlayContainer>
  );
};

export {Dialog};
