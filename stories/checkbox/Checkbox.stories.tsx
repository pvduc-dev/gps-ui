import React from "react";
import {Card, CardContent, Checkbox} from "../../src";
import {ComponentStory} from "@storybook/react";

export default {
  title: 'Checkbox',
  component: Checkbox as any,
}

export const Story: ComponentStory<typeof Checkbox> = () => {
  return (
    <Card>
      <CardContent>
        <Checkbox
          isSelected={true}
        />
      </CardContent>
    </Card>
  )
}

Story.storyName = 'Checkbox';
