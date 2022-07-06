// Button.stories.ts|tsx

import React, {useState} from 'react';

import { ComponentStory } from '@storybook/react';

import {AppProvider, Button} from '../../src';

export default {
  title: 'Button',
  component: Button as any
}

export const Primary: ComponentStory<typeof Button> = () => {
  const [isLoading, setIsLoading] = useState(false)

  function toggleLoading() {
    setIsLoading(prevState => !prevState);
  }

  return (
    <AppProvider>
      <div className="py-3">
        <Button
          className="mx-2"
          color="primary"
          isLoading={isLoading}
          onPress={toggleLoading}
        >
          Download
        </Button>
      </div>
      <div className="py-3">
        <Button
          className="mx-2"
          color="danger"
        >
          Danger
        </Button>
      </div>
      <div className="py-3">
        <Button
          className="mx-2"
          color="success"
        >
          Success
        </Button>
      </div>
      <div className="py-3">
        <Button
          className="mx-2"
          color="warning"
        >
          Warning
        </Button>
      </div>
      <div className="py-3">
        <Button
          className="mx-2"
          color="info"
        >
          Info
        </Button>
      </div>
    </AppProvider>
  )
};
Primary.storyName = 'Button';
