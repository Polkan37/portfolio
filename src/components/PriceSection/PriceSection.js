import React, { useState } from 'react'
import "./price.css"
import Tabs from './Tabs';
import Modal from "../Modal/Modal";
import Cards from './Cards';

function PriceSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [buttonClickPlace, setButtonClickPlace] = useState();

  return (
    <div>
    <section className="price">
      <div className="backdrop">
        <div className="horisontal-line">
            <h2 className="portfolio__title title">Price</h2>
        </div>
        <Tabs setOpenModal={setModalOpen} place={setButtonClickPlace} />
        <Cards setOpenModal={setModalOpen} place={setButtonClickPlace} />
        
      </div>
    </section>
    
      
    {modalOpen && <Modal setOpenModal={setModalOpen} title='Замовити' place={buttonClickPlace}/>}
    </div>
  )
}

export default PriceSection