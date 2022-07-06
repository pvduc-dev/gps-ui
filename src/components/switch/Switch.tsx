import React, {forwardRef, ForwardRefRenderFunction, LegacyRef, RefObject} from 'react';
import { AriaSwitchProps } from '@react-types/switch';
import {useToggleState} from '@react-stately/toggle';
import './switch.css';
import {useFocusRing, useSwitch} from "react-aria";
import clsx from "clsx";

export interface SwitchProps extends Omit<AriaSwitchProps, 'value'> {
  name?: string,
  value?: boolean;
}
const Switch: ForwardRefRenderFunction<HTMLInputElement, SwitchProps> = (props, ref) => {
  const switchState = useToggleState({...props, defaultSelected: props.value} as any);
  const {inputProps} = useSwitch({...props, value: props.name} as any, switchState, ref as RefObject<HTMLInputElement>)
  let {focusProps} = useFocusRing();
  return (
    <input
      className={clsx([
        'switch'
      ])} {...inputProps} {...focusProps} ref={ref as LegacyRef<HTMLInputElement>} />
  );
};

const _Switch = forwardRef(Switch)

export { _Switch as Switch }
