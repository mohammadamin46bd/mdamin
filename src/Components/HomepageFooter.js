import React from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

const homepageFooter = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={5}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a">Sitemap</List.Item>
              <List.Item as="a">Contact me:</List.Item>
              <List.Item href="mailto:mohammad.amin.gis@gmail.com" as="a">
                mohammad.amin.gis@gmail.com
              </List.Item>
              <List.Item
                target="_blank"
                rel="noreferrer"
                href="http://mdamin.se"
                as="a"
              >
                Adress: mdamin.se
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item as="a">Frontend development</List.Item>
              <List.Item as="a">Backend development</List.Item>
              <List.Item as="a">Fullstack development</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={6}>
            <Header as="h4" inverted>
              Page with
            </Header>
            <p>React, Sementic UI React and Contentful</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);
export default homepageFooter;
