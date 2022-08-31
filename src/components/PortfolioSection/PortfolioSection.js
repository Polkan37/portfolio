import React from 'react'
import Masonry from '../Masonry/Masonry';
import "./portfolio.css";

function PortfolioSection() {
    const imageUrls = [
        "https://i.postimg.cc/52Tvrf5J/photo-2.png",
        "https://i.postimg.cc/Kvcnkqc6/photo-1.png",
        "https://i.postimg.cc/g2n84xZ4/photo-7.png",
        "https://i.postimg.cc/dQj20PFR/photo-4.png",
        "https://i.postimg.cc/fTHYxcJJ/photo-3.png",
        "https://i.postimg.cc/vThf29h2/photo-5.png",
        "https://i.postimg.cc/N0XTqZbH/photo-6.png",
    ];


  return (
    <section className="portfolio">
            <div className="backdrop">
                <div className="horisontal-line">
                    <h2 className="portfolio__title title">Portfolio</h2>
                </div>
                <div className="portfolio__container container">
                    <div className="portfolio__galery">
                        <Masonry imageUrls={imageUrls} columnCount="3" gap="15"/>
                    </div>
                    <button className="portfolio__button button">Show more</button>
                </div>
            </div>
        </section>
  )
}

export default PortfolioSection