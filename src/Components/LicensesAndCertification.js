import React, { useState, useEffect } from "react";
import { Grid, Header, Segment, Container, Item } from "semantic-ui-react";

import axios from "axios";

const LicensesAndCertification = () => {
  const [
    licensesAndCertificationData,
    setLicensesAndCertificationData,
  ] = useState([]);

  useEffect(() => {
    let lcData = JSON.parse(localStorage.getItem("lc")) || [];
    if (lcData.length === 0) {
      axios
        .get(
          "https://cdn.contentful.com/spaces/qgy02z519tkz/environments/master/entries/1AYgjpoMDOUBGvatKXqb5D?access_token=hEDisbPkmS_yFjud0OkToNEpTKLuqgyE3WnBuABcbh4"
        )
        .then((response) => {
          setLicensesAndCertificationData(response.data.fields.lc);
          localStorage.setItem("lc", JSON.stringify(response.data.fields.lc));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setLicensesAndCertificationData(lcData);
    }
  }, []);

  return (
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
              {licensesAndCertificationData.map((lcItem, index) => (
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
};

export default LicensesAndCertification;
