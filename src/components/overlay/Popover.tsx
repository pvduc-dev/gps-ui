import {useOverlayTriggerState} from '@react-stately/overlays';
import {
  DismissButton,
  OverlayContainer,
  OverlayProvider,
  useModal,
  useOverlay,
  useOverlayPosition,
  useOverlayTrigger,
} from '@react-aria/overlays';
import {forwardRef, RefObject} from "react";
import {PopoverProps} from '@react-types/overlays';
import {useDialog} from "react-aria";
import {FocusScope} from '@react-aria/focus';
import {mergeProps} from '@react-aria/utils';

const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
  const { overlayProps } = useOverlay(props, ref as RefObject<HTMLDivElement>);
  const { modalProps} = useModal();
  let { dialogProps, titleProps } = useDialog({}, ref as RefObject<HTMLDivElement>);
  return (
    <FocusScope
      restoreFocus
    >
      <div
        {...mergeProps(overlayProps, dialogProps, props, modalProps)}
        ref={ref}
        className="bg-white p-6"
      >
        <h3>{}</h3>
      </div>
    </FocusScope>
  )
})
