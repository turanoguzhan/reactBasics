import React from "react";
import './Input.css';

const UserInput = (props) => {
  return (
    <div>
      <div>
        <label> Username : </label>
        <input
          type="text"
          id="username"
          value={props.username}
          onChange={props.changeNameEvent}
        />
      </div>
      <div>
        <label> Password : </label>
        <input
          type="password"
          id="password"
          value={props.password}
          onChange={props.changePassEvent}
        />
      </div>
    </div>
  );
};
export default UserInput;
