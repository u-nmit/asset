import React, { useState, useContext } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router";
import UserContext from "../../context/UserContext";
import "./style.css";
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
    <div class="body">
      {ctx.state.userId ? <Redirect to="/orders" /> : null}
      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Aguafina+Script"
      />
      <div>
        <div class="container">
          <div class="login-container">
            <div class="login-container-img">
              <h1>
                NEW MONGOL
                <span>Institute of technology</span>
              </h1>
            </div>
            <div class="login-container-content">
              <div class="login-form">
                <h1>Нэвтрэх</h1>
                <p class="field">
                  <label>Хэрэглэгчийн нэр</label>
                  <input
                    onChange={changeEmail}
                    type="text"
                    name="username"
                    placeholder=""
                  />
                </p>
                <p class="field">
                  <label>Нууц үг</label>
                  <input
                    onChange={changePassword}
                    type="password"
                    name="password"
                    placeholder=""
                  />
                  {/* <a href="">oublier mot de passe?</a> */}
                </p>
                {ctx.state.firebaseError ? (
                  ctx.state.firebaseErrorCode === 400 ? (
                    <div style={{ color: "red" }}>Нууц үг буруу байна</div>
                  ) : null
                ) : null}
                {ctx.state.loginIn ? <Spinner /> : null}
                <button onClick={login} type="" class="submitBtn">
                  Нэвтрэх
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
