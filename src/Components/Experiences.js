import React, { useState, useEffect } from "react";
import {
  Grid,
  Segment,
  Item,
  Container,
  List,
  Header,
} from "semantic-ui-react";
import axios from "axios";

const Experiences = () => {
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    let expData = JSON.parse(localStorage.getItem("exp")) || [];
    if (expData.length === 0) {
      axios
        .get(
          "https://cdn.contentful.com/spaces/qgy02z519tkz/environments/master/entries/7bCU0Qw2zVMJ8xpKGGTeEn?access_token=hEDisbPkmS_yFjud0OkToNEpTKLuqgyE3WnBuABcbh4"
        )
        .then((response) => {
          setExperienceData(response.data.fields.exp);
          localStorage.setItem("exp", JSON.stringify(response.data.fields.exp));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setExperienceData(expData);
    }
  }, []);

  return (
    <Segment style={{ padding: "4em 0em" }} vertical>
      <Container>
        <Grid container stackable textAlign="left">
          <Grid.Row>
            <Header as="h1" floated="left">
              Arbetslivserfarenhet
            </Header>
          </Grid.Row>
          <Grid.Row>
            <Item.Group>
              {experienceData.map((itemKey, index) => {
                return (
                  <Item key={"exp_" + index}>
                    <Item.Content>
                      <Item.Header as="a">{itemKey.title}</Item.Header>
                      <Item.Meta>
                        {itemKey.company} . {itemKey.employment_type}
                      </Item.Meta>
                      <Item.Meta>
                        {itemKey.start_date} - {itemKey.end_date}
                      </Item.Meta>
                      <Item.Meta>{itemKey.location}</Item.Meta>
                      {itemKey.description.map((textItem, inddesc) => {
                        return Object.keys(textItem).map((tkey) => {
                          let elementToReturn = null;
                          if (tkey === "p") {
                            elementToReturn = (
                              <Item.Description
                                key={"p_" + index + "_" + inddesc}
                              >
                                {textItem[tkey]}
                              </Item.Description>
                            );
                          } else if (tkey === "bp") {
                            elementToReturn = (
                              <Item.Description
                                key={"bp_" + index + "_" + inddesc}
                              >
                                <Header as="h5">{textItem[tkey]}</Header>
                              </Item.Description>
                            );
                          } else if (tkey === "l") {
                            let listItemElement = textItem[tkey].map(
                              (listItem, indL) => (
                                <List.Item
                                  key={
                                    "descIt_" +
                                    index +
                                    "_" +
                                    inddesc +
                                    "_" +
                                    indL
                                  }
                                  as="li"
                                >
                                  {listItem}
                                </List.Item>
                              )
                            );

                            elementToReturn = (
                              <Item.Description
                                key={"desc_" + index + "_" + inddesc}
                              >
                                <List as="ul">{listItemElement}</List>
                              </Item.Description>
                            );
                          } else {
                            console.log("not handled");
                            console.log(tkey);
                          }
                          return elementToReturn;
                        });
                      })}
                    </Item.Content>
                  </Item>
                );
              })}
            </Item.Group>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default Experiences;
