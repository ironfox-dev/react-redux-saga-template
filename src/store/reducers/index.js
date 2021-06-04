import { combineReducers } from 'redux';
import { 
    usersSelect, 
    patientsList, 
    patientSelect, 
    patientPersonalInfo 
} from './usersReducers';
import {
    setPatientChat,
} from './chatReducers';

// Export combined reducers
export default combineReducers({
    usersSelect,
    patientsList,
    patientSelect,
    patientPersonalInfo,
    setPatientChat,
})
