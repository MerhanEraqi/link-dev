import React, { useEffect, useState } from "react";

const CategoryFilter = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    fetch("https://api.npoint.io/91298d970c27e9a06518")
      .then((response) => response.json())
      .then((data) => setCategories(data.newsCategory))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="filter row justify-content-center align-items-center">
      <button
        type="button"
        className="col-auto  filter-btn btn btn-sm p-f-4 shadow-none border-0 px-4 py-2 my-2 active"
      >
        All News
      </button>
      {categories.map((cat, i) => (
        <button
          key={i}
          type="button"
          className="col-auto  filter-btn btn btn-sm p-f-4 shadow-none border-0 px-4 py-2 my-2"
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
