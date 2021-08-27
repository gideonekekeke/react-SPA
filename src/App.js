import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrrollingHolder from "./Components/ScrrollingHolder";
import HeaderView from "./Components/HeaderView";
function App() {
  return (
    <div>
      <Router>
        <HeaderView />
        <Switch>
          <Route exact path="/" component={ScrrollingHolder} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
