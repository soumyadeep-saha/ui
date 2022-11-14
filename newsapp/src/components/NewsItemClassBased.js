import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
          <span className="badge rounded-pill bg-danger"
            style={{ zIndex: "1", left: "90%" }}>
            {source}
          </span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-12757.jpg?w=2000&t=st=1666274476~exp=1666275076~hmac=bce90938868b18aa41ff7f2f018ec834af6246b608bf823d57bd7d00cbb16834"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-danger">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(publishedAt).toLocaleString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
