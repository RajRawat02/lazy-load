import * as type from "../types";

const commnonState = {
  spinner: false,
  isGrid: false,
  showDeleteModal: false,
  selectedDeleteUserId: null,
  user: {}
};

export const commonReducer = (state = commnonState, action) => {
  switch (action.type) {
    case type.SHOW_SPINNER:
      return { ...state, showSpinner: !state.showSpinner };
    case type.CHANGE_GRID_VIEW:
      return { ...state, isGrid: !state.isGrid };
    case type.TOGGLE_DELETE_MODAL:
      return {
        ...state,
        showDeleteModal: !state.showDeleteModal,
        selectedDeleteUserId: action.payload
      };
    case type.LOGGED_IN_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
