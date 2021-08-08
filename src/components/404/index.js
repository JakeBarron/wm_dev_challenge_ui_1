import React from "react";
import { useLocation } from "react-router-dom";
import { Jumbotron } from "reactstrap";

function NoMatch() {
  let location = useLocation();
  return (
    <Jumbotron>
      <h3 className="text-danger">
        It seems you are lost! There is nothing at{" "}
        <code>{location.pathname}</code>
      </h3>
    </Jumbotron>
  );
}

export default NoMatch;
