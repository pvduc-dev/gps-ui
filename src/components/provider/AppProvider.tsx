import React, {FC} from 'react';
import {OverlayProvider} from "react-aria";

const AppProvider: FC = ({children}) => {
  return (
    <OverlayProvider>
      {children}
    </OverlayProvider>
  );
};

export { AppProvider };
