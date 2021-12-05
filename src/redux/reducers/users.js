import * as type from "../types";

const initialState = {
  users: [],
  loading: false,
  error: null,
  userDetails: {
    name: "",
    companyName: "",
    message: ""
  },
  showSpinner: false,
  showAddUserModal: false
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case type.UPDATE_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload
      };
    case type.GET_USERS_REQUESTED:
    case type.POST_USERS_REQUESTED:
    case type.DELETE_USERS_REQUESTED:
    case type.UPDATE_USERS_REQUESTED:
      return {
        ...state,
        loading: true
      };
    case type.GET_USERS_FAILED:
    case type.POST_USERS_FAILED:
    case type.DELETE_USERS_FAILED:
    case type.UPDATE_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    case type.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      };
    case type.POST_USERS_SUCCESS:
      const copyData = [...state.users];
      copyData.push(action.user);
      let userData = { ...state.userDetails };
      userData.name = "";
      userData.companyName = "";
      userData.message = "";
      return {
        ...state,
        loading: false,
        users: copyData,
        userDetails: userData
      };
    case type.DELETE_USERS_SUCCESS:
      const copyUsers = [...state.users];
      const result = copyUsers.filter((item) => item.id !== action.id);
      return {
        ...state,
        loading: false,
        users: result
      };
    case type.UPDATE_USERS_SUCCESS:
      const copyValues = [...state.users];
      const getIndex = copyValues.findIndex(
        (item) => item.id === action.user.id
      );
      copyValues.splice(getIndex, 1, action.user);
      let userVal = { ...state.userDetails };
      userVal.name = "";
      userVal.companyName = "";
      userVal.message = "";
      userVal.id = "";
      return {
        ...state,
        loading: false,
        users: copyValues,
        userDetails: userVal
      };
    case type.TOGGLE_ADD_USE_MODAL:
      const currentMode = !state.showAddUserModal;
      let userValue = { ...state.userDetails };
      if (!currentMode) {
        userValue.name = "";
        userValue.companyName = "";
        userValue.message = "";
        userValue.id = "";
      }
      return {
        ...state,
        showAddUserModal: !state.showAddUserModal,
        userDetails: userValue
      };
    default:
      return state;
  }
}
