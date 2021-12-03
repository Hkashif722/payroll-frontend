import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    "& .super-app-theme--header": {
      backgroundColor: "#4285F4",
      color: "white",
    },
  },
});
export default function DataTable({ rows, columns, col }) {
  const classes = useStyles();
  let rowId;
  console.log(rowId);
  return (
    rows && (
      <div
        style={{
          height: col ? 500 : 700,
          alignItems: "center",
          textAlign: "right",
          width: `${col ? "146%" : "250%"} `,
          backgroundColor: "blue",
        }}
        className={classes.root}
      >
        <DataGrid
          className=" bg-white  "
          rows={rows}
          columns={columns}
          pageSize={10}
          // onColumnHeaderClick
          disableSelectionOnClick
        />
      </div>
    )
  );
}

// import React, { useMemo } from "react";
// import { useTable } from "react-table";
// import { COLUMNS } from "./componentList/Column";
// import { useQuery } from "@apollo/client";
// import "./table.css";

// function Table({ Data }) {
//   //   const { loading, error, data } = useQuery(AllEmployee);
//   //   console.log(Data);

//   const columns = useMemo(() => COLUMNS, []);

//   const tableInstance = useTable({
//     columns,
//     data: Data,
//   });
//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     tableInstance;
//   return (
//     <div>
//       {Data && (
//         <table {...getTableProps()}>
//           <thead>
//             {headerGroups.map((headerGroups) => (
//               <tr className="" {...headerGroups.getHeaderGroupProps()}>
//                 {headerGroups.headers.map((column) => (
//                   <th className="bg-blue-600" {...column.getHeaderProps()}>
//                     {column.render("Header")}
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {rows.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr {...row.getRowProps()}>
//                   {row.cells.map((cell) => (
//                     <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
//                   ))}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }

// export default Table;
