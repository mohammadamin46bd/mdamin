import PropTypes from "prop-types";
import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";

const homepageHeading = ({ mobile }) => (
  <Container textAlign="justified">
    <Header
      as="h1"
      content="Mohammad Amin Uzzal"
      inverted
      style={{
        fontSize: mobile ? "1,5em" : "2em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1em" : "1.5em",
      }}
    />
    <Divider />

    <p>
      Jag är en driven och motiverad frontend fokuserad fullstackutvecklare med
      en examen i geodesi och geoinformatik från KTH. Jag har över 11 års
      erfarenhet inom geoinformatik, fotogrammetriska och GIS. Som utvecklare
      har min primära fokus legat på JavaScript med ramverken React och Node.
      Jag är en engagerad och driven professionell med stor passion för att
      skapa smarta digitala lösningar.
      <br></br>
      <br></br>
      Jag har en bred kunskap och kompetens inom hela webbutvecklingskedjan. Jag
      är nyfiken på att lösa problem, att lära sig ny affärslogik samt teknik.
      Jag gillar och försöker arbeta strukturerat och på ett organiserat sätt.
      Jag är en social och kommunikativ lagspelare, som gärna vägleder samt
      tycker om att arbeta i en utmanande och komplex miljö. Jag är alltid
      villig att lära.
      <br></br>
      <br></br>
      Jag tycker att det är roligt och utvecklande att arbeta med
      systemutveckling där det gåt att integrera med real-tid dataanalys och
      genomföra olika åtgärder baserat på analysresultat. Jag har arbetat som
      Frontend fokuserad fullstack-utvecklare, GIS-utvecklare, konsult, data
      analyst, systemförvaltare, projektledare och samordnare under mitt
      arbetsliv.
    </p>
  </Container>
);

homepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default homepageHeading;
