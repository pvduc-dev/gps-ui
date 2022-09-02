import React, {useRef} from "react";

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
  const ref = useRef<HTMLInputElement>(null);

  return (
    <Card
      width={400}
    >
      <CardContent>
        <NumberField
          ref={ref}
          label="Price"
          formatOptions={{
            style: 'currency',
            currency: 'VND',
            currencyDisplay: 'code'
          }}
          value={20000}
        />
      </CardContent>
    </Card>
  )
}

Story.storyName = 'NumberField';
