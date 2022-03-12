import React ,{Component} from 'react'
import Newsitem from './Newsitem'
export default class newscomponent extends Component {

        
        
        constructer(){
                console.log("This is constructer");
        }
  render() {
    return (
        <>
        <h3 className='container my-3'>Top Headlines</h3>
        <div className="container">
                <div className="row">
                        <div className="col-md-4">
                                <Newsitem title="First" discription="This is the first news"imgURL="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/1200px-BBC_News_2019.svg.png" newsURL="To do"/>
                        </div>
                        <div className="col-md-4">
                                <Newsitem title="Second" discription="This is the second news"/>
                        </div>
                        <div className="col-md-4">
                                <Newsitem title="Third" discription="This is the third news"/>
                        </div>
                </div>

        </div>
        </>
    )
  }
}

