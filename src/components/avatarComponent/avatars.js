import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER, SET_PATIENT_SELECTED, GET_PATIENT_PERSONAL_DATA } from '../../store/actionNames';
import './style.css';
import { BsSearch, BsFillPlusCircleFill, BsChevronCompactDown, BsChevronCompactUp } from "react-icons/bs";
import { sharedColors } from '../../theme/sharedColor';
import { users } from '../../service/users';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export const AvatarsContainer = ({ setMainSection }) => {
    const dispatch = useDispatch();

    // State variables
    const [arrowDirection, setArrowDirection] = useState(true);
    const patientList = useSelector(state => state.patientsList);
    const [usersData, setUsersData] = useState();

    // Set usersData to data from server
    useEffect(() => {
            setUsersData(patientList)
    }, [patientList]);

    // Style for the highlighted text.
    const specialColorFont = {
        color: sharedColors.primaryFontColor,
    }
    const showAvatar = useRef();

    // select user
    const setHighlightedUser = (userItem) => {
        let virtualArray = [];
        for (let i = 0; i < usersData.length; i++) {
            if (i !== userItem) virtualArray.push({ ...usersData[i], selected: false });
            if (i === userItem) virtualArray.push({ ...usersData[i], selected: true })
        }
        setUsersData(virtualArray);

        if (setMainSection) setMainSection("userData");

        dispatch({ type: GET_USER, payLoad: users[userItem] });
        dispatch({ type: SET_PATIENT_SELECTED, payLoad: usersData[userItem] });
        dispatch({ type: GET_PATIENT_PERSONAL_DATA, payLoad: usersData[userItem].id })

        const width = window.innerWidth;
        if (width <= 890) {
            showAvatar.current.className = showAvatar.current.className === "avatar-main-section" ? "avatar-main-section-showed" : "avatar-main-section";
            setArrowDirection(true);
        }
    }

    // Show patients list when mobile responsive
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
                    <h1 className="avatars-title-text">Patients<span style={specialColorFont}>.</span></h1>
                    <BsFillPlusCircleFill color={sharedColors.primaryButtonsColor} className="avatars-title-add-button" />
                </div>

                <div className="search-bar">
                    <BsSearch size="18px" color={sharedColors.primaryFontColor} className="search-icon" />
                    <input type="text" placeholder="Search" className="search-input" />
                </div>
                <div className="users-avatar" id="avatar-scrollbar">
                   
                    {usersData && usersData.map((user, i) =>
                        <div onClick={() => setHighlightedUser(i)} key={i} className={user.selected == false ? "user-avatar" : "user-avatar-selected"}>
                            <img className="avatar-image" src={user.userimage} />
                            <div className="user-info">
                                <p className="user-name-text">{user.patient_name}</p>
                                <p className="user-type-text">{user.type}</p>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
