import React from "react";
import "../assets/scss/component/infoSection.scss";

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="row w-100 justify-content-end m-0 align-items-center">
        <div className="d-none d-sm-none d-md-block col-md-5 p-0">
          <div class="image-container w-100">
            <div id="item-0" className="img">
            <p className="title p-f-3">Crafty Mind</p>
              <img src="images/Layer6@2x.png" />
            </div>
            <div id="item-1" className="img">
            <p className="title p-f-3">Services</p>
              <img src="images/Layer 46@2x.png" />
            </div>
            <div id="item-2" className="img">
            <p className="title p-f-3">Envision</p>
              <img src="images/Layerd6@2x.png" />
            </div>
            <div id="item-3" className="img">
              <img src="images/1446779582-melsungen-magdeburg@2x.png" />
              <p className="title p-f-3">Dynamics 365</p>
            </div>
            <div id="item-4" className="img">
            <p className="title p-f-3">Transformation</p>
              <img src="images/istockphoto-1327568875-170667a.jpg" />
            </div>
            <div id="item-5" className="space">
              &nbsp;
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 content p-0">
          <h2 className="h2 p-5 pb-3 color-primary">We Deliver Digital Productivity</h2>
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
