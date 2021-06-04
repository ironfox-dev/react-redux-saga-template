import React from 'react';
import './style.css';
import { DoctorNotesDetails } from './doctorNotesComponents';

const doctorNotesService = [
    {
        doctorName: "Dr. Julia Smith",
        noteDate: "7-8-2020",
        complaint: "Lorem ipsum dolor sit amet, has an nobis viderer",
        hpi: "Lorem ipsum dolor sit amet, has an nobis viderer, has et exerci omnesque. Quo probo albucius at, at docendi molestie vis, id tempor mucius propriae his. Omnium sententiae id vim, eu nonumes quaestio sed, diceret consetetur incorrupte usu at.",
        objective: "Lorem ipsum dolor sit amet, has an nobis viderer, has et exerci omnesque. Quo probo albucius at,",
        physicalExam: [
            {
                name: "General",
                text: "No acute distress",
            },{
                name: "HEENT",
                text: "Normocephalic, Atraumatic",
            },{
                name: "Lungs",
                text: "No signs of respiratory distress, able to speak in full sentences.",
            },
        ],
        laps: [
            {
                title: "cholesterol",
                info: {
                    unit: "mg/dl", 
                    amount: 229,
                },
            },{
                title: "HDL",
                info: {
                    unit: "mg/dl", 
                    amount: 45,
                }, 
            },{
                title: "LDL",
                info: {
                    unit: "mg/dl", 
                    amount: 165,
                },
            },{
                title: "Triglycerides",
                info: {
                    unit: "mg/dl", 
                    amount: 93,
                },
            },{
                title: "Hemoglobin A1c",
                info: {
                    unit: "%", 
                    amount: 8.5,
                },
            },{
                title: "PT - INR",
                info: {
                    unit: "", 
                    amount: 2.1,
                },
            },
        ],
    },{
        doctorName: "Dr. Julia Smith",
        noteDate: "7-8-2020",
        complaint: "Lorem ipsum dolor sit amet, has an nobis viderer",
        hpi: "Lorem ipsum dolor sit amet, has an nobis viderer, has et exerci omnesque. Quo probo albucius at, at docendi molestie vis, id tempor mucius propriae his. Omnium sententiae id vim, eu nonumes quaestio sed, diceret consetetur incorrupte usu at.",
        objective: "Lorem ipsum dolor sit amet, has an nobis viderer, has et exerci omnesque. Quo probo albucius at,",
        physicalExam: [
            {
                name: "General",
                text: "No acute distress",
            },{
                name: "HEENT",
                text: "Normocephalic, Atraumatic",
            },{
                name: "Lungs",
                text: "No signs of respiratory distress, able to speak in full sentences.",
            },
        ],
        laps: [
            {
                title: "cholesterol",
                info: {
                    unit: "mg/dl", 
                    amount: 229,
                },
            },{
                title: "HDL",
                info: {
                    unit: "mg/dl", 
                    amount: 45,
                }, 
            },{
                title: "LDL",
                info: {
                    unit: "mg/dl", 
                    amount: 165,
                },
            },{
                title: "Triglycerides",
                info: {
                    unit: "mg/dl", 
                    amount: 93,
                },
            },{
                title: "Hemoglobin A1c",
                info: {
                    unit: "%", 
                    amount: 8.5,
                },
            },{
                title: "PT - INR",
                info: {
                    unit: "", 
                    amount: 2.1,
                },
            },
        ],
    },
]

export const DoctorNotes = () => {
    return (
        <div className="card-section">
            <h1 className="card-title">Doctor’s Notes</h1>
            
            {doctorNotesService.map((item, i) => 
                <DoctorNotesDetails items={item} key={i} />
            )}
            
        </div>
    )
}
