import { useState } from "react";
let cardInfo = [
  {
    id: "min",
    name: "Минимум",
    price: "100$",
    options: [
      "Съемка - 60 минут",
      "Обратботка -  14 дней",
      "Обработка 50 удачных снимков",
      "Консультация по подбору образа",
    ],
  },
  {
    id: "standart",
    name: "Стандарт",
    price: "200$",
    options: [
      "Съемка - 2 часа",
      "Обратботка -  21 день",
      "Обработка 100 удачных снимков",
      "Консультация по подбору образа",
    ],
  },
  {
    id: "max",
    name: "Премиум",
    price: "150$/час",
    options: [
      "Мин. время - 4 часа",
      "Обратботка -  до 50 дней",
      "Ретушь крупных планов",
      "Обработка всех удачных снимков",
      "Фотокнига из 20 кадров",
    ],
  },
];

function Tabs(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <div className="block-tabs">
        {cardInfo.map((el, id) => {
          return (
            <button
              className={toggleState === id ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(id)}
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
            >
              <h2>{el.price}</h2>
              <ul>
                {el.options.map((el) => {
                  return <li>{el}</li>;
                })}
              </ul>
              <button
                className="card__button"
                onClick={() => props.setOpenModal(true)}
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
