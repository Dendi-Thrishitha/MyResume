import React from "react";
import Header from "../components/Header";

const Experience = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />

        <hr class="m-0" />

        <section class="resume-section" id="experience">
          <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div class="flex-grow-1">
                <h3 class="mb-0">MINDTECH BUG COMPONENT SYSTEM Intern</h3>
                <div class="subheading mb-3">Electronics Corporation of India Limited</div>
                
                   <p>
                    <b>Roles and Responsibilities:-</b>
                    <br />
                    •Implemented Bug Tracking System resulting in a 70% reduction in software defects.Enhanced Software Quality Assurance procedures,
                      leading to a 55% decrease in bug resolution time. <br />
                    • Streamlined task assignment process based on employee skills, resulting in a 60% increase in productivity.Resulted a 65% improvement in
                       overall software quality metrics through rigorous bug tracking and resolution.Successfully deployed Bug Tracking System, reducing
                      post-release bugs by 55%. <br />
                    
                   
                      
                      </p>
              </div>
              <div class="flex-shrink-0">
                <span class="text-primary">April 2022 - May2022</span>
              </div>
            </div> 
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Experience;
