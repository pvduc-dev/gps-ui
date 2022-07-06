import React, {FC, RefObject} from 'react';
import {useNumberField} from '@react-aria/numberfield';
import {useNumberFieldState} from '@react-stately/numberfield';
import {useLocale} from '@react-aria/i18n';
import {AriaNumberFieldProps} from '@react-types/numberfield';
import {useButton} from "react-aria";
import clsx from "clsx";
import Divider from "../divider/Divider";

interface NumberFieldProps extends AriaNumberFieldProps {

}

const NumberField: FC<NumberFieldProps> = (props) => {
  const {locale} = useLocale();
  const state = useNumberFieldState({...props, locale})
  const inputRef = React.useRef() as RefObject<HTMLInputElement>;
  const incrRef = React.useRef() as RefObject<HTMLButtonElement>;
  const decRef = React.useRef() as RefObject<HTMLButtonElement>;
  const {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
  } = useNumberField(props, state, inputRef);

  const {buttonProps: incrementProps} = useButton(incrementButtonProps, incrRef);
  const {buttonProps: decrementProps} = useButton(decrementButtonProps, decRef);

  const BASE_LABEL_CLASS_NAME = 'inline-block text-sm font-medium leading-none m-1 mb-3'
  const BASE_INPUT_CLASS_NAME = 'px-3 py-2.5 rounded-md w-full outline-none border dark:bg-[#0F0D1E] dark:border-[#1F1B39]'
  const BASE_GROUP_CLASS_NAME = 'relative';

  return (
    <div>
      <label
        className={clsx([
          BASE_LABEL_CLASS_NAME
        ])}
        {...labelProps}
      >
        {props.label}
      </label>
      <div
        className={clsx([
          BASE_GROUP_CLASS_NAME
        ])}
        {...groupProps}
      >
        <input
          className={clsx([
            BASE_INPUT_CLASS_NAME
          ])}
          {...inputProps} ref={inputRef}
        />
        <button
          className={clsx([
            'absolute',
            'bottom-0',
            'right-0',
            'border',
            'w-9',
            'h-1/2',
            'flex',
            'justify-center',
            'items-center',
            'border-t-0',
            'rounded-br-md',
            'cursor-default',
            'dark:border-[#1F1B39]'
          ])}
          {...decrementProps} ref={decRef}
        >
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="17"
            height="17"
          >
            <path
              d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z"/>
          </svg>
        </button>
        <Divider
          className="absolute top-1/2 right-0 w-9"
        />
        <button
          className={clsx([
            'absolute',
            'top-0',
            'right-0',
            'border',
            'w-9',
            'h-1/2',
            'flex',
            'border-b-0',
            'justify-center',
            'items-center',
            'rounded-tr-md',
            'cursor-default',
            'dark:border-[#1F1B39]'
          ])}
          {...incrementProps} ref={incrRef}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current"
            id="Outline"
            viewBox="0 0 24 24"
            width="17"
            height="17"
          >
            <path
              d="M18,15.5a1,1,0,0,1-.71-.29l-4.58-4.59a1,1,0,0,0-1.42,0L6.71,15.21a1,1,0,0,1-1.42-1.42L9.88,9.21a3.06,3.06,0,0,1,4.24,0l4.59,4.58a1,1,0,0,1,0,1.42A1,1,0,0,1,18,15.5Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export {NumberField};
