import React from 'react'

export default function Masonry(props) {
    return (
      <div className="portfolio__item" style={{columns: props.columnCount, columnGap: 0}} >
          {props.imageUrls.map( (img, id) => 
              <div style={{padding: props.gap/2}}><img src={img} key={id} className="image" alt={id} /></div>
          )}
      </div>
    )
  }