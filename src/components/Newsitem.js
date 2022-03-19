import React, { Component } from 'react'

export default class newsitem extends Component {
  render() {
    let { title, discription, imgURL, newsURL, author, date, source } = this.props;
    


    return (
      <div className="container my-3">
        <div className="card" style={{ width: "18rem" }}>

          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success" style={{ zIndex: 1, }}>{source} </span>

          <img src={imgURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{discription}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsURL} className='btn btn-sm btn-primary' target="_blank" >Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

