import {Notification} from "../../src";
import {ComponentStory} from "@storybook/react";

export default {
  title: 'Notification',
  component: Notification as any,
}

export const Story: ComponentStory<typeof Notification> = () => {
  return (
    <>
      <button>Close</button>
    </>
  )
}

Story.storyName = 'Notification';
