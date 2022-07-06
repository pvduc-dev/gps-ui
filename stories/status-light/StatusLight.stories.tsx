import React from 'react';
import {Card, CardContent, StatusLight} from '../../src';

import { ComponentStory } from '@storybook/react';
import Divider from "../../src/components/divider/Divider";

export default {
  title: 'StatusLight',
  component: StatusLight as any
}

export const Story: ComponentStory<typeof StatusLight> = () => (
  <Card
    width={360}
  >
    <CardContent>
      <StatusLight
        className="py-3"
      >
        Default
      </StatusLight>
      <Divider/>
      <StatusLight
        variant="success"
        className="py-3"
      >
        Success
      </StatusLight>
      <Divider/>
      <StatusLight
        className="py-3"
        variant={'info'}
      >
        Info
      </StatusLight>
      <Divider/>
      <StatusLight
        className="py-3"
        variant="danger"
      >
        Danger
      </StatusLight>
      <Divider/>
      <StatusLight
        variant="warning"
        className="py-3"
      >
        Warning
      </StatusLight>
    </CardContent>
  </Card>
)

Story.storyName = 'StatusLight'
