import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import './App.css';

import Index from "./views/Index.jsx";
// import Book from "./views/My%Books";
import BookPage from "./views/Browse/BookPage.jsx";

function App() { //stateless component
  return ( 
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Index}></Route>    
          {/* <Route path="/book" exact component={Book}></Route>     */}
          <Route path="/book" exact component={BookPage}></Route>    
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
