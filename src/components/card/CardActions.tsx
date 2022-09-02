import React, {FC} from 'react';

const CardActions: FC = (props) => {
  const {
    children,
  } = props;
  return (
    <div>
      {children}
    </div>
  );
};

export { CardActions };
