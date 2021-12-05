import { useEffect } from "react";
import "./App.css";
import "./style/style.scss";
import Spinner from "./components/spinner";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import UserPage from "./components/UserPage/userPage";
import Header from "./components/home/header";
import Login from "./components/Login/login";
import { useDispatch } from "react-redux";
import { CONSTANTS } from "./components/Constants/constants";
import { decoded } from "./utils/utils";

import { getUsers } from "./redux/actions/user";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const dispatch = useDispatch();

  const renderComponent = (props, ComponentName) => {
    const localUser = localStorage.getItem(CONSTANTS.USER_KEY);
    console.log(
      "localuser",
      Object.keys(localUser).length,
      Object.keys(localUser),
      localUser
    );
    const sessionUser = JSON.stringify(localUser) !== '{}'
      ? JSON.parse(decoded(localUser))
      : {};
    console.log(
      "dasdasd",
      sessionUser,
      window.location.pathname,
      sessionUser && window.location.pathname == "/home"
    );
    if (!Object.keys(sessionUser).length) {
      return <Redirect to={CONSTANTS.ROUTES.LANDING} />;
    } else {
      if (sessionUser && window.location.pathname == "/") {
        return <Redirect to={CONSTANTS.ROUTES.HOME} />;
      }
      return (
        <>
          <Spinner />
          <Header {...sessionUser} />
          <div className="App">
            <div className="padd_top_70">
              <ComponentName {...sessionUser} {...props} />
            </div>
          </div>
        </>
      );
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="app-root">
      <Router>
        <Switch>
          <Route
            exact
            path={CONSTANTS.ROUTES.LANDING}
            render={() => <Login />}
          />
          <ProtectedRoute
            exact
            path={CONSTANTS.ROUTES.HOME}
            component={(props) => renderComponent(props, UserPage)}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
