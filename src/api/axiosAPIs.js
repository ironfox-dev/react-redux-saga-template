import axios from 'axios';

// ==================> APIs <===================//

const URL = 'https://nexp.xyz/nexpil/';

// Get patients list API
export function result(endPointURL) {
    return axios.post(URL + endPointURL)
}

// Get patients informations API
export function getPatientPersonalInfoAPI(patientID) {
    return axios.post(URL + 'patient-info.php?patient_id=' + patientID); 
}
