//react stuff
import ReactDOM from "react-dom";
import React, { Component, Fragment } from "react";

//component stuff
import Navbar from "./layout/Navbar";
import Chart from "./visualization/Chart";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from './dashboard/Dashboard'

//bootstrap stuff
import { Button } from "react-bootstrap";
//router stuff
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//redux stuff
import { Provider } from "react-redux";
import store from "../store";
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <div className="app">
              <Navbar />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="/chart" exact component={Chart} />
                  <Route path='/dash' exact component ={Dashboard} />
                </Switch>
              </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
