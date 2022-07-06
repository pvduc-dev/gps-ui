import React, {FC} from 'react';
import clsx from "clsx";
import Divider from "../divider/Divider";

interface CardTitleProps {
  className?: string;
}

const CARD_TITLE_CLASS_NAME = 'px-4 py-1 font-medium text-lg text-primary'

const CardTitle: FC<CardTitleProps> = ({ children }) => {
  return (
    <>
      <div
        className={clsx(CARD_TITLE_CLASS_NAME)}
      >
        {children}
      </div>
      <Divider/>
    </>
  );
};

export { CardTitle };
