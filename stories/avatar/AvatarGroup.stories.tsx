import React from 'react';

import { ComponentStory } from '@storybook/react';

import {
  AvatarGroup,
  Card, CardContent,
} from '../../src';

export default {
  title: 'AvatarGroup',
  component: AvatarGroup as any
}

export const Story: ComponentStory<typeof AvatarGroup> = () => {

  return (
    <Card
      width={600}
    >
      <CardContent>
        <AvatarGroup
          sources={[
            'https://res.cloudinary.com/pv-duc/image/upload/v1566485913/sample.jpg'
          ]}
        />
      </CardContent>
    </Card>
  )
}
Story.storyName = 'AvatarGroup';
