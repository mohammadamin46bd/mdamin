import React from "react";
import { Grid, Header, Segment, Container, Item } from "semantic-ui-react";
import { LicensesAndCertificationsData } from "../data/LicensesAndCertificationsData";

const licensesAndCertification = () => (
  <Segment style={{ padding: "4em 0em" }} vertical>
    <Container>
      <Grid container stackable textAlign="left">
        <Grid.Row>
          <Header as="h1" floated="left">
            Licenses & Certifications
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Item.Group>
            {LicensesAndCertificationsData.LC.map((lcItem, index) => (
              <Item key={index}>
                <Item.Content>
                  <Item.Header as="a">{lcItem.name}</Item.Header>
                  <Item.Meta>{lcItem.issuing_organization}</Item.Meta>
                  <Item.Meta>{lcItem.issue_data}</Item.Meta>
                  <Item.Meta>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={lcItem.credential_url}
                    >
                      See credential
                    </a>
                  </Item.Meta>
                </Item.Content>
              </Item>
            ))}
          </Item.Group>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default licensesAndCertification;
