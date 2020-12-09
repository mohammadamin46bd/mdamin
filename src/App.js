import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomepageLayout from "./Components/HomepageLayout";
import "semantic-ui-css/semantic.min.css";
import WorkGallary from "./Components/WorkGallary";
import FullstackWork from "./Components/FullstackWork";
import FrontendWork from "./Components/FrontendWork";
import BackendWork from "./Components/BackendWork";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomepageLayout} />
        <Route path="/workgallary" component={WorkGallary} />
        <Route path="/frontend" component={FrontendWork} />
        <Route path="/backend" component={BackendWork} />
        <Route path="/fullstack" component={FullstackWork} />
      </Switch>
    </div>
  );
}

export default App;
