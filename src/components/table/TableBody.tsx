import React, {FC} from 'react';

interface TableBodyProps {
  getTableBodyProps: Function,
  rows: any[],
  prepareRow: Function,
}

const TableBody: FC<TableBodyProps> = ({getTableBodyProps, rows, prepareRow}) => {
  return (
    <tbody {...getTableBodyProps()}>
    {rows.slice(0, 10).map((row) => {
      prepareRow(row)
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map((cell: any) => {
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
  );
};

export default TableBody;
