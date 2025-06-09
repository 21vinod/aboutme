import React from 'react';
import Summary from './Summary';
import Awards from './Awards';
import Skills from './Skills';
import Experience from './Experience';

function Resume() {
    return (
        <div className="resume">
            <h2>Vinod Kumar Mittapally</h2>
            <h4>Senior Quality Assurance Engineer / SDET</h4>
            <p>Email: <a href="mailto:21vinod12@gmail.com">21vinod12@gmail.com</a></p>
            <p>Phone: <a href="tel:+17858406261">+1 (785) 840-6261</a></p>
            <p>
                <a href="https://www.linkedin.com/in/vinod-kumar-mittapally/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                <a href="https://github.com/21vinod" target="_blank" rel="noopener noreferrer"> GitHub</a>
            </p>
            <hr />
            <Summary />
            <Awards />
            <Skills />
            <Experience />
            <section>
                <a className="download-link" href={require('../files/Vinod_Mitta_Resume_Sr_QA.pdf')} target="_blank" rel="noopener noreferrer">Download PDF Resume</a>
            </section>
        </div>
    );
}

export default Resume;