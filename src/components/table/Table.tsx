import React, {FC} from 'react';
import {useTable, useColumnOrder} from 'react-table';

import './table.css';

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
  }, useColumnOrder)
  return (
    <table
      {...getTableProps()}
      className="table"
    >
      <thead>
        {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column) => {
            console.log(column)
            return (
              <th
                {...column.getHeaderProps()}
                style={{width: column?.width, maxWidth: column?.maxWidth, minWidth: column?.minWidth}}
              >
                {column.render('Header')}
              </th>
            )
          })}
        </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.slice(0, 10).map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export { Table };
