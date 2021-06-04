import React, { useState } from 'react';
import './style.css';

export const AssignedText = () => {
    const [visibleAddSection, setVisibleAddSection] = useState(false);
    const [addOptionSwitch, setSwitch] = useState(true);

    // Show add section
    const showAddSection = () => {
        setVisibleAddSection(true);
    }

    // Hide add section
    const hideAddSection = () => {
        setVisibleAddSection(false);
    }

    // Toggle switch
    const toggleSwitch = () => {
        setSwitch(!addOptionSwitch);
    }

    // Switch style
    const switchIndividualStyle = {
        justifyContent: "flex-start",
    }

    const switchSequencedStyle = {
        justifyContent: "flex-end",
    }

    return (
        <div className="card-section">
            <h1 className="card-title">Assigned Tasks</h1>
            <div className="assigned-tasks-container">
                <div className="assigned-task-card">
                    <p className="assigned-task-text">Check Blood Sugar</p>
                    <p className="subscribe-text">3 out of 7 Days<br />Complete</p>
                </div>
                <div className="assigned-task-card">
                    <p className="assigned-task-text">Make a Follow-Up Appointment</p>
                </div>
            </div>
            <div className="assigned-tasks-container">
                <div className="assigned-task-card">
                    <p className="assigned-task-text">Schedule a Blood Test</p>
                </div>
               
                {visibleAddSection === false &&
                    <div className="add-button" onClick={() => showAddSection()}>
                        <p className="assigned-task-text">Add New Task</p>
                    </div>
                }
                
            </div>
            
            {visibleAddSection === true &&
                <div className="add-section">
                    <div className="add-section-title-row">
                        <h1 className="add-section-title-title-text">Add New Task</h1>
                        <p className="add-section-cancel-text" onClick={() => hideAddSection()}>Cancel</p>
                    </div>
                    <p className="add-section-description">Create a new task by filling out the information below. You can chose to create an individual task or a series of tasks for the patient to complete in sequence.</p>
                    <div className="add-section-switch-row">
                        <div className="add-section-switch" onClick={() => toggleSwitch()}>
                            <div className={addOptionSwitch === true ? "switch-option-selected" : "switch-option"}>
                                <p className="option-text">Individual</p>
                            </div>
                            <div className={addOptionSwitch === false ? "switch-option-selected" : "switch-option"}>
                                <p className="option-text">Sequenced</p>
                            </div>
                        </div>
                    </div>
                    <div className="add-input-section">
                        <div className="input-row">
                            <div className="add-buttons">
                                <p className="add-buttons-text">Task Title</p>
                            </div>
                            <div className="add-buttons">
                                <p className="add-buttons-text">Frequency</p>
                            </div>
                            <div className="save-task-button">
                                <p>Save Task</p>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}
