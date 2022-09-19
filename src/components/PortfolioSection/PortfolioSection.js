import React, { useState, useEffect } from "react";
import Masonry from "../Masonry/Masonry";
import "./portfolio.css";

import imageUrls from '../../constants/images';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function PortfolioSection() {
//   const imageUrls = [
//     "https://i.postimg.cc/52Tvrf5J/photo-2.png",
//     "https://i.postimg.cc/Kvcnkqc6/photo-1.png",
//     "https://i.postimg.cc/ry0dsX6c/1-1.jpg",
//     "https://i.postimg.cc/dQj20PFR/photo-4.png",
//     "https://i.postimg.cc/vThf29h2/photo-5.png",
//     "https://i.postimg.cc/0r112KT6/DSC-09.jpg",
//     "https://i.postimg.cc/N0XTqZbH/photo-6.png",
//     "https://i.postimg.cc/fTHYxcJJ/photo-3.png",
//   ];
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [columns, setColumns] = useState("3");
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    if (windowSize.innerWidth < "878" && windowSize.innerWidth > "525" ) {
      setColumns("2");
    }
    else if (windowSize.innerWidth < "525") {
      setColumns("1");
    } else {
      setColumns("3");
    }
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize.innerWidth]);

  return (
    <section className="portfolio">
      <div className="backdrop">
        <div className="horisontal-line">
          <h2 className="portfolio__title title">Portfolio</h2>
        </div>
        <div className="portfolio__container container">
          <div className="portfolio__galery">
            <Masonry imageUrls={imageUrls} columnCount={columns} gap="15" />
          </div>
          <button className="portfolio__button button">Show more</button>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
