import React from 'react';

import { ComponentStory } from '@storybook/react';

import {
  Avatar,
} from '../../src';

export default {
  title: 'Avatar',
  component: Avatar as any
}

export const Story: ComponentStory<typeof Avatar> = () => (
  <Avatar
    src="https://res.cloudinary.com/pv-duc/image/upload/v1566485913/sample.jpg"
  />
);
Story.storyName = 'Avatar';
