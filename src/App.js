import './App.css';

import React,{Component} from 'react'
import Navbar from './components/Navbar';
import Newscomponent from './components/Newscomponent';

export default class App extends Component {
  render() {
    return (
      <>
    <Navbar/>
    <Newscomponent/>
    </>
    )
  }
}
