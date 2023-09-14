import React from "react";
import "./Login.css";
import { Person, Email, Password } from "../../assets";

const Login: React.FC = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">Sing Up</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={Person} alt=""></img>
            <input type="text" placeholder="Nombre"></input>
          </div>
          <div className="input">
            <img src={Email} alt=""></img>
            <input type="email" placeholder="Email"></input>
          </div>
          <div className="input">
            <img src={Password} alt=""></img>
            <input type="password" placeholder="Clave"></input>
          </div>
          <div className="forgot-password">
            Lost Password? <span>Click Here!</span>
          </div>
          <div className="submit-container">
            <div className="submit">Sign up</div>
            <div className="submit">Login</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
