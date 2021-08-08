import React from "react";
import PropTypes from "prop-types";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./details.css";

function DetailCard({
  result: { TitleName, ReleaseYear, StoryLines = [], GenreNames = [] },
}) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h3">{TitleName}</CardTitle>
          <CardSubtitle tag="h4">Released {ReleaseYear}</CardSubtitle>
          <CardSubtitle className="detail-sub-headings" tag="h5">
            Description
          </CardSubtitle>
          <CardText className="details-card-text">
            {
              StoryLines.find(
                (storyline) => storyline.Type === "Turner External"
              ).Description
            }
          </CardText>
          <CardSubtitle tag="h5">Genres</CardSubtitle>
          <CardText className="details-card-text">
            {GenreNames.join(", ")}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}

DetailCard.propTypes = {
  result: PropTypes.shape({
    ReleaseYear: PropTypes.number,
    TitleName: PropTypes.string,
    StoryLines: PropTypes.array.isRequired,
    TitleGenres: PropTypes.array.isRequired,
    GenreNames: PropTypes.array,
  }),
};

export default DetailCard;
