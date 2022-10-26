import React, { useState } from "react";
import Masonry from "./Masonry";
import "./portfolio.css";
import { imageUrls } from "../../constants/portfolioImages";
const minAmounOfImageInGallery = 5;

function PortfolioSection() {
  let [imgAmount, setImgAmount] = useState(minAmounOfImageInGallery);
  const [display, setDisplay] = useState("block");

  const showMore = () => {
      imgAmount += imageUrls.length - imgAmount;
      setDisplay("none");
      setImgAmount(imgAmount);
  };

  return (
    <section className="portfolio">
      <div className="backdrop">
        <div className="horisontal-line">
          <h2 className="portfolio__title title" id="portfolio">
            Portfolio
          </h2>
        </div>
        <div className="portfolio__container container">
          <div className="portfolio__galery">
            <Masonry imageUrls={imageUrls} gap="10" size={imgAmount}/> 
          </div>

          <button
            className="portfolio__button button"
            onClick={showMore}
            style={{ display: display }}
          >
            Show more
          </button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
