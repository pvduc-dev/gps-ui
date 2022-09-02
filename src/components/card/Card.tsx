import React, {FC} from 'react';

import './card.css';
import clsx from "clsx";

interface CardProps {
  width?: string | number;
  className?: string;
}

const Card: FC<CardProps> =(props) => {
  const {
    width,
    className,
    children,
  } = props
  return (
    <div
      className={clsx(['card', className])}
      style={{width: width}}
    >
      {children}
    </div>
  );
};

export {
  Card
};
