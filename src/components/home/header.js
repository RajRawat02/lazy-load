import { useState } from "react";
import { Link } from "react-router-dom";
import { logInUser } from "../../redux/actions/user";
import { useDispatch } from "react-redux";
import { CONSTANTS } from "../Constants/constants";

const Header = ({ role }) => {
  const [selectedTab, setSelectedTab] = useState("home");
  const dispatch = useDispatch();

  const logOut = () => {
    localStorage.setItem(CONSTANTS.USER_KEY, JSON.stringify({}));
    localStorage.setItem("isAuthenticated", "false");
    dispatch(logInUser({}));
  };
  const pathname = window.location.pathname;
  return (
    <div className="header" id="myHeader">
      <div className="logout">
        <Link
          onClick={logOut}
          to={(location) => ({
            ...location,
            pathname: CONSTANTS.ROUTES.LANDING
          })}
          style={{ textDecoration: "none" }}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Header;
