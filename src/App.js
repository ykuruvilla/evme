import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";

import "./App.scss";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Results from "./components/Results";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/questionnaire" component={Form} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </>
  );
};

export default App;
