import PropTypes from "prop-types";
import React from "react";
import {
  Container,
  Card,
  Image,
} from "semantic-ui-react";
import mdamin from "../assets/mdamin.png";

const homepageHeading = ({ mobile }) => (
  <Container textAlign="justified">
    <Card
      fluid
      color="black"
      style={{ background: "#1b1c1d", border: "0px", boxShadow: "none" }}
    >
      
      <Card.Content>
      <Image floated="left" size="small" src={mdamin} style={{borderRadius:"100px"}} />
        <Card.Header style={{ color: "white" }}>Mohammad Amin</Card.Header>
        <Card.Meta style={{ color: "white" }}>Fullstack utvecklare, Sopra Steria</Card.Meta>
        <Card.Meta style={{ color: "white" }}>Utbildning: Masterexamen, Kungliga Tekniska högskolan (KTH), 2011</Card.Meta>
        <Card.Meta style={{ color: "white" }}>Kvalifikationer: JavaScript, React, Node, C# .Net, PHP, GIS</Card.Meta>      
        <Card.Description style={{ color: "white" }}>
          Jag är en driven och motiverad frontend fokuserad fullstackutvecklare
          med en examen i geodesi och geoinformatik från KTH. Jag har över 11
          års erfarenhet inom geoinformatik, fotogrammetriska och GIS. Som
          utvecklare har min primära fokus legat på JavaScript med ramverken
          React och Node. Jag är en engagerad och driven professionell med stor
          passion för att skapa smarta digitala lösningar.
        </Card.Description>
        <br></br>
        <Card.Description style={{ color: "white" }}>
          Jag har en bred kunskap och kompetens inom hela webbutvecklingskedjan.
          Jag är nyfiken på att lösa problem, att lära sig ny affärslogik samt
          teknik. Jag gillar och försöker arbeta strukturerat och på ett
          organiserat sätt. Jag är en social och kommunikativ lagspelare, som
          gärna vägleder samt tycker om att arbeta i en utmanande och komplex
          miljö. Jag är alltid villig att lära.
        </Card.Description>
        <br></br>
        <Card.Description style={{ color: "white" }}>
          Jag tycker att det är roligt och utvecklande att arbeta med
          systemutveckling där det gåt att integrera med real-tid dataanalys och
          genomföra olika åtgärder baserat på analysresultat. Jag har arbetat
          som Frontend fokuserad fullstack-utvecklare, GIS-utvecklare, konsult,
          data analyst, systemförvaltare, projektledare och samordnare under
          mitt arbetsliv.
        </Card.Description>
      </Card.Content>
    </Card>
  </Container>
);

homepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default homepageHeading;
