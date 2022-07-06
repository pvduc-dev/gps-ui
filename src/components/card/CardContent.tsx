import React, {FC} from 'react';
import clsx from "clsx";

interface CardContentProps {
  className?: string;
}

const BASE_CARD_CONTENT_CLASS_NAME = 'px-4 py-3 text-sm'

const CardContent: FC<CardContentProps> = ({ children }) => {
  return (
    <div
      className={clsx([
        BASE_CARD_CONTENT_CLASS_NAME
      ])}
    >
      {children}
    </div>
  );
};

export { CardContent };
