import React, { useEffect, useState } from "react";
import { getDetailsById } from "../../api";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import DetailCard from "./DetailCard";

function Details() {
  let titleId = useParams().titleId;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [result, setResult] = useState(null);
  useEffect(async () => {
    try {
      setIsLoading(true);
      setIsError("");
      const result = await getDetailsById(titleId);
      if (result.status == 404) {
        setIsError("There is no title with that id!  Try again.");
      } else {
        setResult(result);
      }
    } catch (err) {
      console.log({ err });
    } finally {
      setIsLoading(false);
    }
  }, [titleId]);

  if (isLoading) {
    return <Container>loading . . .</Container>;
  } else if (isError) {
    return <Container>{isError}</Container>;
  } else if (result) {
    return (
      <Container>
        <DetailCard result={result} />
      </Container>
    );
  } else {
    return <Container>This is not the page you are looking for ... </Container>;
  }
}

export default Details;
