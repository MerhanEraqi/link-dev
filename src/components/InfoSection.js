import React from "react";
import "../assets/scss/component/infoSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import data from "../services/thingsweDo.json";

const InfoSection = () => {
  let thingsWeDoData = data.thingsWeDo;
  return (
    <div className="info-section">
      <div className="text-bg d-none d-sm-none d-md-block">Things We Do</div>
      <div className="image-container-row row w-100 justify-content-end m-0 align-items-center">
        <div className="col-12 col-sm-12 col-md-6 col-lg-5 p-0">
          <div className="image-container w-100">
            {thingsWeDoData.data.map((el, i) => (
              <div id={"item-"+i} className="img" key={el.id}>
                <p className="title p-f-2">
                  <span>{el.title}</span>
                  <a href={el.readMoreUrl} className="overlay-btn btn text-white p-f-4">
                    <FontAwesomeIcon className="icon" icon={faArrowRightLong} />
                    Read More
                    </a>
                </p>
                <img src={"images/"+ el.imgUrl} />
              </div>
            ))}

            <div id="item-5" className="space">
              &nbsp;
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 content p-0">
          <h2 className="h1 p-5 pb-3 color-primary">{thingsWeDoData.title}</h2>
          <p className="p-f-1 p-5 pt-2 text-white">{thingsWeDoData.breif}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
