import React from "react";

import { ComponentStory } from "@storybook/react";

import {
  Card,
  CardContent,
  CardTitle,
  Slider
} from "../../src";

export default {
  title: 'Slider',
  component: Slider as any
}

export const Story: ComponentStory<typeof Slider> = () => (
  <Card
    width={480}
  >
    <CardTitle>
      Slider
    </CardTitle>
    <CardContent>
      <Slider
        label="Opacity"
      />
    </CardContent>
  </Card>
);

Story.storyName = 'Slider';
