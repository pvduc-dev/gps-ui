import React, {FC} from 'react';

interface TableHeaderProps {
  headerGroups: any[]
}

const TableHeader: FC<TableHeaderProps> = ({headerGroups}) => {
  return (
    <thead>
    {headerGroups.map((headerGroup) => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column: any) => {
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
  );
};

export default TableHeader;
