import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import CommonNavBar from "../common/CommonNavBar";

const fullstackWork = () => (
  <Container textAlign="justified">
    <CommonNavBar />
    <Header
      as="h1"
      content="Some previous fullstack work"
      style={{
        fontSize: "2em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: "1.5em",
      }}
    />

    <p>Some previous fullstack work experience will be added here.</p>
  </Container>
);
export default fullstackWork;
