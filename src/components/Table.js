import React, { useMemo } from "react";
import { useTable } from "react-table";
import { COLUMNS } from "./componentList/Column";
import { useQuery } from "@apollo/client";
import "./table.css";

function Table({ Data }) {
  //   const { loading, error, data } = useQuery(AllEmployee);
  //   console.log(Data);

  const columns = useMemo(() => COLUMNS, []);

  const tableInstance = useTable({
    columns,
    data: Data,
  });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  return (
    <div>
      {Data && (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroups) => (
              <tr className="" {...headerGroups.getHeaderGroupProps()}>
                {headerGroups.headers.map((column) => (
                  <th className="bg-blue-600" {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
