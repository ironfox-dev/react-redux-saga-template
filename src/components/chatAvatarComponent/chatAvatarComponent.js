import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CHAT_PATIENT_TARGET, SET_GET_CHAT_PATIENT_TARGET } from '../../store/actionNames';
import './style.css';
import { BsSearch, BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { sharedColors } from '../../theme/sharedColor';
import { users } from '../../service/users';

export const ChatAvatarsContainer = () => {
    const dispatch = useDispatch();
    const patientList = useSelector(state => state.patientsList);

    const [patientLists, setPatientLists] = useState();
    const [usersData, setUsersData] = useState(users);
    const [arrowDirection, setArrowDirection] = useState(true);
    const showAvatar = useRef();

    useEffect(() => {
        setPatientLists(patientList);
        dispatch({type: GET_CHAT_PATIENT_TARGET, payLoad: patientList[0]});
    }, [patientList]);

    // Style for the highlighted text.
    const specialColorFont = {
        color: sharedColors.primaryFontColor,
    }

    // Select user
    const setHighlightedUser = (userItem) => {
        let virtualArray = [];
        for (let i = 0; i < patientLists.length; i++) {
            if (i !== userItem) virtualArray.push({ ...patientLists[i], selected: false });
            if (i === userItem) virtualArray.push({ ...patientLists[i], selected: true })
        }
        setPatientLists(virtualArray);
        // dispatch({ type: GET_USER, payLoad: patientLists[userItem] });
        const width = window.innerWidth;
        if (width <= 890) {
            showAvatar.current.className = showAvatar.current.className === "avatar-main-section" ? "avatar-main-section-showed" : "avatar-main-section";
            setArrowDirection(true);
        }
        dispatch({type: SET_GET_CHAT_PATIENT_TARGET, payLoad: patientList[userItem]});
    }

    // Show chat list when mobile responsive
    const toggleAvatar = () => {
        showAvatar.current.className = showAvatar.current.className === "avatar-main-section" ? "avatar-main-section-showed" : "avatar-main-section";
        setArrowDirection(!arrowDirection);
    }
    
    return (
        <div className="avatars">
            <div className="show-avatars" onClick={() => toggleAvatar()}>
                {arrowDirection ? <BsChevronCompactDown color="white" /> : <BsChevronCompactUp color="white" />}
            </div>
            <div className="avatar-main-section" ref={showAvatar}>
                <div className="avatars-title-container">
                    <h1 className="avatars-title-text">Chat<span style={specialColorFont}>.</span></h1>
                </div>
                <div className="search-bar">
                    <BsSearch size="18px" color={sharedColors.primaryFontColor} className="search-icon" />
                    <input type="text" placeholder="Search" className="search-input" />
                </div>
                <div className="users-avatar" id="avatar-scrollbar">
                    
                    {patientLists && patientLists.map((user, i) =>
                        <div onClick={() => setHighlightedUser(i)} key={i} className={user.selected == false ? "user-avatar" : "user-avatar-selected"}>
                            <img className="avatar-image" src={user.userimage} />
                            <div className="user-info">
                                <p className="user-name-text">{user.patient_name}</p>
                                <p className="user-chats-text">Ok! Thanks</p>
                            </div>
                            <div className="chat-info-part">
                                <p className={user.selected == false ? "chat-date" : "chat-date-selected"}>Jul 29</p>
                                {/* {user.lastChatNumber !== 0 &&
                                    <div className={user.selected == false ? "chat-number" : "chat-number-selected"}>
                                        <p>{user.lastChatNumber}</p>
                                    </div>
                                } */}
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
        </div>
    )
}
