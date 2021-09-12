import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrrollingHolder from "./Components/ScrrollingHolder";
import HeaderView from "./Components/HeaderView";
import HeaderNav from "./Components/Header/HeaderNav";
function App() {
  return (
    <div>
      <Router>
     
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={ScrrollingHolder} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
