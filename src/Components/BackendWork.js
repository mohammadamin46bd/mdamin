import React from "react";
import { Container, Header } from "semantic-ui-react";
import CommonNavBar from "../common/CommonNavBar";
const backendWork = () => (
  <Container textAlign="justified">
    <CommonNavBar />

    <Header
      as="h1"
      content="Some previous backend work"
      style={{
        fontSize: "2em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: "1.5em",
      }}
    />

    <p>Some previous backend work experience will be added here.</p>
  </Container>
);

export default backendWork;
