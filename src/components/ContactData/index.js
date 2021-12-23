import React, { useState, useEffect, useRef, useContext } from "react";
import css from "./style.module.css";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import { useHistory } from "react-router-dom";
import BurgerContext from "../../context/Burgercontext";
import UserContext from "../../context/UserContext";
import "./style.css";
const ContactData = (props) => {
  const history = useHistory();
  const userContext = useContext(UserContext);
  const ctx = useContext(BurgerContext);
  const [name, setName] = useState(null);
  const [city, setCity] = useState(null);
  const [street, setStreet] = useState(null);
  const [request, setRequest] = useState(null);
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

  const changeClass = (e) => {
    setStreet(e.target.value);
  };

  const changeCode = (e) => {
    setCity(e.target.value);
  };
  const changeRequest = (e) => {
    setRequest(e.target.value);
  };

  const saveOrder = () => {
    const newOrder = {
      // orts: ctx.Burger.ingredients,
      dun: ctx.Burger.totalPrice,
      userId: userContext.state.userId,
      request: request,
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
      <div ref={dunRef}></div>
      <div>
        {ctx.Burger.error &&
          `Хүсэлтйг хадгалах явцад алдаа гарлаа : ${ctx.Burger.error}`}
      </div>
      {ctx.Burger.saving ? (
        <Spinner />
      ) : (
        <div>
          <input
            style={{ width: "70%" }}
            onChange={changeName}
            type="text"
            name="name"
            placeholder="Таны нэр"
          />
          <input
            style={{ width: "70%" }}
            onChange={changeClass}
            type="text"
            name="street"
            placeholder="Таны анги"
          />
          <input
            style={{ width: "70%" }}
            onChange={changeCode}
            type="text"
            name="city"
            placeholder="Таны код"
          />
          <input
            style={{ width: "70%" }}
            onChange={changeRequest}
            type="text"
            name="request"
            placeholder="Лабораториас авах зүйл"
          />
          <button onClick={saveOrder} type="" class="submitBtn">
            Илгээх
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactData;
