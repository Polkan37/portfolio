import React from 'react'

export default function Masonry({imageUrls, columnCount, gap, size = 7}) {

    return (
      <ul className="portfolio__items" style={{columns: columnCount, columnGap: 0}} >
          {imageUrls.slice(0, size).map( img => 
              <li key={img.id} style={{padding: gap/2}}>
                <img src={img.url} className="image" alt={img.alt} />
              </li>
          )}

          
      </ul>
    )
  }
  