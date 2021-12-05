import { CONSTANTS } from "../components/Constants/constants";
import { users } from "../authUsers";

export const validateInput = (data, required) => {
  let hasError = false;
  for (let key in required) {
    if (!data[key]?.trim()) {
      hasError = true;
      data[`error${key}`] = required[key];
    }
  }
  return { hasError, data };
};

export const authUser = (data) => {
  console.log(
    users[data.name],
    data.name.trim() === users[data.name]["name"],
    data.password.trim() === users[data.name]["password"],
    users[data.name]["name"],
    users[data.name]["password"],
    data
  );
  if (
    users[data.name] &&
    data.name.trim() === users[data.name]["name"] &&
    data.password.trim() === users[data.name]["password"]
  ) {
    const loginDetails = {
      isAdmin: users[data.name]["isAdmin"],
      logIn: true,
      role: data.name
    };
    localStorage.setItem(
      CONSTANTS.USER_KEY,
      encoded(JSON.stringify(loginDetails))
    );
    localStorage.setItem("isAuthenticated", "true");
    return { auth: true, userDetails: loginDetails };
  }
  if (!users[data.name] || data.name.trim() !== users[data.name]["name"]) {
    data.errorname = "Please Enter valid user name.";
  }
  if (
    !users[data.name] ||
    data.password.trim() !== users[data.name]["password"]
  ) {
    data.errorpassword = "Please Enter valid user password.";
  }
  return { auth: false, data };
};

export const encoded = (value) => {
  return window.btoa(value);
};

export const decoded = (value) => {
  return window.atob(value);
};
