import React from "react";
import { Container, Header } from "semantic-ui-react";
import CommonNavBar from "../common/CommonNavBar";

const frontendWork = () => (
  <Container textAlign="justified">
    <CommonNavBar />

    <Header
      as="h1"
      content="Some previous frontend work"
      style={{
        fontSize: "2em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: "1.5em",
      }}
    />

    <p>Some previous frontend work experience will be added here.</p>
  </Container>
);

export default frontendWork;
