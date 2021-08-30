import React from "react";
import News from "./Components/News";
import Vaccine from "./Components/Vaccine";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./App.css";
import NavBar from "./Components/NavBar"
import Global from "./Components/Statewise"




function App() {
  return (
    <>
    <Router>
        <NavBar />
        <div className="extra"></div>
      

      <div className="App">
      <Switch>
        <Route path="/Statewise" component={Global}/>
        <Route path="/News" component={News}/>
        <Route path="/Vaccine" component={Vaccine} />
      </Switch>
      </div>
    </Router>

    
      
    </>
  );
}

export default App;
