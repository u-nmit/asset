import React, { useContext } from "react";
import BuildControl from "../BuildControl";
import css from "./style.module.css";
import BurgerContext from "../../context/Burgercontext";
const BuildControls = (props) => {
  const burgerContext = useContext(BurgerContext);
  const disabledIngredients = { ...burgerContext.Burger.ingredients };
  for (let key in disabledIngredients) {
    disabledIngredients[key] = disabledIngredients[key] <= 0;
  }
  return (
    <div className={css.BuildControls}>
      <p style={{ color: "white" }}>
        Таны сонгосон лаборатори :{" "}
        <strong>{burgerContext.Burger.totalPrice}</strong>
      </p>
      {Object.keys(burgerContext.Burger.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          disabled={disabledIngredients}
          type={el}
          orts={burgerContext.Burger.ingredientNames[el]}
        />
      ))}
      <button
        onClick={props.showConfirmModal}
        disabled={!burgerContext.Burger.purchasing}
        className={css.OrderButton}
      >
        Хүсэх
      </button>
    </div>
  );
};

export default BuildControls;
