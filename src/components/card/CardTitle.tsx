import React, {FC} from 'react';
import clsx from "clsx";
import Divider from "../divider/Divider";

interface CardTitleProps {
  className?: string;
}

const CardTitle: FC<CardTitleProps> = ({ className, children }) => {
  return (
    <>
      <div
        className={clsx('card__title', className)}
      >
        {children}
      </div>
      <Divider/>
    </>
  );
};

export { CardTitle };
