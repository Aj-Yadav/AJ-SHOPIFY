import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews {122}</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          We believe that style should be accessible to all. Our commitment to
          providing high-quality clothing at affordable prices ensures that you
          get unmatched value with every purchase.
        </p>
        <p>
          Explore our collection now and redefine your style with AJ-SHOPIFY.
          Elevate your wardrobe, embrace the latest trends, and make a lasting
          impression wherever you go. Your journey towards impeccable style
          starts here.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
