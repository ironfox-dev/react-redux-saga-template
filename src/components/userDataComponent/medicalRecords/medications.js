import React from 'react';
import './style.css';

const medicationData = [
    {
        title: "calcitriol - 0.25mcg, 30 tabs",
        description: "Take one Tablet",
        author: "Prescribed by Dr. Julia Smith",
        date: "on August 11, 2020",
    }, {
        title: "calcitriol - 0.25mcg, 30 tabs",
        description: "Take one Tablet",
        author: "Prescribed by Dr. Julia Smith",
        date: "on August 11, 2020",
    }, {
        title: "calcitriol - 0.25mcg, 30 tabs",
        description: "Take one Tablet",
        author: "Prescribed by Dr. Julia Smith",
        date: "on August 11, 2020",
    }, {
        title: "calcitriol - 0.25mcg, 30 tabs",
        description: "Take one Tablet",
        author: "Prescribed by Dr. Julia Smith",
        date: "on August 11, 2020",
    },
]

export const Medications = () => {
    return (
        <div className="medication-subscription-container">
            
            {medicationData.map((item, i) =>
                <div key={i} className="medication-every-data-card">
                    <div className="medication-between-part">
                        <p className="medication-subscription-title">{item.title}</p>
                        <p className="medication-subscription-description">{item.description}</p>
                    </div>
                    <div className="medication-between-part">
                        <p className="medication-subscription-author">{item.author}</p>
                        <p className="medication-subscription-date">{item.date}</p>
                    </div>
                </div>
            )}
            
        </div>
    )
}
