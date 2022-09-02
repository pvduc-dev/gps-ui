import React, {forwardRef, ForwardRefRenderFunction, RefObject, useRef} from 'react';
import {AriaSwitchProps} from '@react-types/switch';
import {useToggleState} from '@react-stately/toggle';
import './switch.css';
import {useFocusRing, useSwitch} from "react-aria";
import clsx from "clsx";
import {mergeProps} from "@react-aria/utils";

export interface SwitchProps extends Omit<AriaSwitchProps, 'value'> {
  name?: string,
  value?: boolean;
}
const Switch: ForwardRefRenderFunction<HTMLInputElement, SwitchProps> = (props, ref) => {
  const inputRef = ref ?? useRef<HTMLInputElement>(null);
  const switchState = useToggleState({...props, defaultSelected: props.value} as any);
  const {inputProps} = useSwitch({...props, value: props.name} as any, switchState, inputRef as RefObject<HTMLInputElement>)
  const {focusProps} = useFocusRing();
  return (
    <input
      className={clsx([
        'switch'
      ])}
      {...mergeProps(inputProps, focusProps)}
      ref={inputRef}
    />
  );
};

const _Switch = forwardRef(Switch)

export { _Switch as Switch }
