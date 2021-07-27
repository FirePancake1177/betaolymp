import React from 'react';
import NavBar from "./Components/NavBar";
import "./app.css";
import {Route, Switch} from "react-router-dom";
import HomePage from "./Components/HomePage";
import ContentDisplay from "./Components/ContentDisplay";
import Info from "./Components/Info";

function App() {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');

  headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  headers.append('Access-Control-Allow-Origin', 'http://localhost:5000/posts');

  headers.append('Access-Control-Allow-Credentials', 'true');


  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <div className="main-content">
            <NavBar/>
            <HomePage/>
          </div>
        </Route>
        <Route path="/olymp" exact>
          <NavBar/>
          <ContentDisplay/>
        </Route>
        <Route path="/info" exact>
          <div className="main-content">
            <NavBar/>
            <Info/>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
