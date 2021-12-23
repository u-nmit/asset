import React, { useState, useContext, useEffect } from "react";
import Burger from "../../components/Burger";
import Button from "../../components/General/Button";
import { Route } from "react-router-dom";
import css from "./style.module.css";
import ContactData from "../../components/ContactData";
import BurgerContext from "../../context/Burgercontext";
const ShippingPage = (props) => {
  const ctx = useContext(BurgerContext);
  const cancelOrder = () => {
    props.history.goBack();
  };

  // const showContactData = () => {
  //   props.history.replace("/ship/contact");
  // };
  useEffect(() => {
    props.history.replace("/ship/contact");
  }, []);

  return (
    <div className={css.ShippingPage}>
      <p style={{ fontSize: "24px" }}>
        <strong style={{ color: "white" }}>
          {" "}
          Та өөрийн нэр, анги, кодоо оруулна уу
        </strong>
      </p>
      <p style={{ fontSize: "24px" }}>
        <strong style={{ color: "white" }}>
          Сонгосон лаборатори: {ctx.Burger.totalPrice}₮
        </strong>
      </p>

      {/* <Burger /> */}

      <Button
        daragdsan={cancelOrder}
        btnType="Danger"
        text="ХҮСЭЛТИЙГ ЦУЦЛАХ"
      />

      {/* <Button
        // daragdsan={showContactData}
        btnType="Success"
        text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
      /> */}

      <Route path="/ship/contact">
        <ContactData />
      </Route>
    </div>
  );
};

export default ShippingPage;
