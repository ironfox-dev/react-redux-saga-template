import { users } from '../../service/users';

export const usersSelect = (state = {}, action) => {
    switch (action.type) {
        case "GET_SELECTED_USER":
            return action.payLoad;
        default:
            return users[0];
    }
}

// Export reducer for getting patients list
export const patientsList =  (state = [], action) => {
    switch (action.type) {
        case "PATIENTS_LIST":
            return action.payLoad;
        default:
            return state;
    }
}

// Export reducer for getting selected patient
export const patientSelect = (state = {}, action) => {
    switch (action.type) {
        case "SET_SELECTED_PATIENT":
            return action.payLoad;
        default:
            return state;
    }
}

// Export reducer for getting patient information
export const patientPersonalInfo = (state = {}, action) => {
    switch (action.type) {
        case "GET_PATIENT_PERSONAL_INFOS":
            return action.payLoad;
        default: 
            return state;
    }
}
