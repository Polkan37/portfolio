import React from 'react'
import "./price.css"

let cardInfo = [
    { id: 1, name: 'Минимум', price: '100$', options: ['Съемка - 60 минут','Обратботка -  14 дней','Обработка 50 удачных снимков','Консультация по подбору образа'] },
    { id: 2, name: 'Стандарт', price: '200$', options: ['Съемка - 2 часа','Обратботка -  21 день','Обработка 100 удачных снимков','Консультация по подбору образа'] },
    { id: 3, name: 'Премиум', price: '150$/час', options: ['Мин. время - 4 часа','Обратботка -  до 50 дней','Ретушь крупных планов','Обработка всех удачных снимков', 'Фотокнига из 20 кадров'] },
];
const selectCard = (deg = 0, info = cardInfo[1]) => {
    document.querySelector(".triangle").style.transform = 'translateX(' + deg + 'px)';
    document.querySelector(".mobile-card__info").innerHTML =`<div class="card__price"> ${info.price}</div> <ul>${getOptions(info.options)} </ul>`;
} 

const getOptions = (info) => {
    let options = [];
    info.forEach(el => {
        options.push('<li>' + el + '</li>')
    });
    return options.join('');
}

function PriceSection() {
  return (
    <section className="price">
      <div className="backdrop">
        <div className="horisontal-line">
            <h2 className="portfolio__title title">Price</h2>
        </div>
        <div className="price__container container">
          <div className="price__card card">
            <div className="card__title">Минимум</div>

            <div className="card__price">100$</div>

            <div className="card__info">
              <ul>
                <li>Cъемка 60 минут</li>
                <li>Обработка 14 дней</li>
                <li>Обработка 50 удачных снимков</li>
                <li>Консультация по подбору образа</li>
              </ul>
            </div>
            
            <button className="card__button">Заказать съемку</button>
          </div>
          
          <div className="price__card card">
            <div className="card__title">Стандарт</div>

            <div className="card__price">200$</div>

            <div className="card__info">
              <ul>
                <li>Cъемка 2 часа</li>
                <li>Обработка 21 днень</li>
                <li>Обработка 100 удачных снимков</li>
                <li>Консультация по подбору образа</li>
              </ul>
            </div>
            
            <button className="card__button">Заказать съемку</button>
          </div>

          <div className="price__card card">
            <div className="card__title">Премиум</div>

            <div className="card__price">150$/час</div>

            <div className="card__info">
              <ul>
                <li>Мин. время 4 часа</li>
                <li>Обработка до 50 дней</li>
                <li>Ретушь крупных планов</li>
                <li>Обработка всех удачных снимков</li>
                <li>Фотокнига из 20 кадров</li>
              </ul>
            </div>
            
            <button className="card__button">Заказать съемку</button>
          </div>      
        </div>
        <div className="mobile-price__container container">
          
          <div className="mobile-price__titles">
            <div className="card__title" onClick={() => {selectCard(-110, cardInfo[0])}}>{cardInfo[0].name}</div>
            <div className="card__title selected" onClick={() => {selectCard(0, cardInfo[1])}}>{cardInfo[1].name}</div>
            <div className="card__title" onClick={() => {selectCard(100, cardInfo[2])}}>{cardInfo[2].name}</div>
          </div>
          
          <div className="triangle"></div>

          <div className="price__card card">
          

            <div className="mobile-card__info card__info">
            <div className="card__price">200$</div>
              <div>
                {setTimeout(() => { selectCard(); }, 0)}
              </div>
            </div>
            
            <button className="card__button">Заказать съемку</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PriceSection