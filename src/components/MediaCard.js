import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faShareNodes, faHeart } from '@fortawesome/free-solid-svg-icons'

const MediaCard = (props) => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-4 m-0">
      <div className="card">
        <img
          alt={props.news.title}
          className="card-img img-fluid"
          src={props.news.urlToImage}
        />

        <div className="card-body p-4">
          <p className="card-text h6 color-secondary line-clamp line-clamp-3">
            {props.news.content}
          </p>
          <p className="p-f-4 color-secondary py-3">
            <span className="icon"><FontAwesomeIcon icon={faCalendarDays} /></span> {props.news.publishedDate}</p>
          <div className="d-flex justify-content-between align-items-center">
            <a className="btn btn-secondary p-f-4 cat-section bg-secondary py-0 px-1">{props.category.name}</a>

            <div className="share-btns">
              <button type="button" className="btn btn-sm shadow-none border-0 p-f-3">
              <FontAwesomeIcon icon={faHeart} />
              </button>
              <button type="button" className="btn btn-sm p-f-3 shadow-none border-0">
              <FontAwesomeIcon icon={faShareNodes} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MediaCard;
