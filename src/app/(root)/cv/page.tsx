"use client";

import { useEffect } from "react";
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

import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});


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
        <section className={`cv-container ${inter.className}`}>
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
                {
                    cvData.education.length > 0 ? cvData.education.map((item) => (
                        <p className="mb-4" key={item.year}>{item.degree} - {item.university} ({item.year})</p>
                    )) : null
                }

                <hr />
                <h3 className="mt-4 mb-2">Projects</h3>
                <div className="project-list">
                    {cvData.projects.map((project) => (
                        <div className="project mb-6" key={project.name}>
                            <h4 className="mb-2 mt-4 text-[20px]">{project.name}</h4>
                            <p className="mb-2">{project.company} | {project.domain}</p>
                            <p className="mb-4">{project.tech}</p>
                            {/* <p>{project?.brief}</p> */}
                            {project.brief ? <p className="mb-4">{project.brief}</p> : ""}
                            {project.link ? <a href={project.link}>Visit Site</a> : null}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CVPage;
