import React from 'react';

import { ComponentStory } from '@storybook/react';

import {
  Card, CardContent,
  CardTitle
} from '../../src';

export default {
  title: 'Card',
  component: Card as any
}

export const Story: ComponentStory<typeof Card> = () => (
  <Card
    width="420px"
  >
    <CardTitle>
      Card title
    </CardTitle>
    <CardContent>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet consequatur culpa, cum deleniti ea enim facilis laborum magni neque nulla officia omnis pariatur quibusdam quidem recusandae repudiandae sed unde voluptatem voluptates! Beatae corporis doloremque dolorum enim optio, ratione similique sunt ut. Beatae debitis enim id iste reiciendis repellat tempore! Modi, nostrum, reiciendis? Adipisci asperiores aspernatur culpa enim molestias pariatur sunt! At debitis ipsam perferendis praesentium quasi, quo sint voluptatum. Aliquid asperiores corporis delectus dolorem ea earum eos est explicabo ipsa ipsum libero natus porro provident quod ratione sed, totam ullam velit voluptatibus voluptatum! Accusamus delectus modi soluta temporibus tenetur?
    </CardContent>
  </Card>
);
Story.storyName = 'Card';
