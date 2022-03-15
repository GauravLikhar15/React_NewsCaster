import './App.css';

import React,{Component} from 'react'
import Navbar from './components/Navbar';
import Newscomponent from './components/Newscomponent';

// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
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
    <Navbar/>
    <Newscomponent pageSize={5}/>

      </>
    )
  }
}
