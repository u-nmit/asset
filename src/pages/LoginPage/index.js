import React, { useState, useContext } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router";
import UserContext from "../../context/UserContext";
const Login = () => {
  const ctx = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const login = () => {
    ctx.loginUser(email, password);
  };

  return (
    <div className={css.Login}>
      {ctx.state.userId ? <Redirect to="/orders" /> : null}
      <input onChange={changeEmail} type="text" placeholder="Имэйл хаяг" />
      <input onChange={changePassword} type="password" placeholder="Нууц үг" />
      {ctx.state.firebaseError ? (
        ctx.state.firebaseErrorCode === 400 ? (
          <div style={{ color: "red" }}>Нууц үг буруу байна</div>
        ) : null
      ) : null}
      {ctx.state.loginIn ? <Spinner /> : null}
      <Button text="ЛОГИН" btnType="Success" daragdsan={login} />
    </div>
  );
};

export default Login;
