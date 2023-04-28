import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


import "./style/app.css";
import donorRegister from "./donorComponents/donorRegister";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
{/* 
          switch is used when there more than 1 path */}
          <Switch>
            <Route exact path="/" component={donorRegister} />
           

            {/* another path for hospitalcomponent */}

        \
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
