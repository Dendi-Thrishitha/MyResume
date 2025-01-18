import React from "react";
import Header from "../components/Header";

const Leader = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Header />
        <section class="resume-section" id="interests">
          <div class="resume-section-content">
            <h2 class="mb-5">Position of Responsibility</h2>
            <h3 class="mt-4">Public Relations Head at EWB (Engineers Without Borders) | Gitam School of Technology</h3>
            <ul>
              <li>Organized events and fests, including conducting an essay writing competition on Gandhi Jayanti.</li>
              <li>Coordinated relief efforts to gather clothing and supplies for those affected by the 2018 Kerala floods.</li>
              <li>Actively participated in teaching government school students how to use online applications such as Google Classroom, Interactive Whiteboards, and Flipgrid.</li>
            </ul>

            <h3 class="mt-4">Student Association/Union President</h3>
            <ul>
              <li>Lead the student body, represent engineering students in discussions with faculty and administration, and organize events and activities benefiting the engineering community.</li>
              <li>Fostered communication between students and the administration, ensuring student concerns and ideas were communicated effectively.</li>
            </ul>

            <h3 class="mt-4">Event Coordinator/Organizer</h3>
            <ul>
              <li>Planned and executed both technical and non-technical events, ensuring successful outcomes through efficient logistics and coordination.</li>
              <li>Managed sponsorships, promoted engineering-related activities, and ensured participation in competitions and workshops.</li>
            </ul>
          </div>
        </section>
        <hr class="m-0" />
      </div>
    </>
  );
};

export default Leader;
