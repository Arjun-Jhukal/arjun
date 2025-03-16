"use client";

import { useEffect, useState } from "react";
import { cvData } from "../../../../cv";

type Experience = {
    company: string;
    role: string;
    duration: string;
};

type Education = {
    degree: string;
    university: string;
    year: string;
};

type CVData = {
    name: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
    experience: Experience[];
    skills: string[];
    education: Education;
};



const CVPage = () => {
    useEffect(() => {
        if (cvData) {
            setTimeout(() => {
                window.print();
            }, 500);
        }
    }, [cvData]);

    if (!cvData) return <p>Loading CV...</p>;


    return (
        <section className="cv-container">
            <div className="container">
                <div className="title text-center mb-4">
                    <h1 className="mb-2">{cvData.name}</h1>
                    <p className="mb-4">Frontend Developer [React | Next | Wordpress]</p>

                    <ul className="flex justify-center gap-6">
                        <li>
                            Email: <a href={`mailto:${cvData.email}`}>{cvData.email}</a>
                        </li>
                        <li>
                            Phone: <a href={`tel:${cvData.phone}`}>
                                {cvData.phone}</a>
                        </li>
                        <li>Address: {cvData.address}</li>
                    </ul>
                </div>
                <hr />
                <h3 className="mt-4 mb-2">About</h3>
                <p className="mb-4">{cvData.summary}</p>
                <hr />
                <h3 className="mt-4 mb-2">Experience</h3>
                {cvData.experience.map((job, index) => (
                    <div key={index} className="mb-4">
                        <strong>{job.role}</strong> at {job.company} ({job.duration})
                    </div>
                ))}
                <hr />
                <h3 className="mt-4 mb-2">Skills</h3>
                <ul className="mb-4">
                    {cvData.skills.map((skill, index) => (
                        <li key={index} className="mb-4">{skill}</li>
                    ))}
                </ul>
                <hr />
                <h3 className="mt-4 mb-2">Education</h3>
                <p className="mb-4">{cvData.education.degree} - {cvData.education.university} ({cvData.education.year})</p>
                <hr />
                <h3 className="mt-4 mb-2">Projects</h3>
                <div className="project-list">
                    {cvData.projects.map((project) => (
                        <div className="project mb-6" key={project.name}>
                            <h4 className="mb-2 mt-4">{project.name}</h4>
                            <p className="mb-2">{project.company}|{project.domain}</p>
                            <p className="mb-4">{project.tech}</p>
                            {project.brief ? <p className="mb-4">{project.brief}</p> : ""}
                            <a href="https://arjunjhukal.com.np">Visit Site</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CVPage;
