import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, Exercise1, Exercise2, Exercise3, Exercise4, Exercise5, Exercise6, Exercise7, Exercise8, Exercise9 } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/exercise1" exact component={() => <Exercise1 />} />
          <Route path="/exercise2" exact component={() => <Exercise2 />} />
          <Route path="/exercise3" exact component={() => <Exercise3 />} />
          <Route path="/exercise4" exact component={() => <Exercise4 />} />
          <Route path="/exercise5" exact component={() => <Exercise5 />} />
          <Route path="/exercise6" exact component={() => <Exercise6 />} />
          <Route path="/exercise7" exact component={() => <Exercise7 />} />
          <Route path="/exercise8" exact component={() => <Exercise8 />} />
          <Route path="/exercise9" exact component={() => <Exercise9 />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
