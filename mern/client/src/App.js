import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
import Footer from './components/footer';
import FirstPage from './components/firstPage';
import Survey from './components/surveyPage';
import Title from "./components/title";

const App = () => {
  return (
    <div>
      <br /><br /><br />
      <Title />

      <Switch>

      <Route exact path="/">
        <FirstPage />
      </Route>

      <Route path="/edit/:id">


        {/* <Edit /> */}
      </Route>

      <Route path="/survey">
        <Survey />
        
        {/* <Create />
        <RecordList /> */}
      </Route>

      <Route path="/result/:id">
        {/* hehe */}
      </Route>

      </Switch>

      <Footer />
    </div>
  );
};

export default App;
