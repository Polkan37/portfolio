import React, { useState } from 'react'
import "./price.css"
import Tabs from './Tabs';
import Modal from "../Modal/Modal";

function PriceSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
    <section className="price">
      <div className="backdrop">
        <div className="horisontal-line">
            <h2 className="portfolio__title title">Price</h2>
        </div>
        <Tabs setOpenModal={setModalOpen} />
        
      </div>
    </section>
    
      
    {modalOpen && <Modal setOpenModal={setModalOpen} title='Замовити' place='Button in hero section'/>}
    </div>
  )
}

export default PriceSection