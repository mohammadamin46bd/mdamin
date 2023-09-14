import React, { useState, useEffect } from "react";
import { Grid, Header, Segment, Container, Item } from "semantic-ui-react";
import axios from "axios";

const Educations = () => {
  const [educationData, setEducationData] = useState([]);

  useEffect(() => {
    let eduData = JSON.parse(localStorage.getItem("edu")) || [];
    if (eduData.length === 0) {
      axios
        .get(
          "https://cdn.contentful.com/spaces/qgy02z519tkz/environments/master/entries/3J6GAx29Z5mfjyknmwPJ8u?access_token=hEDisbPkmS_yFjud0OkToNEpTKLuqgyE3WnBuABcbh4"
        )
        .then((response) => {
          setEducationData(response.data.fields.edu);
          localStorage.setItem("edu", JSON.stringify(response.data.fields.edu));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setEducationData(eduData);
    }
  }, []);

  return (
    <Segment style={{ padding: "4em 0em" }} vertical>
      <Container>
        <Grid container stackable textAlign="left">
          <Grid.Row>
            <Header as="h1" floated="left">Utbildning</Header>
          </Grid.Row>
          <Grid.Row>
            <Item.Group>
              {educationData.map((eduItem, index) => (
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
};

export default Educations;
