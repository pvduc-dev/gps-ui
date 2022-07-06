import React, {useMemo} from 'react';

import { ComponentStory } from '@storybook/react';

import { Table, Card } from '../../src';

export default {
  title: 'Table',
  component: Table as any
}

export const Story: ComponentStory<typeof Table> = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
            width: '200px',
            maxWidth: '200px'
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
      {
        Header: 'Info',
        width: '200px',
        columns: [
          {
            Header: 'Age',
            accessor: 'age',
          },
          {
            Header: 'Visits',
            accessor: 'visits',
          },
          {
            Header: 'Status',
            accessor: 'status',
          },
          {
            Header: 'Profile Progress',
            accessor: 'progress',
          },
        ],
      },
    ],
    []
  )
  const data = useMemo(() => [
    {
      firstName: 'Pv',
      lastName: 'Duc',
      age: 1,
      visits: 5,
      status: 'Pending',
      progress: 'Apply',
    },
    {
      firstName: 'Pv',
      lastName: 'Duc',
      age: 1,
      visits: 5,
      status: 'Pending',
      progress: 'Apply',
    },
    {
      firstName: 'Pv',
      lastName: 'Duc',
      age: 1,
      visits: 5,
      status: 'Pending',
      progress: 'Apply',
    },
    {
      firstName: 'Pv',
      lastName: 'Duc',
      age: 1,
      visits: 5,
      status: 'Pending',
      progress: 'Apply',
    },
    {
      firstName: 'Pv',
      lastName: 'Duc',
      age: 1,
      visits: 5,
      status: 'Pending',
      progress: 'Apply',
    },
    {
      firstName: 'Pv',
      lastName: 'Duc',
      age: 1,
      visits: 5,
      status: 'Pending',
      progress: 'Apply',
    },
    {
      firstName: 'Pv',
      lastName: 'Duc',
      age: 1,
      visits: 5,
      status: 'Pending',
      progress: 'Apply',
    },
    {
      firstName: 'Pv',
      lastName: 'Duc',
      age: 1,
      visits: 5,
      status: 'Pending',
      progress: 'Apply',
    },
  ], [])
  return (
    <>
      <Card>
        <Table
          columns={columns}
          data={data}
        />
      </Card>
    </>
  )
}
Story.storyName = 'Table';
