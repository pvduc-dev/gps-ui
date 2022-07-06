import React, {forwardRef, ForwardRefRenderFunction} from 'react';
import {useTextField, AriaTextFieldOptions, TextFieldRefObject} from '@react-aria/textfield';
import clsx from "clsx";

interface TextFieldProps extends AriaTextFieldOptions<'input'> {
  error?: string,
}

const BASE_LABEL_CLASS_NAME = 'inline-block text-sm font-medium text-gray-800 dark:text-gray-300 leading-none m-1 mb-2.5'

const BASE_INPUT_CLASS_NAME = 'px-3 py-2.5 rounded-md w-full outline-none border dark:bg-[#0F0D1E] dark:border-[#1F1B39]'

const BASE_MESSAGE_CLASS_NAME = 'inline-block text-xs leading-none text-danger m-2 ml-1'

const TextField: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (props, ref) => {
  const {labelProps, inputProps, errorMessageProps} = useTextField(props, ref as TextFieldRefObject<'input'>);

  return (
    <div className="block">
      <label
        {...labelProps}
        className={clsx([
          BASE_LABEL_CLASS_NAME
        ])}
      >
        {props.label}
      </label>
      <input
        {...inputProps}
        className={clsx([
          BASE_INPUT_CLASS_NAME
        ])}
        ref={ref}
      />
      <div
        {...errorMessageProps}
        className={clsx([
          BASE_MESSAGE_CLASS_NAME,
        ])}
      >
        {props.errorMessage}
      </div>
    </div>
  );
};

const _TextField = forwardRef(TextField)

_TextField.defaultProps = {
  autoComplete: 'off'
}

export {  _TextField as TextField };
