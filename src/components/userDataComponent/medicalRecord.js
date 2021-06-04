import React, { useState } from 'react';
import './style.css';
import {
    Allerges,
    Immunizations,
    Medications,
} from './medicalRecords';

const paginationList = [
    {
        text: "Allergies",
        selected: true,
        paginationTogggle: "allergies",
    }, {
        text: "Immunizations",
        selected: false,
        paginationTogggle: "immunization",
    }, {
        text: "Medications",
        selected: false,
        paginationTogggle: "medications",
    },
];

export const MedicalRecord = () => {
    const [paginationData, setPaginationData] = useState(paginationList);
    const [paginationPage, setPaginationPage] = useState("allergies");

    // Section pagination function
    const setCurrentSelected = (selectedNumber) => {
        let virtualArray = [];
        for (let i = 0; i < paginationData.length; i++) {
            if (i !== selectedNumber) virtualArray.push({ ...paginationData[i], selected: false });
            if (i === selectedNumber) virtualArray.push({ ...paginationData[i], selected: true })
        }
        setPaginationData(virtualArray)
        setPaginationPage(paginationList[selectedNumber].paginationTogggle);
    }

    return (
        <div className="card-section">
            <div className="pagination-section">
                <h1 className="pagination-title">Medical Record</h1>
                <ul className="pagination-list">
                    {paginationData.map((item, i) =>
                        <li onClick={() => setCurrentSelected(i)} key={i} className={item.selected === true ? "pagination-item-selected" : "pagination-item"}>
                            <p>{item.text}</p>
                            {item.selected === true && <div className="bottom-border"></div>}
                        </li>
                    )}
                </ul>
            </div>

            {paginationPage === "allergies" &&
                <Allerges />
            }

            {paginationPage === "immunization" &&
                <Immunizations />
            }

            {paginationPage === "medications" &&
                <Medications />
            }

        </div>
    )
}
