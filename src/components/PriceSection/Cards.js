import { cardInfo } from "../../constants/price.constants";

function Cards(props) {
  return (
    <div className="price__container container">
      {cardInfo.map((el, id) => {
        return (
          <div className="price__card card" key={`card-${id}`}>
            <div className="card__title">{el.name}</div>

            <div className="card__price">{el.price}</div>

            <div className="card__info">
              <ul>
                {el.options.map((el) => {
                  return <li key={`item-${el}`}>{el}</li>;
                })}
              </ul>
            </div>

            <button
              className="card__button button"
              onClick={() => {
                props.setOpenModal(true);
                props.place(`Замовлення: пакет ${el.name}`);
              }}
            >
              Заказать съемку
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
