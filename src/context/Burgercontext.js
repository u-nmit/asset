import React, { useState } from "react";
import axios from "../axios-orders";
const BurgerContext = React.createContext();
export const BurgerStore = (props) => {
  const initialState = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: "",
    purchasing: false,
    ingredientNames: {
      "Цахилгааны лаборатори": "Цахилгааны лаборатори",
      "Програм хангамжийн лаборатори": "Програм хангамжийн лаборатори",
      "Химийн лаборатори": "Химийн лаборатори",
      "Механикын лаборатори": "Механикын лаборатори",
    },
    saving: false,
    finished: false,
    error: null,
  };
  const [Burger, setBurger] = useState(initialState);
  const saveBurger = (newOrder, token) => {
    // Spinner ergelduulne
    setBurger({ ...Burger, saving: true });

    // Firebase ruu hadgalna
    // const token = getState().signupLoginReducer.token;
    // orders.json?auth=${token}
    axios
      .post(`/orders.json?auth=${token}`, newOrder)
      .then((response) => {
        setBurger({ ...Burger, saving: false, finished: true, error: null });
      })
      .catch((error) => {
        setBurger({ ...Burger, error, saving: false, finished: true });
      });
  };
  const clearBurger = () => {
    setBurger(initialState);
  };
  // export const saveOrder = (newOrder) => {
  //   return function (dispatch, getState) {
  // // Spinner ergelduulne
  // dispatch(saveOrderStart());

  // // Firebase ruu hadgalna
  // const token = getState().signupLoginReducer.token;

  // axios
  //   .post(`/orders.json?auth=${token}`, newOrder)
  //   .then((response) => {
  //     dispatch(saveOrderSuccess());
  //   })
  //   .catch((error) => {
  //     dispatch(saveOrderError(error));
  //   });
  //   };
  // };
  const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };

  const addIngredient = (orts) => {
    setBurger({
      ...Burger,
      ingredients: {
        ...Burger.ingredients,
        [orts]: Burger.ingredients[orts],
      },
      // totalPrice: Burger.totalPrice + INGREDIENT_PRICES[orts],
      totalPrice: orts,
      purchasing: true,
    });
  };
  const removeIngredient = (orts) => {
    const newPrice = Burger.totalPrice - INGREDIENT_PRICES[orts];
    setBurger({
      ...Burger,
      ingredients: {
        ...Burger.ingredients,
        [orts]: Burger.ingredients[orts] - 1,
      },
      totalPrice: newPrice,
      purchasing: newPrice > 1000,
    });
  };
  return (
    <BurgerContext.Provider
      value={{
        Burger,
        addIngredient,
        removeIngredient,
        saveBurger,
        clearBurger,
      }}
    >
      {props.children}
    </BurgerContext.Provider>
  );
};
export default BurgerContext;
