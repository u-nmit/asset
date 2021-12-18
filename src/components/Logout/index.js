import React, { Component, useEffect, useContext } from "react";
import { Redirect } from "react-router";
import UserContext from "../../context/UserContext";
const Logout = (props) => {
  const ctx = useContext(UserContext);
  useEffect(() => {
    ctx.logout();
  }, []);

  return (
    <div>
      <Redirect to="/" />
    </div>
  );
};

export default Logout;
