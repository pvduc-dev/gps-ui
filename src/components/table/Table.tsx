import React, {FC} from 'react';
import {useColumnOrder, useTable} from 'react-table';

import './table.css';
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

interface TableProps {
  columns: Record<string, any>[];
  data: Record<string, any>[];
}

const Table: FC<TableProps> = ({columns, data}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns: columns as any[],
    data: data as any,
  }, useColumnOrder);

  return (
    <table
      {...getTableProps()}
      className="table"
    >
      <TableHeader
        headerGroups={headerGroups}
      />
      <TableBody
        getTableBodyProps={getTableBodyProps}
        prepareRow={prepareRow}
        rows={rows}
      />
    </table>
  );
};

export { Table };
