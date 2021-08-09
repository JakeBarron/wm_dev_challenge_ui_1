import React from "react";
import { Container } from "reactstrap";

function Requirements() {
  return (
    <Container>
      <h3>Developer Challenge:</h3>
      <p>
        Thanks for being interested in this opportunity. You will have 48 hours
        from the receipt of this document to:
      </p>
      <ul>
        <li>Write the code to complete the challenge.</li>
        <li>
          Push it to a public repository. We will review this with you during
          the next step, so don’t delete it.
        </li>
        <li>Send us the URL to your repository.</li>
      </ul>
      <p>
        We will then clone your repository, run the code, and assess your
        solution.
      </p>
      <h4>The Problem:</h4>
      <p>We would like you to build an application that allows users to:</p>
      <ul>
        <li>Search for a Title by its name.</li>
        <li>Display the titles that match the above criteria.</li>
        <li>
          Allow the user to pull up detailed information about a selected title
          from the list.
        </li>
      </ul>
      <h4>Code:</h4>
      <h5>Preferred technology stack:</h5>
      <ul>
        <li>Bootstrap</li>
        <li>Angular2+</li>
        <li>WebAPI</li>
        <li>Entity Framework</li>
      </ul>
      Data: SQL Server Express:
      <p>
        Rename attached file: “Titles.bak_” to “Titles.bak”. Restore
        “Titles.bak” using the instructions from the link below.
      </p>
      <p>[REDACTED]</p>
      <h4>Hints:</h4>
      <ul>
        <li>Do your best to impress us.</li>
        <li>Expect us to Lint your JavaScript.</li>
        <li>
          Form is as important as function. If your app works, but is written
          like a website from 2001, that would be bad.
        </li>
        <li>
          We&apos;re suckers for new technologies (i.e. React, Angular, media
          queries, MVC).
        </li>
        <li>
          Creativity: Don&apos;t like our requirements? Feel free to enhance
          this app as you see fit.
        </li>
        <li>Feel free to host the app somewhere.</li>
      </ul>
    </Container>
  );
}

export default Requirements;
