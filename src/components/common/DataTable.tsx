import { ReactNode } from 'react';

const DataTable = ({ headers, rows }: { headers: string[]; rows: ReactNode[][] }) => (
  <div className="table-wrap">
    <table className="table">
      <thead>
        <tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DataTable;
