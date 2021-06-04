import React, { useState } from 'react';
import './style.css';

export const DoctorNotesDetails = ({ items }) => {
    const [detailsSection, setDetailsSection] = useState(false);

    // Toggle the details area
    const toggleDetailsSection = () => {
        setDetailsSection(detailsSection === false ? true : false);
    }
    return (
        <>

            {detailsSection === false &&
                <div className="note-row">
                    <div className="doctor-note-card" onClick={() => toggleDetailsSection()}>
                        <p className="assigned-task-text">Dr. Julia Smith</p>
                        <p className="subscribe-text">7-8-2020</p>
                    </div>
                    <div className="discard-button">
                        <p className="doctor-notes-button-text">Discard</p>
                    </div>
                    <div className="primary-button">
                        <p className="doctor-notes-button-text">Save</p>
                    </div>
                    <div className="primary-button">
                        <p className="doctor-notes-button-text">Sign</p>
                    </div>
                </div>
            }

            {detailsSection === true &&
                <div className="doctors-notes-details-section">
                    <div className="doctors-notes-details-section-header-row">
                        <p className="header-row-title">Written by <span>{items.doctorName}</span></p>
                        <p className="header-row-date">{items.noteDate}</p>
                    </div>
                    <div className="details-part-section">
                        <p className="parts-titles">Chief Complaint:</p>
                        <p className="parts-decription-text">{items.complaint}</p>
                    </div>
                    <div className="details-part-section">
                        <p className="parts-titles">HPI:</p>
                        <p className="parts-decription-text">{items.hpi}</p>
                    </div>
                    <div className="details-part-section">
                        <p className="parts-titles">Objective:</p>
                        <p className="parts-decription-text">{items.objective}</p>
                    </div>
                    <div className="details-part-section">
                        <p className="parts-titles">Physical Exam:</p>

                        {items.physicalExam.map((item, i) =>
                            <p key={i} className="parts-decription-text"><span>{item.name}:</span> {item.text}</p>
                        )}

                    </div>
                    <div className="details-part-section">
                        <p className="parts-titles">Labs & Imaging:</p>
                        <div className="doctors-note-details-part-description-card">
                            <div className="title-section">
                                <p className="title-text">Blood Test</p>
                                <p className="title-date-text">7-8-2020</p>
                            </div>

                            {items.laps.map((item, i) =>
                                <div key={i} className="description-row">
                                    <p className="description-row-title">{item.title}</p>
                                    <p className="description-row-info"><span>{item.info.amount}</span>&nbsp;{item.info.unit}</p>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="details-part-section">
                        <p className="parts-titles">Assessment & Plan:</p>
                        <p className="parts-decription-assessment-comment">Click here to start writing…</p>
                        <div className="details-part-assessment-tasks-list">
                            <div className="assigned-task-card">
                                <p className="assigned-task-text">Check Blood Sugar</p>
                                <p className="subscribe-text">3 out of 7 Days<br />Complete</p>
                            </div>
                            <div className="assigned-task-card">
                                <p className="assigned-task-text">Make a Follow-Up Appointment</p>
                            </div>
                            <div className="assigned-task-card">
                                <p className="assigned-task-text">Schedule a Blood Test</p>
                            </div>
                        </div>
                    </div>
                    <div className="doctors-note-details-part-buttons-container">
                        <div className="discard-button">
                            <p className="doctor-notes-button-text">Discard</p>
                        </div>
                        <div className="primary-button">
                            <p className="doctor-notes-button-text">Save</p>
                        </div>
                        <div className="primary-button">
                            <p className="doctor-notes-button-text">Sign</p>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}
