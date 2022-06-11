import React from "react";
import "../assets/scss/component/infoSection.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="text-bg">Things We Do</div>
      <div className="image-container-row row w-100 justify-content-end m-0 align-items-center">
        <div className="col-12 col-sm-12 col-md-6 col-lg-5 p-0">
          <div className="image-container w-100">
            <div id="item-0" className="img">
              <p className="title p-f-2">
                Crafty Mind
                <button className="overlay-btn btn text-white p-f-4">
                  <FontAwesomeIcon className="icon" icon={faArrowRightLong} />
                  Read More
                </button>
              </p>
              <img src="images/Layer6@2x.png" />
            </div>
            <div id="item-1" className="img">
              <p className="title p-f-2">
                Services
                <button className="overlay-btn btn text-white p-f-4">
                <FontAwesomeIcon className="icon" icon={faArrowRightLong} />
                  Read More
                </button>
              </p>
              <img src="images/Layer 46@2x.png" />
            </div>
            <div id="item-2" className="img">
              <p className="title p-f-2">
                Envision
                <button className="overlay-btn btn text-white p-f-4">
                <FontAwesomeIcon className="icon" icon={faArrowRightLong} />
                  Read More
                </button>
              </p>
              <img src="images/Layerd6@2x.png" />
            </div>
            <div id="item-3" className="img">
              <img src="images/1446779582-melsungen-magdeburg@2x.png" />
              <p className="title p-f-2">
                Dynamics 365
                <button className="overlay-btn btn text-white p-f-4">
                <FontAwesomeIcon className="icon" icon={faArrowRightLong} />
                  Read More
                </button>
              </p>
            </div>
            <div id="item-4" className="img">
              <p className="title p-f-2">
                Transformation
                <button className="overlay-btn btn text-white p-f-4">
                <FontAwesomeIcon className="icon" icon={faArrowRightLong} />
                  Read More
                </button>
              </p>
              <img src="images/istockphoto-1327568875-170667a.jpg" />
            </div>
            <div id="item-5" className="space">
              &nbsp;
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 content p-0">
          <h2 className="h2 p-5 pb-3 color-primary">
            We Deliver Digital Productivity
          </h2>
          <p className="p-f-1 p-5 pt-2 text-white">
            We craft technology solutions that digitally bond and transform the
            productivity of our customers and their citizens, workers, consumers
            and partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
