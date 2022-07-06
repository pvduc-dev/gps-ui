import React, {Key} from "react";
import { ComponentStory } from "@storybook/react";
import {Breadcrumbs, BreadcrumbItem, Card, CardContent, CardTitle} from "../../src";

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs as any
}

const folders = [
  {
    id: 1,
    label: 'Home',
  },
  {
    id: 2,
    label: 'Trendy',
  },
  {
    id: 3,
    label: 'March 2022 Assets',
  }
]

export const Story: ComponentStory<typeof Breadcrumbs> = () => {
  function handleAction(value: Key) {
    debugger;
    console.log(value)
  }

  return (
    <Card
      width={500}
    >
      <CardTitle>
        Breadcrumb
      </CardTitle>
      <CardContent>
        <Breadcrumbs
          onAction={handleAction}
        >
          {folders.map(folder =>
            <BreadcrumbItem
              key={folder.id}
            >
              {folder.label}
            </BreadcrumbItem>
          )}
        </Breadcrumbs>
      </CardContent>
    </Card>
  )
}

Story.storyName = 'Breadcrumbs';
