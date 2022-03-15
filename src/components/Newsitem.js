import React,{Component} from 'react'

export default class newsitem extends Component {
        render() {
    let {title,discription,imgURL,newsURL}=this.props;
    console.log(this.props)
    return (
        <div className="container my-3">
          
        <div className="card" style={{width: "18rem"}}>
        <img src={imgURL} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{discription}...</p>
          <a href={newsURL} className='btn btn-sm btn-primary'  target="_blank" >Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

