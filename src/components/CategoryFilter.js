import React, { useEffect, useState } from "react";

const CategoryFilter = (props) => {

  function handleCatClikcked(category = null){
    props.handelCategoryChange(category);
  }

  return (
    <div className="filter row justify-content-center align-items-center">
      <button
        type="button"
        onClick={() => handleCatClikcked('')}
        className={`col-auto  filter-btn btn btn-sm p-f-4 shadow-none border-0 px-4 py-2 my-2 ${props.selectedCategory.id ? "" : "active"}`}
      >
        All News
      </button>
      {props.categories.length > 0  && props.categories.map((cat, i) => (
        <button
          onClick={() => handleCatClikcked(cat)}
          key={i}
          type="button"
          className={`col-auto  filter-btn btn btn-sm p-f-4 shadow-none border-0 px-4 py-2 my-2 ${cat.id == props.selectedCategory.id ? "active" : ""}`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
