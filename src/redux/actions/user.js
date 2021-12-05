import * as types from "../types";

export function getUsers(users) {
  return {
    type: types.GET_USERS_REQUESTED,
    payload: users
  };
}

export function postUser(value) {
  return {
    type: types.POST_USERS_REQUESTED,
    payload: value
  };
}

export function deleteUser(id) {
  return {
    type: types.DELETE_USERS_REQUESTED,
    payload: id
  };
}

export function updateUser(item) {
  return {
    type: types.UPDATE_USERS_REQUESTED,
    payload: item
  };
}

export function showSpinner(value) {
  return {
    type: types.SHOW_SPINNER,
    payload: value
  };
}

export function changeView(value) {
  return {
    type: types.CHANGE_GRID_VIEW,
    payload: value
  };
}

export function toggleModal(id) {
  return {
    type: types.TOGGLE_DELETE_MODAL,
    payload: id
  };
}

export function toggleAddUserModal() {
  return {
    type: types.TOGGLE_ADD_USE_MODAL
  };
}
export function logInUser(values) {
  return {
    type: types.LOGGED_IN_USER,
    payload: values
  };
}
