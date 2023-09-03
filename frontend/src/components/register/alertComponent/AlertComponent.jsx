import React from "react";

import "./AlertComponent.css";

import { Link } from "react-router-dom";

function AlertComponent(props) {
  const succMsg = "";
  return (
    <div className={props.errMsg ? "alert errMsgAlert" : "alert succMsgAlert"}>
      <div>
        {props.succMsg && (
          <div className="succMsg">
            <p style={{ color: "green" }}>{props.succMsg}</p>
            <p>
              Your Response has been sent to our team. You will get in-touch via
              email as soon as the Registration process completed. Thank you!!!
            </p>
            <div className="succMsgBtns">
              <Link to="/register" onClick={props.handleClose}>
                Okay
              </Link>
              <Link to="/">Visit Site</Link>
            </div>
          </div>
        )}
        {props.errMsg && (
          <>
            <div className="errMsg">
              <p>{props.errMsg}</p>
              <p onClick={props.handleClose}>x</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AlertComponent;
