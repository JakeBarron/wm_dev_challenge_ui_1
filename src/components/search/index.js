import React, { useState } from "react";
import SearchResultsTable from "./SearchResultsTable";
import { Button, Container, Col, Label, Input, Row } from "reactstrap";
import "./search.css";

import { search } from "../../api";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [noResults, setNoResults] = useState(false);

  async function handleSearch() {
    try {
      setIsSearching(true);
      const results = await search(searchTerm);
      setNoResults(results.length == 0);
      setSearchResults(results);
    } catch (err) {
      console.log(err);
    } finally {
      setIsSearching(false);
    }
  }

  return (
    <Container>
      <Row className="align-items-end">
        <Col>
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
            onKeyDown={(e) => {
              if (e.key === "Enter" && searchTerm) {
                handleSearch();
              }
            }}
          />
        </Col>
        <Col>
          <Button
            className="align-bottom"
            type="button"
            color="primary"
            onClick={() => handleSearch()}
            disabled={!searchTerm}
          >
            Search
          </Button>
        </Col>
      </Row>
      <Row>
        <SearchResultsTable
          results={searchResults}
          isSearching={isSearching}
          searchTerm={searchTerm}
          noResults={noResults}
        />
      </Row>
    </Container>
  );
};

export default Search;
