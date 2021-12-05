import { call, put, takeEvery } from "@redux-saga/core/effects";
import * as type from "../types";
import { serviceRequest } from "../../serviceRequest/serviceRequest";
import { POST_USER_API } from "../../apiConfig/apiConfig";

function* postUserSaga(action) {
  try {
    const params = {
      url: POST_USER_API,
      method: "POST",
      body: JSON.stringify({
        name: action.payload.name,
        company: {
          name: action.payload.companyName,
          catchPhrase: action.payload.message
        }
      })
    };
    yield put({ type: type.SHOW_SPINNER });
    const result = yield call(serviceRequest, params);
    yield put({ type: type.POST_USERS_SUCCESS, user: result });
    yield put({ type: type.SHOW_SPINNER });
  } catch (error) {
    yield put({ type: type.SHOW_SPINNER });
    yield put({ type: type.POST_USERS_FAILED, message: error.message });
  }
}

export function* watchPostSaga() {
  yield takeEvery(type.POST_USERS_REQUESTED, postUserSaga);
}
