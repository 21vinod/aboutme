import React from 'react';

function Experience() {
    return (
        <section>
            <h3>Professional Experience</h3>
            <div className="job-entry">
                <h4>Senior Quality Assurance Engineer-SDET | OpenText (Contract)</h4>
                <span className="dates">Apr 2022 – Present | Menlo Park, CA</span>
                <p><strong>Product:</strong> Core Content Management (CCM)</p>
                <ul>
                    <li>Led automation for CCM SaaS product, reducing costs and improving efficiency.</li>
                    <li>Engineered automation using Selenium WebDriver, Java, POM, Cucumber BDD.</li>
                    <li>Cross-browser testing (Chrome, Firefox, Safari, IE) and Selenium Grid parallel execution.</li>
                    <li>Developed Playwright scripts (TypeScript/JavaScript) for E2E and UI testing.</li>
                    <li>REST API testing with Postman, Rest Assured, and WireMock for mocks.</li>
                    <li>Integrated accessibility testing (WCAG 2.1 AA), managed test cases in TestRail.</li>
                    <li>Collaborated with product teams, created test plans, managed defects, and reported status.</li>
                </ul>
                <p><strong>Tech Stack:</strong> Cucumber BDD, Java, TypeScript/JavaScript, Selenium, Rest Assured, WireMock, Playwright, Postman, Swagger, TestRail, Maven</p>
            </div>
            <div className="job-entry">
                <h4>Quality Assurance Engineer 2 | Oracle</h4>
                <span className="dates">Jul 2019 – Apr 2022 | Hyderabad, India</span>
                <p><strong>Product:</strong> Oracle Service Logistics</p>
                <ul>
                    <li>Automated E2E test cases for Oracle Fusion RCL and Service Logistics.</li>
                    <li>Key contributor for Oracle SCM product family and Oracle Flow Builder automation.</li>
                    <li>Developed ADF, Selenium, Java automation; performed DB validations (PL/SQL).</li>
                    <li>GDPR compliance, Agile Scrum participation, managed bug tracking (JIRA, Zephyr).</li>
                    <li>Point of Contact for Daily Test Executions (DTE) and CI/CD test cycles.</li>
                </ul>
                <p><strong>Tech Stack:</strong> ADF, Oracle OATS, JIRA, Zephyr, PL/SQL, Selenium, Java</p>
            </div>
            <div className="job-entry">
                <h4>Software Engineer/Java Programmer | OpenText</h4>
                <span className="dates">Jul 2016 – Jul 2019 | Hyderabad, India</span>
                <p><strong>Product:</strong> OpenText Content Server (OTCS) / Livelink</p>
                <ul>
                    <li>Developed JSP, Spring JPA, Spring MVC, and REST API automation.</li>
                    <li>Automated UI and SOAP API tests, performance/load testing (JMeter).</li>
                    <li>Managed Jenkins pipelines, certified products across OS/DBs, served as Scrum Master.</li>
                </ul>
                <p><strong>Tech Stack:</strong> Java, JSP, Spring, Selenium, SOAP, REST, JMeter, JIRA, Agile, Jenkins, Linux, TestNG</p>
            </div>
        </section>
    );
}

export default Experience;
