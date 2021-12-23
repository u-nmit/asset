import React, { useState, useEffect, Suspense, useContext } from "react";
import css from "./style.module.css";

import Toolbar from "../../components/Toolbar";

import SideBar from "../../components/SideBar";

import { Route, Switch } from "react-router-dom";
import ShippingPage from "../ShippingPage";
import LoginPage from "../LoginPage";

import { connect } from "react-redux";
import Logout from "../../components/Logout";
import { Redirect } from "react-router-dom";
import { BurgerStore } from "../../context/Burgercontext";
import { OrderStore } from "../../context/OrdersContext";
import UserContext from "../../context/UserContext";
const BurgerPage = React.lazy(() => {
  return import("../BurgerPage");
});
const SignupPage = React.lazy(() => {
  return import("../SignupPage");
});
const OrderPage = React.lazy(() => {
  return import("../OrderPage");
});
const App = (props) => {
  const userCtx = useContext(UserContext);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSideBar = () => {
    setShowSidebar((prevState) => !prevState);
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    const refreshToken = localStorage.getItem("refreshToken");
    {
      if (token) {
        // auto login hiih heseg
        if (expireDate > new Date()) {
          userCtx.loginUserSucces(token, userId, expireDate, refreshToken);
          userCtx.autoRenewTokenAfterMillisec(
            expireDate.getTime - new Date().getTime()
          );
        } else {
          userCtx.logout();
        }
      }
    }
  }, []);

  return (
    <div>
      <Toolbar toggleSideBar={toggleSideBar} />

      <SideBar showSidebar={showSidebar} toggleSideBar={toggleSideBar} />

      <main className={css.Content}>
        <BurgerStore>
          <Suspense fallback={<div>Түр хүлээнэ үү</div>}>
            {userCtx.state.userId ? (
              <Switch>
                <Route path="/logout" component={Logout} />
                <Route path="/orders">
                  <OrderStore>
                    <OrderPage />
                  </OrderStore>
                </Route>

                <Route path="/ship" component={ShippingPage} />
                <Route path="/" component={BurgerPage} />
              </Switch>
            ) : (
              <Switch>
                <Route path="/signup" component={SignupPage} />
                <Route path="/login" component={LoginPage} />
                <Redirect to="/login" />
              </Switch>
            )}
          </Suspense>
        </BurgerStore>
      </main>
    </div>
  );
};
export default App;
