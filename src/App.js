import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscomponent from './components/Newscomponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {v 
//     method: 'GET',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://newsapi.org/v2/everything?q=tesla&from=2022-02-15&sortBy=publishedAt&apiKey=7e8432d97254488dacf3cc951c564850').then((data)=>{
//   console.log(data)
// })

export default class App extends Component {

  render() {
    return (
      <>
        <Router>

          <Navbar />
          <Switch>
            <Route exact path="/"><Newscomponent key="general" pageSize={6} country={"in"} category={"general"} /></Route>
            <Route exact path="/business"><Newscomponent key="business" pageSize={6} country={"in"} category={"business"} /></Route>
            <Route exact path="/entertainment"><Newscomponent key="entertainment"  pageSize={6} country={"in"} category={"entertainment"} /></Route>
            <Route exact path="/general"><Newscomponent  key="general" pageSize={6} country={"in"} category={"general"} /></Route>
            <Route exact path="/health"><Newscomponent  key="health" pageSize={6} country={"in"} category={"health"} /></Route>
            <Route exact path="/science"><Newscomponent key="science"  pageSize={6} country={"in"} category={"science"} /></Route>
            <Route exact path="/sports"><Newscomponent key="sports"  pageSize={6} country={"in"} category={"sports"} /></Route>
            <Route exact path="/technology"><Newscomponent key="technology"  pageSize={6} country={"in"} category={"technology"} /></Route>
          </Switch>
        </Router>
      </>
    )
  }
}
