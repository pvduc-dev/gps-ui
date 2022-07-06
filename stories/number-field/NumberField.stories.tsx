import React from "react";

import { ComponentStory } from "@storybook/react";

import {
  Card, CardContent,
  NumberField,
} from '../../src';

export default {
  title: 'NumberField',
  component: NumberField as any,
}

export const Story: ComponentStory<typeof NumberField> = () => {
  return (
    <Card
      width={400}
    >
      <CardContent>
        <NumberField
          label="Price"
          formatOptions={{
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'code'
          }}
        />
      </CardContent>
    </Card>
  )
}

Story.storyName = 'NumberField';
