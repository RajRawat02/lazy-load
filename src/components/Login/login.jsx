import { useState } from "react";
import "../modal.scss";
import { validateInput, authUser } from "../../utils/utils";
import { useHistory } from "react-router-dom";
import { logInUser } from "../../redux/actions/user";
import { useDispatch } from "react-redux";
import { CONSTANTS } from "../Constants/constants";

const requiredFields = {
  name: "Please enter user name.",
  password: "Please enter user password"
};

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  const copyAndTrim = (values) => {
    const copyValues = { ...values };
    for (let key in copyValues) {
      copyValues[key].trim();
    }
    return copyValues;
  };

  const loginUser = () => {
    const copyUser = copyAndTrim(user);
    const validDetails = validateInput(copyUser, requiredFields);
    if (validDetails.hasError) {
      setUser(validDetails.data);
      return;
    }
    const validateUser = authUser(copyUser);
    if (!validateUser.auth) {
      setUser(validateUser.data);
      return;
    }
    dispatch(logInUser(validateUser.userDetails));
    history.push({ pathname: CONSTANTS.ROUTES.HOME });
  };

  const onChangeUser = (e) => {
    const copyUser = { ...user };
    copyUser[e.target.name] = e.target.value;
    if (copyUser[e.target.name]) {
      delete copyUser[`error${e.target.name}`];
    }
    setUser(copyUser);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="txt_align_center">Login</h2>
        <div className="container">
          <div>
            <label>User Name</label>
            <input
              type="text"
              placeholder="Enter username"
              name="name"
              value={user.name}
              onChange={(e) => onChangeUser(e)}
            />

            {user.errorname ? (
              <span className="error_msg">{user.errorname}</span>
            ) : null}
          </div>
          <div className="mar_top_10">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={(e) => onChangeUser(e)}
            />

            {user.errorpassword ? (
              <span className="error_msg">{user.errorpassword}</span>
            ) : null}
          </div>
        </div>
        <button className="log_in_btn" onClick={loginUser}>
          LogIn
        </button>
      </div>
    </div>
  );
};

export default Login;
