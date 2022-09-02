import React, {forwardRef, ForwardRefRenderFunction, RefObject, useRef} from 'react';
import type {AriaCheckboxProps} from '@react-types/checkbox';
import {useToggleState} from '@react-stately/toggle';
import {useCheckbox, useFocusRing} from "react-aria";
import {mergeProps} from "@react-aria/utils";

export interface CheckboxProps extends Omit<AriaCheckboxProps, 'value'> {
  name?: string,
  value?: boolean;
}
const Checkbox: ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (props, ref) => {
  const inputRef = ref ?? useRef<HTMLInputElement>(null);
  const checkboxState = useToggleState({...props, defaultSelected: props.value} as any);
  const {inputProps} = useCheckbox({...props, value: props.name} as any, checkboxState, inputRef as RefObject<HTMLInputElement>)
  const {focusProps} = useFocusRing();
  return (
    <label>
      <input
        {...mergeProps(inputProps, focusProps)}
        ref={inputRef}
      />
      <div
        aria-hidden="true"
      >
        <svg className="stroke-current w-3 h-3" viewBox="0 0 18 18">
          <polyline
            points="1 9 7 14 15 4"
            fill="none"
            stroke="red"
            strokeWidth={3}
            strokeDasharray={22}
            strokeDashoffset={44}
            style={{
              transition: "all 400ms"
            }}
          />
        </svg>
      </div>
    </label>
  );
};

const _Checkbox = forwardRef(Checkbox)

export { _Checkbox as Checkbox }
