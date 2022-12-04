import React, {FC} from 'react';
import {NotifierContextProvider} from "react-headless-notifier";

const NotificationProvider: FC = (props) => {
  return (
    <NotifierContextProvider
      config={{
        max: 3,
        duration: 4000,
        position: 'bottomRight',
      }}
    >
      {props.children}
    </NotifierContextProvider>
  );
};

export { NotificationProvider };
