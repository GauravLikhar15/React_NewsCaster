import React,{Component} from 'react'

export default class newsitem extends Component {
        render() {
                let {title,discription,imgURL,newUrl}=this.props;
    return (
        <div className="container my-3">
          
        <div className="card" style={{width: "18rem"}}>
        <img src={imgURL} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{discription}</p>
          <a href="" className='btn btn-sm btn-primary'>Read More</a>
        </div>
      </div>
      </div>
    )
  }
}

