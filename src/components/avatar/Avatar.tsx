import React, {FC} from 'react';
import './avatar.css'
import clsx from "clsx";

interface AvatarProps {
  className?: string,
  src: string;
}

const Avatar: FC<AvatarProps> = ({src, className}) => {
  return (
    <div
      className={
        clsx([
          'avatar',
          className
        ])}
      style={{
        backgroundImage: `url(${src})`
      }}
    >
    </div>
  );
};

export {Avatar};
