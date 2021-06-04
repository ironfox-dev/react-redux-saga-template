import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as initialActions from '../store/actionNames/homePageActions';
import axios from 'axios';
import * as API from '../api';

/* These are saga functions for patient page. */


function* getSelectedUser(action) {
   try {
      yield put({type: "GET_SELECTED_USER", payLoad: action.payLoad});
   } catch (e) {
      yield put({type: "GET_SELECTED_USER_FAILED", message: e.message});
   }
}

/* ----------- Call and dispatch functions ------------- */

// Get full patients list
function* getPatientsList() {
    try {
        const patients = yield call(API.result, "patients.php");
        yield put({type: "PATIENTS_LIST", payLoad: patients.data.data.results})
    } catch (e) {
        yield put({type: "GET_PATIENTS_LIST_FAILED", message: e.message});
    }
}

// Get selected patient from patient list
function* setPatientSelected(action) {
    try {
        yield put({type: 'SET_SELECTED_PATIENT', payLoad: action.payLoad});
    } catch (e) {
        yield put({type: 'SET_PATIENT_SELECT_FAILED'});
    }
}

// Get selected patient informations
function* getPatientPersonalInfo(action) {
    try {
        const patientPersonalInfo = yield call(API.getPatientPersonalInfoAPI, action.payLoad);
        yield put({type: "GET_PATIENT_PERSONAL_INFOS", payLoad: patientPersonalInfo.data.data});
    } catch (e) {
        yield put({type: "GET_PATIENT_PERSONAL_INFO_FAILED"});
    }
}

// Set patient to have chat with
function* setPatientChatTarget(action) {
    try {
        const patientSet = yield call(API.getPatientPersonalInfoAPI, action.payLoad.id);
        yield put({type: "SET_PATIENT_FOR_CHAT", payLoad: patientSet.data.data})
    } catch (e) {
        yield put({type: "SET_PATIENT_FOR_CHAT_FAILED"});
    }
}

// Change patient to have chat with
function* setPatientChatTargetChange(action) {
    try {
        const patientSets = yield call(API.getPatientPersonalInfoAPI, action.payLoad.id);
        yield put({type: "SET_PATIENT_FOR_CHAT_CHANGED", payLoad: patientSets.data.data});
    } catch (e) {
        yield put({type: "SET_PATIENT_FOR_CHAT_CHANGED_FAILED"});
    }
}

// Export saga functions
export default function* mySaga() {
  yield takeEvery(initialActions.GET_USER, getSelectedUser);
  yield takeEvery(initialActions.GET_PATIENTS_LIST, getPatientsList);
  yield takeEvery(initialActions.SET_PATIENT_SELECTED, setPatientSelected);
  yield takeEvery(initialActions.GET_PATIENT_PERSONAL_DATA, getPatientPersonalInfo);
  yield takeEvery(initialActions.GET_CHAT_PATIENT_TARGET, setPatientChatTarget);
  yield takeEvery(initialActions.SET_GET_CHAT_PATIENT_TARGET, setPatientChatTargetChange);
}
