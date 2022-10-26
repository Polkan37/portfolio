import { useState } from "react";
import { cardInfo } from "../../constants/price.constants";

function Tabs(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabs__container">
      <div className="block-tabs">
        {cardInfo.map((el, id) => {
          return (
            <button
              className={toggleState === id ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(id)}
              key={el+id}
            >
              {el.name}
            </button>
          );
        })}
      </div>

      <div className="content-tabs">
        {cardInfo.map((el, id) => {
          return (
            <div
              className={
                toggleState === id ? "content  active-content" : "content"
              }
              key={el+id}
            >
              <h2>{el.price}</h2>
              <ul>
                {el.options.map((el) => {
                  return <li key={el}>{el}</li>;
                })}
              </ul>
              <button
                className="card__button button"
                onClick={() => {
                  props.setOpenModal(true);
                  props.place(`Замовлення: пакет ${el.name}`);
                }}
                key={el+id}
              >
                Заказать съемку
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;
