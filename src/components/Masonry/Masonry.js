import React from 'react'

export default function Masonry(props) {
    return (
      <div class="portfolio__item" style={{columns: props.columnCount, columnGap: 0}} >
          {props.imageUrls.map( (img, i) => 
              <div style={{padding: props.gap/2}}><img src={img} key={i} className="image" alt={i} /></div>
          )}
      </div>
    )
  }