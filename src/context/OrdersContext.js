import React, { useState } from "react";
import axios from "../axios-orders";
const OrderContext = React.createContext();
export const OrderStore = (props) => {
  const initialState = { orders: [], loading: false, error: null };
  const [state, setState] = useState(initialState);
  const loadOrders = (userId, token) => {
    // Захиалгыг татаж эхлэлээ гэдгийг мэдэгдэнэ.
    // Энийг хүлээж аваад Spinner ажиллаж эхлэнэ.
    setState({ ...state, loading: true });

    //     const token = getState().signupLoginReducer.token;
    //     `orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`
    axios
      .get(`orders.json?auth=${token}&orderBy="userId"&equalTo="${userId}"`)
      .then((response) => {
        const loadedOrders = Object.entries(response.data).reverse();
        setState({ ...state, orders: loadedOrders });
      })
      .catch((error) => setState({ ...state, error }));
  };

  return (
    <OrderContext.Provider value={{ state, loadOrders }}>
      {props.children}
    </OrderContext.Provider>
  );
};
export default OrderContext;
