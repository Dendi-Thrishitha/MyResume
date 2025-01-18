import React from "react";
import Header from "../components/Header";

const Skills = () => {
  const skillsData = [
    { category: "Programming Languages",  details: "C, C++, Java, Python" },
    { category: "Web Technologies",  details: "HTML, CSS, React, Angular, Node.js, Spring Boot, GIT" },
    { category: "Databases",  details: "MySQL, SQL Server, MongoDB" },
    { category: "Cloud Technologies",  details: "AWS (EC2),Docker, Microsoft Azure" },
    { category: "Software Tools",  details: "IntelliJ, Visual Studio, Eclipse" },
    { category: "Proficiency Forte",  details: "Data Structures, Algorithms" },
  ];

  return (
    <>
      <div className="container-fluid p-0">
        <Header />
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="skills-container">
              {skillsData.map((skill, index) => (
                <div key={index} className="skill-box">
                  <h3>{skill.category}</h3>
                  <div className="skill-details">{skill.details}</div>
                  
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr className="m-0" />
      </div>
    </>
  );
};

export default Skills;
