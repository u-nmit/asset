import React, { Component } from "react";
import Button from "../../components/General/Button";
import css from "./style.module.css";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/loginActions";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  login = () => {
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <div className={css.Login}>
        {this.props.userId ? <Redirect to="/orders" /> : null}
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.changePassword}
          type="password"
          placeholder="Нууц үг"
        />
        {this.props.firebaseError ? (
          this.props.firebaseErrorCode === 400 ? (
            <div style={{ color: "red" }}>Нууц үг буруу байна</div>
          ) : null
        ) : null}
        {this.props.loginIn ? <Spinner /> : null}
        <Button text="ЛОГИН" btnType="Success" daragdsan={this.login} />
      </div>
    );
  }
}
const matDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(actions.loginUser(email, password)),
  };
};

const mapStateToProps = (state) => {
  return {
    loginIn: state.signupLoginReducer.loginIn,
    firebaseError: state.signupLoginReducer.firebaseError,
    firebaseErrorCode: state.signupLoginReducer.firebaseErrorCode,
    userId: state.signupLoginReducer.userId,
  };
};

export default connect(mapStateToProps, matDispatchToProps)(Login);
