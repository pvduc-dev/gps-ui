import React from "react";

import { ComponentStory } from "@storybook/react";

import {
  Card, CardContent, CardTitle,
  Select
} from "../../src";

export default {
  title: 'Select',
  component: Select as any
}

export const Story: ComponentStory<typeof Select> = () => (
  <Card
    width={480}
  >
    <CardTitle>
      Select
    </CardTitle>
    <CardContent>
      <Select/>
    </CardContent>
  </Card>
);

Story.storyName = 'Select';
