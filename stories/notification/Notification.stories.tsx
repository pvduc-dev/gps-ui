import {Notification, NotificationProvider} from "../../src";
import {ComponentStory} from "@storybook/react";
import {NotifierContextProvider, useNotifier} from "react-headless-notifier";

export default {
  title: 'Notification',
  component: Notification as any,
  decorators: [
    (Story) => (
      <NotificationProvider>
        <Story/>
      </NotificationProvider>
    )
  ]
}

export const Story: ComponentStory<typeof Notification> = () => {
  const {notify} = useNotifier();

  function showNotification() {
    notify(
      <Notification
        title="You are done!"
        message="Enjoy React Headless Notifier!"
       onDismiss={() => {}}/>,
      {
        position: 'bottomRight',
        duration: 5000,
      },
    );
  }

  return (
    <div
      style={{
        width: 'calc(100vw - 30px)',
        height: 'calc(100vh - 40px)'
      }}
    >
      <button
        onClick={showNotification}
      >Show Notification
      </button>
    </div>
  )
}

Story.storyName = 'Notification';
