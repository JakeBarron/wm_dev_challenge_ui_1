import React from "react";
import { Table } from "reactstrap";

function SearchResultsTable({ results = [], isLoading }) {
  const headers = results.length > 0 ? Object.keys(results[0]) : [];

  return isLoading ? (
    <div>loading ...</div>
  ) : (
    <Table hover>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {results.map((result, resultIndex) => {
          return (
            <tr key={"result-" + resultIndex}>
              {headers.map((header) => {
                return <td>{result[header]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default SearchResultsTable;
