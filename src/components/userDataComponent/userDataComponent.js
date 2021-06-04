import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import { BsChatSquareDots } from "react-icons/bs";
import { sharedColors } from '../../theme/sharedColor';
import { MedicalRecord } from './medicalRecord';
import { LabResult } from './labResult';
import { AssignedText } from './assignedText';
import { DoctorNotes } from './doctorNotes';
import { Link } from "react-router-dom";
import { routers } from '../../config/router';
import { BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";

export const UserDataComponent = () => {

    const currectSelectedUser = useSelector(state => state.usersSelect);
    const currentSelectedUserData = useSelector(state => state.patientSelect);
    const patientDetailData = useSelector(state => state.patientPersonalInfo);
    const [infoData, setInfoData] = useState();
    const [userDetailsSection, setUserDetailsSection] = useState(true);
    const [detailsSectionClass, setDetailsSectionClass] = useState("card-user-info-section");

    const detailsSectionRef = useRef();

    useEffect(() => {
        const userInfo = [
            {
                title: "Date of Birth",
                info: patientDetailData.dob,
            }, {
                title: "Age",
                info: patientDetailData.age,
            }, {
                title: "Phone Number",
                info: patientDetailData.phone_number,
            }, {
                title: "Street Address",
                info: patientDetailData.street_address,
            }, {
                title: "City, State",
                info: `${patientDetailData.city}${patientDetailData.state}`,
            }, {
                title: "Zip Code",
                info: patientDetailData.zipcode,
            },
        ];
        setInfoData(userInfo);
    }, [patientDetailData]);

    
    const toggleUserInfoDetailsSection = () => {
        setUserDetailsSection(!userDetailsSection);
        setDetailsSectionClass(detailsSectionClass === "card-user-info-section" ? "card-user-info-section-for-mobile" : "card-user-info-section");
    }

    // Style for primary color button
    // const style = {
    //     background: `linear-gradient(to right, ${sharedColors.primaryButtonGradientStart}, ${sharedColors.primaryButtonGradientEnd})`,
    // }
    return (
        <div className="data-container">
            <div className="card-container">
                <div className="card-avatar-section">
                    <img src={currentSelectedUserData.userimage} className="card-user-avatar-image" />
                    <div className="user-name-container">
                        <h1 className="user-name">{currentSelectedUserData.patient_name}</h1>
                        <p className="user-type">{currentSelectedUserData.type}</p>
                    </div>
                    <Link to={routers.CHATPAGE}>
                        <div className="show-chat-icon-container">
                            <BsChatSquareDots className="chat-button" size="24px" color="white" />
                        </div>
                    </Link>
                </div>
                <div className="toggle-info-data-section" onClick={() => toggleUserInfoDetailsSection()}>
                    {userDetailsSection === true ? <BsChevronCompactDown size="20px" color="#4939E3" /> : <BsChevronCompactUp size="20px" color="#4939E3"/>}
                </div>
                <div className={detailsSectionClass} ref={detailsSectionRef}>
                    
                    {infoData && infoData.map((item, i) =>
                        <div key={i} className="info-section">
                            <p className="user-info-title">{item.title}</p>
                            <p className="user-info-description">{item.info}</p>
                        </div>
                    )}

                </div>
            </div>
            <div className="scroll-card-section">
                <MedicalRecord />
                <LabResult />
                <AssignedText />
                <DoctorNotes />
            </div>
        </div>
    )
}
