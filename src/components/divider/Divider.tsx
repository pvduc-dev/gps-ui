import React, {FC} from 'react';
import clsx from "clsx";

interface DividerProps {
  className?: string;
}

const BASE_DIVIDER_CLASS_NAME = 'border-black dark:border-[#1D1A32] border-opacity-[12%] dark:border-opacity-100'

const Divider: FC<DividerProps> = (props) => {
  return (
    <hr
      role="separator"
      className={clsx([
        BASE_DIVIDER_CLASS_NAME,
        props.className
      ])}
    />
  );
};

export default Divider;
