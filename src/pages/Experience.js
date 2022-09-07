import React from "react";
import { useState } from "react";
import data from "../Data/data";
import { FaAngleDoubleRight } from "react-icons/fa";
const Experience = () => {
  const [jobs, setJobs] = useState(data);
  const [value, setValue] = useState(0);
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="experience" id="experience">
      <div className="exp-title">
        <h2>Experience</h2>
      </div>
      <div className="exp-center">
        <div className="exp-btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`exp-job-btn ${index === value && "exp-active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <article className="exp-job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="exp-job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="exp-job-desc">
                <FaAngleDoubleRight className="exp-job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Experience;
