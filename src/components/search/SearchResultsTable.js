import React from "react";
import PropTypes from "prop-types";
import { Table, Container } from "reactstrap";
import "./search.css";
import { useHistory } from "react-router-dom";

const VISIBLE_HEADERS = [
  { display: "Id", value: "TitleId" },
  { display: "Title", value: "TitleName" },
  { display: "Release Year", value: "ReleaseYear" },
];
function SearchResultsTable({
  results = [],
  isSearching = false,
  searchTerm = "",
  noResults = false,
}) {
  let history = useHistory();
  //const headers = results.length > 0 ? Object.keys(results[0]) : [];
  const visibleHeaders = VISIBLE_HEADERS;
  function handleClick(titleId) {
    history.push(`/details/${titleId}`);
  }

  function renderTableHeaders() {
    return (
      <thead>
        <tr>
          {visibleHeaders.map((header) => (
            <th key={header.value}>{header.display}</th>
          ))}
        </tr>
      </thead>
    );
  }

  if (isSearching) {
    return <Container>loading ...</Container>;
  } else if (noResults) {
    return (
      <Container className="no-results-container">
        <h4> no results for search term &quot;{searchTerm}&quot; Try Again!</h4>
      </Container>
    );
  } else {
    return (
      <Table hover>
        {renderTableHeaders()}
        <tbody>
          {results.map((result, resultIndex) => {
            return (
              <tr className="results-row" key={"result-" + resultIndex}>
                {visibleHeaders.map((header) => {
                  return (
                    <td
                      key={`${resultIndex}-${header.value}`}
                      onClick={() => {
                        handleClick(result.TitleId);
                      }}
                    >
                      {result[header.value]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

SearchResultsTable.propTypes = {
  results: PropTypes.array.isRequired,
  isSearching: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
};

export default SearchResultsTable;
