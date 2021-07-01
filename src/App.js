import "./App.css";
import {Login} from "./components/Login"
import { DashBoard } from "./components/DashBoard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  return (
    <Router>
    <div className="app">
    <Switch>
          <Route exact path="/login">
            <Login type="login"/>
          </Route>
          <Route exact path="/register">
            <Login type="register"/>
          </Route>
          <Route exact path="/dashboard">
            <DashBoard />
          </Route>
    </Switch>
    </div>
    </Router>
   );
 }

export default App;
