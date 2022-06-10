import React from "react";
import MediaCard from "./MediaCard";
import "../assets/scss/component/mediaSection.scss";

const MediaSection = () => {
  return (
    <div class="media-container container">
      <h3 className="text-center color-secondary h6 pb-4 pt-5">Media</h3>
      <h2 className="text-center h3 color-primary pb-5">Top News</h2>
      <div className="filter row justify-content-center align-items-center">
        <button type="button" class="col-auto active filter-btn btn btn-sm p-f-4 shadow-none border-0 px-4 py-2 my-2">
          All news
        </button>
        <button type="button" class="col-auto  filter-btn btn btn-sm p-f-4 shadow-none border-0 px-4 py-2 my-2">
          Technology
        </button>
        <button type="button" class="col-auto  filter-btn btn btn-sm p-f-4 shadow-none border-0 px-4 py-2 my-2">
          Sport
        </button>
        <button type="button" class="col-auto  filter-btn btn btn-sm p-f-4 shadow-none border-0 px-4 py-2 my-2">
          Healt
        </button>
        <button type="button" class="col-auto  filter-btn btn btn-sm p-f-4 shadow-none border-0 px-4 py-2 my-2">
          Economics
        </button>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
        <MediaCard />
      </div>
    </div>
  );
};

export default MediaSection;
