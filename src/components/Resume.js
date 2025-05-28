import react from 'react';

function Resume() {
    return (
        <div className="resume">
            <h2>Vinod Kumar Mittapally</h2>
            <h4>Senior Quality Assurance Engineer / SDET</h4>
            <p>Email: <a href="mailto:21vinod12@gmail.com">21vinod12@gmail.com</a></p>
            <p>Phone: <a href="tel:+17858406261">+1 (785) 840-6261</a></p>
            <p>
                <a href="https://www.linkedin.com/in/21vinod" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
                <a href="https://github.com/21vinod" target="_blank" rel="noopener noreferrer"> GitHub</a>
            </p>
            <hr />
            <section>
                <h3>Professional Summary</h3>
                <ul>
                    <li>Software Development Engineer in Test (SDET) with ~9 years of experience in automation and manual testing for enterprise applications.</li>
                    <li>Expert in Core Java, J2EE, OOP, Selenium WebDriver (Java), Playwright (TypeScript/JavaScript), REST API automation (Rest Assured), and WireMock.</li>
                    <li>Skilled in SOAP/REST API testing, performance/load testing (JMeter), and accessibility testing (WCAG 2.1 AA, Axe, NVDA, etc.).</li>
                    <li>Strong in test frameworks: TestNG, Cucumber BDD, Maven, and CI/CD (GitLab, Jenkins).</li>
                    <li>Experienced with Git, GitHub, Perforce, Oracle Flow Builder, and Agile/Scrum methodologies.</li>
                    <li>Exposure to front-end (HTML, CSS, JS, ReactJS, PHP), Docker, VMware, and cloud technologies.</li>
                </ul>
            </section>
            <section>
                <h3>Awards & Certifications</h3>
                <ul>
                    <li>Excellence award for reducing manual efforts (OpenText)</li>
                    <li>Java, Oscript, HTML-CSS-JavaScript, Selenium, SQL (OpenText Certifications)</li>
                    <li>Spring Boot 6 (Udemy), Oracle Certified Java Professional, ISTQB, AWS Cloud Practitioner</li>
                </ul>
            </section>
            <section>
                <h3>Skills</h3>
                <ul>
                    <li><strong>Programming:</strong> Java, J2EE, JavaScript/TypeScript, PHP, SQL, OOP</li>
                    <li><strong>Frontend:</strong> HTML, CSS, JavaScript, ReactJS</li>
                    <li><strong>Testing Tools:</strong> Selenium, Playwright, Oracle OATS, Postman, REST Assured, WireMock, JMeter</li>
                    <li><strong>Frameworks:</strong> JUnit, TestNG, Cucumber BDD, JBehave, TDD, Oracle OATS</li>
                    <li><strong>CI/CD:</strong> GitLab CI/CD, Jenkins</li>
                    <li><strong>Build Tools:</strong> Ant, Maven</li>
                    <li><strong>IDEs:</strong> IntelliJ, Eclipse, VS Code</li>
                    <li><strong>Version Control:</strong> Git, GitHub, Perforce</li>
                    <li><strong>Project Management:</strong> JIRA, Confluence</li>
                    <li><strong>OS:</strong> Windows, Linux, UNIX</li>
                    <li><strong>Processes:</strong> SDLC, STLC, Defect Life Cycle</li>
                    <li><strong>Methodologies:</strong> Waterfall, Agile (Scrum, Kanban)</li>
                </ul>
            </section>
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
            <section>
                <a className="download-link" href={require('../files/Vinod_Mitta_Resume_Sr_QA.pdf')} target="_blank" rel="noopener noreferrer">Download PDF Resume</a>
            </section>
        </div>
    );
}

export default Resume;