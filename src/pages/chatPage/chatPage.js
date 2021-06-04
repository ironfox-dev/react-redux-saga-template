import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { SideBar } from '../../components';
import { ChatAvatarsContainer } from '../../components';
import { ChatWindow } from '../../components';
import { ChatUserInfo } from '../../components';
import { GET_PATIENTS_LIST } from '../../store/actionNames/homePageActions';

export const ChatPage = () => {
    const dispatch = useDispatch();
    const settedPatient = useSelector(state => state.setPatientChat);
   
    // Dispatch the action for get patient list after components mounted
    useEffect(() => {
        dispatch({ type: GET_PATIENTS_LIST });
    }, []);

    return (
        <div className="chat-page-container">
            <SideBar select={"chat"} />
            <div className="main-section">
                <ChatAvatarsContainer />
                <div className="chat-section-part">
                        <div className="chat-page-section">
                            <div className="chatting-section">
                                <ChatWindow patientSetted={settedPatient}/>
                            </div>
                            <div className="chatting-user-info-section">
                                <ChatUserInfo patientSetted={settedPatient} />
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
