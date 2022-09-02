import React, {FC, FocusEvent, RefObject, useRef} from 'react';
import clsx from 'clsx';
import {useButton} from "react-aria";
import {AriaButtonProps} from '@react-types/button';
import {Color} from "../../types/color";
// @ts-ignore
import style from '../../index.css';

interface ButtonProps extends AriaButtonProps {
  isBlock?: boolean;
  isLoading?: boolean;
  isText?: boolean;
  id?: string;
  className?: string | object | string[];
  color?: Color;
  ref?: any;
  onFocus?: (e: FocusEvent) => void;
  command?: Function,
}

const Button: FC<ButtonProps> = (props) => {
  const isDisabled = props.isDisabled || props.isLoading;

  const buttonRef = useRef() as RefObject<HTMLButtonElement>;
  const { buttonProps } = useButton({
    ...props,
    isDisabled,
  }, buttonRef);

  const {
    type,
    id,
    isBlock,
    isLoading,
    isText,
    color,
    children,
    className,
  } = props;

  const _className = clsx(
    'button',
    {'button--block': isBlock},
    {'button--info': color === 'info'},
    {'button--success': color === 'success'},
    {'button--disabled': props.isDisabled},
    {'button--warning': color === 'warning'},
    {'button--danger': color === 'danger'},
    {'button--loading': isLoading},
    {'button--text': isText},
    className,
    style['px-2']
  );

  async function handleClick(): Promise<void> {
  }

  return (
    <button
      {...buttonProps}
      type={type}
      id={id}
      className={_className}
      onClick={handleClick}
    >
      {isLoading &&
        <svg className="inline-block animate-spin h-3.5 w-3.5 mr-1.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
             viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12" cy="12" r="10" stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
        </svg>
      }
      {children}
    </button>
  );
};

export {
  Button
}
