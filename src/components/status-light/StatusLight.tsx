import React, {FC} from 'react';
import clsx from "clsx";

interface StatusLightProps {
  variant?: 'primary' | 'success' | 'info' | 'danger' | 'warning';
  className?: string;
}

const BASE_STATUS_LIGHT_CLASS_NAME = 'py-3 before:content-[\'\'] before:mr-2 before:inline-block before:w-2 before:h-2 before:bg-gray-400 before:rounded-full'
const INFO_CLASS_NAME = 'before:!bg-info';
const SUCCESS_CLASS_NAME = 'before:!bg-success';
const DANGER_CLASS_NAME = 'before:!bg-danger';
const WARNING_CLASS_NAME = 'before:!bg-warning';

const StatusLight: FC<StatusLightProps> = ({className, variant, children}) => {
  return (
    <div
      className={clsx([
        BASE_STATUS_LIGHT_CLASS_NAME,
        {[INFO_CLASS_NAME]: variant === 'info'},
        {[SUCCESS_CLASS_NAME]: variant === 'success'},
        {[DANGER_CLASS_NAME]: variant === 'danger'},
        {[WARNING_CLASS_NAME]: variant === 'warning'},
        className,
      ])}
    >
      {children}
    </div>
  );
};

export {StatusLight};
