import React, {FC} from 'react';
import {Avatar} from "./Avatar";

interface AvatarGroupProps {
  sources?: string[],
}

const AvatarGroup: FC<AvatarGroupProps> = ({sources}) => {
  return (
    <>
      {sources?.map(source => (
        <Avatar
          className="-ml-4 border-2 border-white"
          key={source}
          src={source}/>
      ))}
    </>
  );
};

export {AvatarGroup};
