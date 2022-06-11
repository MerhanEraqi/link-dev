import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import "../assets/scss/component/mediaSection.scss";
import CategoryFilter from "./CategoryFilter";
import GeneralBtn from "./GeneralBtn";

const MediaSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("https://api.npoint.io/d275425a434e02acf2f7")
      .then((response) => response.json())
      .then((data) => setNews(data.News))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="media-container container pb-5">
      <h3 className="text-center color-secondary h6 pb-4 pt-5">Media</h3>
      <h2 className="text-center h3 color-primary pb-5">Top News</h2>
      <CategoryFilter/>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {news.map((el, i) => (
          el.showOnHomepage == 'yes' && <MediaCard  key={el.id} news={el}/>
      ))}
      </div>
      <div className="d-flex justify-content-center align-items-center py-5">
      <GeneralBtn title="View All News"/>
      </div>
    </div>
  );
};

export default MediaSection;
