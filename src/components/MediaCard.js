import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faShareNodes, faHeart } from '@fortawesome/free-solid-svg-icons'

const MediaCard = () => {
  return (
    <div className="col-12 col-sm-12 col-md-6 col-lg-4 p-4 m-0">
      <div className="card">
        <img
          className="card-img img-fluid"
          src="images/SexualViolence_TopicImage.jpg"
        />

        <div className="card-body p-4">
          <p className="card-text h6 color-secondary">
            Let us commit to do our part and advance the promise of equality, justice...
          </p>
          <p className="p-f-4 color-secondary py-3">
            <span className="icon"><FontAwesomeIcon icon={faCalendarDays} /></span> Wed 12 Aug 2022</p>
          <div className="d-flex justify-content-between align-items-center">
            <a className="btn btn-secondary p-f-4 cat-section bg-secondary py-0 px-1">Economics</a>

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
