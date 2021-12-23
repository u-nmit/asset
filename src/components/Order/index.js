import React from "react";

import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      {/* <p>
        Орц : Гахайн мах : {props.order.orts.bacon}, Салад :{" "}
        {props.order.orts.salad}, Үхрийн мах : {props.order.orts.meet}, Бяслаг :{" "}
        {props.order.orts.cheese}
      </p> */}
      <p>
        Нэр : {props.order.hayag.name} | Анги: {props.order.hayag.street} | Код:
        {props.order.hayag.city}
      </p>
      <p>
        Аль Лабораториас : {props.order.dun}
        <h1>Сонгосон зүйлс:</h1>
        <strong>{props.order.request}</strong>
      </p>
    </div>
  );
};

export default Order;
