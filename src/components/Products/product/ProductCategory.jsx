import React from "react";
import categories from "../../../json/category.json";
const ProductCategory = ({ category }) => {
  return (
    categories?.length > 0 &&
    categories
      ?.filter((cat) => category?.includes(cat?.id))
      .map((cat) => (
        <span className="product-cats" key={cat?.name}>
          {cat?.name}
        </span>
      ))
  );
};

export default ProductCategory;
