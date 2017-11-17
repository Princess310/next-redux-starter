import { put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_DATA,
} from './constants';

export function* fetchData() {
  try {
    // add the console here to make sure saga works.
    console.log('Now it is in the sags.');
  } catch (err) {
    // console.log(err);
  }
}

export default function* defaultSaga() {
  yield takeLatest(FETCH_DATA, fetchData);
}
