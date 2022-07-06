import React from 'react';
import { ComponentStory } from '@storybook/react';
import {Card, CardContent, CardTitle, TextField} from "../../src";


export default {
  title: 'TextField',
  component: TextField as any
}

export const Story: ComponentStory<typeof TextField> = () => {
  return (
    <Card
      width={464}
    >
      <CardTitle>
        Sign in
      </CardTitle>
      <CardContent>
        <TextField
          label="Email"
          errorMessage="Email is invalid"
        />
        <TextField
          label="Username"
          defaultValue="Alo"
        />
        <TextField
          label="Password"
        />
      </CardContent>
    </Card>
  )
}

Story.storyName = 'TextField';
