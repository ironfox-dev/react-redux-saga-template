import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import { SideBar } from '../../components';
import { AvatarsContainer } from '../../components';
import { sharedColors } from '../../theme/sharedColor';
import { UserDataComponent } from '../../components';
import { GET_PATIENTS_LIST } from '../../store/actionNames/homePageActions';

export const HomePage = () => {
    const dispatch = useDispatch();

    const [mainPart, setMainPart] = useState("intro");

    // Dispatch the action for get patient list after components mounted
    useEffect(() => {
        dispatch({ type: GET_PATIENTS_LIST });
    }, []);


    // Style for the highlighted text color.
    const specialColorFont = {
        color: sharedColors.primaryFontColor,
    }

    // Set main section
    const setMainSection = (part) => {
        setMainPart(part)
    }

    return (
        <div className="intro-page-container">
            <SideBar select={"home"} />
            <div className="main-section">
                <AvatarsContainer setMainSection={setMainSection} />

                {mainPart === "intro" &&
                    <div className="intro-section-part">
                        <div className="intro-page-intro-section">
                            <div>
                                <h1 className="intro-title">Good Morning<span style={specialColorFont}>,</span><br />Dr<span style={specialColorFont}>.</span> Smith</h1>
                                <p className="intro-description">Click on a patient on the left to view<br />their medical record</p>
                            </div>
                        </div>
                    </div>
                }

                {mainPart !== "intro" &&
                    <UserDataComponent />
                }
            </div>
        </div>
    )
}
