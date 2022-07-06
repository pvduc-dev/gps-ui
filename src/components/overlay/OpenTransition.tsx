import React, {Children, FC, PropsWithChildren} from 'react';
import Transition from 'react-transition-group/Transition';

const OPEN_STATES = {
  entering: false,
  entered: true,
};

const OpenTransition: FC<PropsWithChildren<any>> = (props) => {
  return (
    <Transition
      timeout={{
        enter: 0,
        exit: 350
      }}
      {...props}
    >
      {(state: 'entering' | 'entered') => Children.map(props.children, child => child && React.cloneElement(child, {isOpen: OPEN_STATES[state]}))}
    </Transition>
  );
};

export {OpenTransition};
