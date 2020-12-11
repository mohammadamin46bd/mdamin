import React from "react";
import { Card, Segment, Container,Image } from "semantic-ui-react";
import { LiveWorkData } from "../data/LiveWorkData";

const LiveWorkSites = () => {
  /*
  const [liveWorkData, setLiveWorkData] = useState([]);
  useEffect(() => {
        let lwData = JSON.parse(localStorage.getItem("lw")) || [];
        if (lwData.length === 0) {
          axios
            .get(
              "https://cdn.contentful.com/spaces/qgy02z519tkz/environments/master/entries/3J6GAx29Z5mfjyknmwPJ8u?access_token=hEDisbPkmS_yFjud0OkToNEpTKLuqgyE3WnBuABcbh4"
            )
            .then((response) => {
              setLiveWorkData(response.data.fields.lw);
              localStorage.setItem("lw", JSON.stringify(response.data.fields.lw));
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          setLiveWorkData(lwData);
        }
      }, []);*/
  return (
    <Segment style={{ padding: "4em 0em" }} vertical>
      <Container>
        <Card.Group>
          {LiveWorkData.lw.map((lw,index) => {
            return (
              <Card fluid key ={'card_'+ index}>
                <Card.Content>
                  {Object.keys(lw.url).map((urlKey,ulidx)=>{                   
                      return urlKey === "url"?<iframe key={"urlKey_"+index+'_'+ ulidx} title="gronplan" width="100%" height="350px" src={lw.url[urlKey]}></iframe>:<Image key={"urlKey_"+index+'_'+ ulidx}  src={lw.url[urlKey]}  style={{width:"100%!important", height:"100%!important", objectFit: "contain"}}></Image>;                  
                  })}                  
                  <Card.Header
                    as="a"
                    target="_blank"
                    rel="noreferrer"
                    href={lw.url.hasOwnProperty("url")?lw.url.url:lw.url.img}
                  >
                    {lw.name}
                  </Card.Header>
                  {lw.description.map((des,desIdx)=>{
                    return <Card.Description key = {'card_des_'+index+'_'+desIdx}>{des.p}</Card.Description>
                  })}
                  
                  <Card.Header
                    style={{ fontSize: "1em", paddingTop: "5px" }}
                    as="a"
                    target="_blank"
                    rel="noreferrer"
                    href={lw.url.hasOwnProperty("url")?lw.url.url:lw.url.img}
                  >
                    {lw.fullscreenText}
                  </Card.Header>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </Container>
    </Segment>
  );
};
export default LiveWorkSites;
