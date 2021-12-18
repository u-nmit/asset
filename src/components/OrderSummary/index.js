import React, { useContext } from "react";
import Button from "../General/Button";
import BurgerContext from "../../context/Burgercontext";
const OrderSummary = (props) => {
  const ctx = useContext(BurgerContext);
  return (
    <div>
      <h3>Таны захиалга</h3>
      <p>Таны сонгосон орцууд: </p>
      <ul>
        {Object.keys(ctx.Burger.ingredients).map((el) => (
          <li key={el}>
            {ctx.Burger.ingredientNames[el]} : {ctx.Burger.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Захиалгын дүн: {ctx.Burger.totalPrice}₮ </strong>
      </p>
      <p>Цаашаа үргэлжлүүлэх үү?</p>
      <Button daragdsan={props.onCancel} btnType="Danger" text="ТАТГАЛЗАХ" />
      <Button
        daragdsan={props.onContinue}
        btnType="Success"
        text="ҮРГЭЛЖЛҮҮЛЭХ"
      />
    </div>
  );
};

export default OrderSummary;
