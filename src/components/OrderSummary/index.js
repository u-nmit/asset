import React, { useContext } from "react";
import Button from "../General/Button";
import BurgerContext from "../../context/Burgercontext";
const OrderSummary = (props) => {
  const ctx = useContext(BurgerContext);
  return (
    <div>
      {/* <ul>
        {Object.keys(ctx.Burger.ingredients).map((el) => (
          <li key={el}>
            {ctx.Burger.ingredientNames[el]} : {ctx.Burger.ingredients[el]}
          </li>
        ))}
      </ul> */}
      <p>
        <strong>
          Таны сонгосон лаборатори:{" "}
          <p style={{ color: "blue" }}>{ctx.Burger.totalPrice}</p>
        </strong>
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
