import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';
import { BsFillPlusCircleFill } from "react-icons/bs";

export const ChatUserInfo = ({ patientSetted }) => {
    const userInfo = useSelector(state => state.usersSelect);

    return (
        <div className="chat-user-info-main-section">
            <img src={patientSetted.userimage} className="chat-user-info-avatar" alt="user avatar" />
            <h1 className="chat-user-info-name">{patientSetted.name}</h1>
            <div className="chat-user-info-row">
                <p className="chat-user-info-row-title">Age:</p>
                <p className="chat-user-info-row-description">{patientSetted.age}</p>
            </div>
            <div className="chat-user-info-row">
                <p className="chat-user-info-row-title">D.O.B:</p>
                <p className="chat-user-info-row-description">{patientSetted.dob}</p>
            </div>
            <div className="chat-user-info-row">
                <p className="chat-user-info-row-title">Allergies:</p>
                <p className="chat-user-info-row-description">{userInfo.allergies}</p>
            </div>
            <div className="chat-user-info-row">
                <p className="chat-user-info-row-title">Medication:</p>
                <p className="chat-user-info-row-description">
                    <div className="medication-row">
                        
                        {userInfo.medication.map((item, i) =>
                            <p key={i} className="medication-row-text">{item}</p>
                        )}

                    </div>
                </p>
            </div>
            <div className="chat-user-info-asigned-row">
                <p className="chat-user-info-row-title">Assigned Tasks:</p>
                <BsFillPlusCircleFill size="20px" color="#4939E3" />
            </div>
            <div className="asigned-tasks-card">
                <p className="asigned-tasks-card-title">Check Blood Sugar</p>
                <p className="asigned-tasks-card-description">3 Days Complete</p>
            </div>
            <div className="asigned-tasks-card-highlighted">
                <p className="asigned-tasks-card-title">Schedule a Blood Test</p>
                <p className="asigned-tasks-card-description">Complete</p>
            </div>
            <div className="asigned-tasks-card">
                <p className="asigned-tasks-card-title">Make a Follow-Up Appointment</p>
                <p className="asigned-tasks-card-description">Incomplete</p>
            </div>
        </div>
    )
}
