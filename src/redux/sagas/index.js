import { all } from "redux-saga/effects";
import { userSaga } from "./userSaga";
import { watchPostSaga } from "./userPostSaga";

export default function* rootSaga() {
  yield all([
    userSaga(),
    watchPostSaga()
  ]);
}
