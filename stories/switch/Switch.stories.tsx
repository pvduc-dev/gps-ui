import React, {useState} from 'react';

import { ComponentStory } from '@storybook/react';

import {Card, CardContent, Switch} from '../../src';

export default {
  title: 'Switch',
  component: Switch as any
}

export const Primary: ComponentStory<typeof Switch> = () => {
  const [isSelected, setIsSelected] = useState(false);

  function onChangeHandler(isSelected: boolean) {
    setIsSelected(isSelected);
  }

  return (
    <>
      <Card>
        <CardContent>
          <Switch
            aria-label="checkbox"
            isSelected={isSelected}
            onChange={onChangeHandler}/>
        </CardContent>
      </Card>
    </>
  )
}
Primary.storyName = 'Switch';
