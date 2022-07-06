import React, {FC} from 'react';

// import clsx from "clsx";
// @ts-ignore
import style from '../../index.css';

interface CardProps {
  width?: string | number;
  className?: string;
}

// const BASE_CARD_CLASS_NAME = 'max-w-full rounded-lg bg-white text-black border border-black border-opacity-[15%] py-2 dark:bg-[#0F0D1E] dark:text-[#E5E7EB] card'

const Card: FC<CardProps> =(props) => {
  const {
    width,
    // className,
    children,
  } = props
  return (
    <div
      className={style['p-2']}
      style={{width: width}}
    >
      {children}
    </div>
  );
};

export {
  Card
};
