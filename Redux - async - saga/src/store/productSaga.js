import { fetchData } from "../services/httpService";
import { put, takeEvery, all } from "redux-saga/effects";

async function getProducts() {
  try {
    return await fetchData();
  } catch (error) {
    console.log("Error!");
  }
}

function* update() {
  const data = yield getProducts();
  if (!data) return;
  yield put({ type: "LOAD", payload: data });
}

export function* fetchProducts() {
  yield takeEvery("GET", update);
}

export default function* rootSaga() {
  yield all([fetchProducts()]);
}
