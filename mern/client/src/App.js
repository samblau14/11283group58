import React from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
import Footer from './components/footer';
import Title from './components/title';
import FirstPage from './components/firstPage';

import Alert from 'react-bootstrap/Alert';


const App = () => {
  return (
    <div>
      <Navbar />
      <Title />

      <FirstPage />

      <Footer />
    </div>
  );
};

export default App;
