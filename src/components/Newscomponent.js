import React ,{Component} from 'react'
import Newsitem from './Newsitem'
export default class newscomponent extends Component {

  render() {
    return (
        <>
        <h3 className='container my-3'>Top Headlines</h3>
        <div className="container">
                <div className="row">
                        <div className="col-md-4">
                                <Newsitem title="First" discription="This is the first news"/>
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

