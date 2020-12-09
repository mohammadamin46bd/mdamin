import React from "react";
import { Grid, Header, Segment, Container, Item } from "semantic-ui-react";
import { educationData } from "../data/EducationData";

const educations = () => (
  <Segment style={{ padding: "4em 0em" }} vertical>
    <Container>
      <Grid container stackable textAlign="left">
        <Grid.Row>
          <Header as="h1" floated="left">
            Experience
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Item.Group>
            {educationData.edu.map((eduItem, index) => (
              <Item key={index}>
                <Item.Content>
                  <Item.Header as="a">{eduItem.school}</Item.Header>
                  <Item.Meta>{eduItem.department}</Item.Meta>
                  <Item.Meta>{eduItem.duration}</Item.Meta>
                </Item.Content>
              </Item>
            ))}
          </Item.Group>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default educations;
