import React from 'react';

import { ComponentStory } from '@storybook/react';

import {
  Card,
  CardContent,
  CardTitle,
  Form,
  NumberField, Slider,
  TextField,
} from '../../src';
import {FormControl} from "../../src/components/form/FormControl";

export default {
  title: 'Form',
  component: Form as any
}

export const Story: ComponentStory<typeof Form> = ({}) => {
  function handleSubmit(data: object) {
    console.log(data)
  }

  return (
    <Card
      width={464}
    >
      <CardTitle>
        Form
      </CardTitle>
      <CardContent>
        <Form
          defaultValues={{
            email: 'pvduc.dev@gmail.com',
            username: 'pvduc196',
            password: 'password',
            enable: true,
            price: 200000,
          }}
          onSubmit={handleSubmit}
        >
          <FormControl
            name="email"
          >
            <TextField
              label="Email"
            />
          </FormControl>
          <FormControl
            name="username"
          >
            <TextField
              label="Username"
            />
          </FormControl>
          <FormControl
            name="password"
          >
            <TextField
              type="password"
              label="Password"
            />
          </FormControl>
          <FormControl
            name="price"
          >
            <NumberField
              label="Price"
              step={100}
              minValue={0}
              formatOptions={{
                style: 'currency',
                currency: 'VND',
              }}
            />
          </FormControl>
          <FormControl name="percent">
            <Slider
              label="Percent"
            />
          </FormControl>
        </Form>
      </CardContent>
    </Card>
  )
}
Story.storyName = 'Form';
