import React, { useState, useEffect } from "react";
import SearchResultsTable from "./SearchResultsTable";
import { Button, Container, Col, Label, Input, Row } from "reactstrap";
import "./search.css";

import { search } from "../../api";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  async function handleSearch() {
    setIsSearching(true);
    const results = await search(searchTerm);
    setSearchResults(results);
    console.log(results);
    setSearchResults(results);
    setIsSearching(false);
  }

  return (
    <Container>
      <Row>
        <Col sm="8">
          <Label for="searchTerm">Search Term</Label>
          <Input
            type="text"
            name="search term"
            id="search-term"
            placeholder="search a term"
            value={searchTerm}
            onChange={(e) => {
              e.preventDefault();
              setSearchTerm(e.target.value);
            }}
          />
        </Col>
        <Col sm="4" className="align-bottom">
          <Button
            className="align-bottom"
            type="button"
            color="primary"
            onClick={() => handleSearch()}
          >
            Search
          </Button>
        </Col>
      </Row>
      {searchResults.length === 0 ? (
        <div>no results</div>
      ) : (
        <Row>
          <SearchResultsTable
            results={searchResults}
            isSearching={isSearching}
          />
        </Row>
      )}
    </Container>
  );
};

export default Search;
