import React, { useEffect, useState, useContext } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";
import UserContext from "../../context/UserContext";

const Signup = (props) => {
  const ctx = useContext(UserContext);
  const [email, setemail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setPassword2(email);
  }, [email]);

  const signup = () => {
    if (password1 === password2) {
      ctx.signupUser(email, password1);
    } else {
      setError("Нууц үгнүүд хоорондоо таарахгүй байна!");
    }
  };

  return (
    <div class="body">
      {ctx.state.userId && <Redirect to="/" />}

      <link
        rel="stylesheet"
        type="text/css"
        href="//fonts.googleapis.com/css?family=Aguafina+Script"
      />
      <div>
        <div class="container">
          <div class="login-container">
            <div class="login-container-content">
              <div class="login-form">
                <h1>БҮРТГҮҮЛЭХ</h1>
                <p class="field">
                  <label>Хэрэглэгчийн Имэйл</label>
                  <input
                    onChange={(e) => setemail(e.target.value)}
                    type="text"
                    name="username"
                    placeholder=""
                  />
                </p>
                <p class="field">
                  <label>Нууц үг</label>
                  <input
                    onChange={(e) => setPassword1(e.target.value)}
                    type="password"
                    placeholder="Нууц үгээ оруулна уу"
                  />
                  <input
                    onChange={(e) => setPassword2(e.target.value)}
                    type="password"
                    placeholder="Нууц үгээ давтан оруулна уу"
                  />
                  {error && (
                    <div style={{ color: "red", fontSize: "14px" }}>
                      {error}
                    </div>
                  )}
                  {/* <a href="">oublier mot de passe?</a> */}
                </p>
                {ctx.state.firebaseError && (
                  <div style={{ color: "red" }}>{ctx.state.firebaseError}</div>
                )}

                {ctx.state.saving && <Spinner />}

                <button onClick={signup} type="" class="submitBtn">
                  БҮРТГҮҮЛЭХ
                </button>
              </div>
            </div>
            <div class="login-container-img">
              <h1>
                NEW MONGOL
                <span>Institute of technology</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  //   <div className={css.Signup}>
  //     {ctx.state.userId && <Redirect to="/" />}
  //     <h1>Бүртгэлийн форм</h1>

  //     <div>Та өөрийн мэдээллээ оруулна уу</div>
  //     <input
  //       onChange={(e) => setemail(e.target.value)}
  //       type="text"
  //       placeholder="Имэйл хаяг"
  //     />
  //     <input
  //       onChange={(e) => setPassword1(e.target.value)}
  //       type="password"
  //       placeholder="Нууц үгээ оруулна уу"
  //     />
  //     <input
  //       onChange={(e) => setPassword2(e.target.value)}
  //       type="password"
  //       placeholder="Нууц үгээ давтан оруулна уу"
  //     />
  //     {error && <div style={{ color: "red" }}>{error}</div>}

  //     {ctx.state.firebaseError && (
  //       <div style={{ color: "red" }}>{ctx.state.firebaseError}</div>
  //     )}

  //     {ctx.state.saving && <Spinner />}

  //     <Button text="БҮРТГҮҮЛЭХ" btnType="Success" daragdsan={signup} />
  //   </div>
};

export default Signup;
