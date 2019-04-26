import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./Book.css";
import Bookshelf2 from "./components/Bookshelf2";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Bookshelf from "./Bookshelf2";

class App extends React.Component {
    // constructor() {
    //   super()
    // }
    render() {
      return (
        <BrowserRouter>
        <Navigation>
        <Switch>
          <Route path="/" component={Bookshelf} exact />
          <Route path="/Bookshelf2" component={Bookshelf2} />
          <Route component={Error}/>
        </Switch>
        </Navigation>
        </BrowserRouter>
        
      );
    }
  }

  export default App;