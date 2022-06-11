import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";
import "../assets/scss/component/mediaSection.scss";
import CategoryFilter from "./CategoryFilter";
import GeneralBtn from "./GeneralBtn";

const MediaSection = () => {
  const [news, setNews] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://api.npoint.io/91298d970c27e9a06518")
      .then((response) => response.json())
      .then((data) => setCategories(data.newsCategory))
      .catch((err) => console.log(err));

    fetch("https://api.npoint.io/d275425a434e02acf2f7")
      .then((response) => response.json())
      .then((data) =>{
        let sortData = data.News.sort((a,b) => compareDates(a.publishedDate,b.publishedDate))
        console.log(sortData)
        return setNews(sortData)
      })
      .catch((err) => console.log(err));
  }, []);

  function compareDates(date1, date2){
    let _date1 = new Date(date1);
    let _date2 = new Date(date2);

    return  _date2.getTime() -_date1.getTime()
  }

  function handelCategoryChange(category) {
    setSelectedCategory(category);

    if (category) {
      const filteredNews = news.filter(
        (el) => el.categoryID == parseInt(category.id)
      );
      setFilteredList(filteredNews);
    } else {
      setFilteredList([]);
    }
  }

  function filterCategoryById(id) {
    let cat = categories.filter((el) => el.id == id);
    return cat[0];
  }

  return (
    <div className="media-container container pb-5">
      <h3 className="text-center color-secondary h6 pb-4 pt-5">Media</h3>
      <h2 className="text-center h3 color-primary pb-5">Top News</h2>
      <CategoryFilter
        selectedCategory={selectedCategory}
        categories={categories}
        handelCategoryChange={handelCategoryChange}
      />
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {!selectedCategory && news.length > 0 ? (
          news.map(
            (el, i) =>
              el.showOnHomepage == "yes" && (
                <MediaCard
                  key={el.id}
                  news={el}
                  category={filterCategoryById(el.categoryID)}
                />
              )
          )
        ) : filteredList.length > 0 ? (
          filteredList.map(
            (el, i) =>
              el.showOnHomepage == "yes" && (
                <MediaCard
                  key={el.id}
                  news={el}
                  category={filterCategoryById(el.categoryID)}
                />
              )
          )
        ) : (
          <div
            className="alert alert-danger my-5 mx-auto text-center"
            role="alert"
          >
            No News Found Under This Category
          </div>
        )}
      </div>
      <div className="d-flex justify-content-center align-items-center py-5">
        <GeneralBtn title="View All News" />
      </div>
    </div>
  );
};

export default MediaSection;
