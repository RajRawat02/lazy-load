import { call, put, takeEvery } from "@redux-saga/core/effects";
import { serviceRequest } from "../../serviceRequest/serviceRequest";
import { GET_USER_API } from "../../apiConfig/apiConfig";
import * as type from "../types";

function* fetchUsers() {
  try {
    const params = {
      url: GET_USER_API
    };
    yield put({ type: type.SHOW_SPINNER });
    const users = yield call(serviceRequest, params);
    yield put({ type: type.GET_USERS_SUCCESS, users: users });
    yield put({ type: type.SHOW_SPINNER });
  } catch (e) {
    yield put({ type: type.SHOW_SPINNER });
    yield put({ type: type.GET_USERS_FAILED, message: e.message });
  }
}

export function* userSaga() {
  yield takeEvery(type.GET_USERS_REQUESTED, fetchUsers);
}
