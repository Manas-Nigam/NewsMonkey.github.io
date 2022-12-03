import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-4 mx-4' id = "cards">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">

            <h5 className="card-title">{title}...</h5>
            <span className="badge rounded-pill text-bg-danger">{source}</span>

            <p className="card-text">{description}...</p>
            <p className="card-text" id><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toUTCString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary btn-sm btn-primary">Read more</a>


          </div>
        </div>
      </div>
    )
  }
}
