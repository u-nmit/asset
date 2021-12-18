import React, { useState, useEffect, useRef, useContext } from "react";
import css from "./style.module.css";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import { useHistory } from "react-router-dom";
import BurgerContext from "../../context/Burgercontext";
import UserContext from "../../context/UserContext";
const ContactData = (props) => {
  const history = useHistory();
  const userContext = useContext(UserContext);
  const ctx = useContext(BurgerContext);
  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);
  const [street, setStreet] = useState(null);
  useEffect(() => {
    if (ctx.Burger.finished && !ctx.Burger.error) {
      history.replace("/orders");
    }
    return () => {
      //tseverlegch function
      ctx.clearBurger();
    };
  }, [ctx.Burger.finished]);

  const dunRef = useRef();

  const changeName = (e) => {
    if (dunRef.current.style.color == "red") {
      dunRef.current.style.color = "green";
    } else {
      dunRef.current.style.color = "red";
    }
    setName(e.target.value);
  };

  const changeStreet = (e) => {
    setStreet(e.target.value);
  };

  const changeCity = (e) => {
    setCity(e.target.value);
  };

  const saveOrder = () => {
    const newOrder = {
      orts: ctx.Burger.ingredients,
      dun: ctx.Burger.totalPrice,
      userId: userContext.state.userId,
      hayag: {
        name: name,
        city: city,
        street: street,
      },
    };

    ctx.saveBurger(newOrder, userContext.state.token);
  };

  return (
    <div className={css.ContactData}>
      <div ref={dunRef}>
        <strong style={{ fontSize: "16px" }}>
          Дүн : {ctx.Burger.totalPrice}₮
        </strong>
      </div>
      <div>
        {ctx.Burger.error &&
          `Захиалгыг хадгалах явцад алдаа гарлаа : ${ctx.Burger.error}`}
      </div>
      {ctx.Burger.saving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={changeName}
            type="text"
            name="name"
            placeholder="Таны нэр"
          />
          <input
            onChange={changeStreet}
            type="text"
            name="street"
            placeholder="Таны гэрийн хаяг"
          />
          <input
            onChange={changeCity}
            type="text"
            name="city"
            placeholder="Таны хот"
          />
          <Button text="ИЛГЭЭХ" btnType="Success" daragdsan={saveOrder} />
        </div>
      )}
    </div>
  );
};

export default ContactData;
