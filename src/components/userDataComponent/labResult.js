import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';

export const LabResult = () => {
    
    const user = useSelector(state => state.usersSelect);
    const recordInfo = user.lapResult;

    return (
        <div className="card-section">
            <h1 className="card-title">Lab Results</h1>
            <div className="lab-result-description-section">
                <div className="description-card">
                    <div className="title-section">
                        <p className="title-text">Blood Test</p>
                        <p className="title-date-text">7-8-2020</p>
                    </div>
                   
                    {recordInfo.bloodTest.map((item, i) =>
                        <div key={i} className="description-row">
                            <p className="description-row-title">{item.title}</p>
                            <p className="description-row-info"><span>{item.info.amount}</span>&nbsp;{item.info.unit}</p>
                        </div>
                    )}

                </div>
                <div className="record-data-container">
                    <div className="description-card-rigth-side">
                        <div className="title-section">
                            <p className="title-text">X-Rays</p>
                        </div>
                        
                        {recordInfo.xRays.map((item, i) =>
                            <div key={i} className="description-row">
                                <p className="description-row-title">{item.title}</p>
                                <p className="description-row-info"><span>{item.info}</span></p>
                            </div>
                        )}

                    </div>
                    <div className="description-card-rigth-side">
                        <div className="title-section">
                            <p className="title-text">MRI</p>
                        </div>
                        
                        {recordInfo.mri.map((item, i) =>
                            <div key={i} className="description-row">
                                <p className="description-row-title">{item.title}</p>
                                <p className="description-row-info"><span>{item.info}</span></p>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
