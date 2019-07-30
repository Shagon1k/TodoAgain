import { all, fork } from 'redux-saga/effects';
import map from 'lodash/fp/map';

export const watchSagas = [
];

export function* rootSaga() {
  const watchers = watchSagas;
  yield all(map(fork, watchers))
}