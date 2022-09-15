import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb, DiDocker } from "react-icons/di";
import { SiKubernetes } from "react-icons/si";
import { IconContext } from "react-icons";
import parthavImage from "../images/parthav.jpg";
export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-fade">
        <h1 className="about-header">About Me</h1>
        <div className="about-content">
          <div className="about-description">
            <div className="about-para">
              <p>
                I am a software engineer based in Toronto, Canada. I am
                interested in A.I. as well as full-stack development and block
                chain and crypto. Click here to view my projects.
              </p>
            </div>
            <p>Here are some technologies that I am working with:</p>
            <div className="about-icons">
              <ul>
                <li>
                  <a href="https://reactjs.org/" className="react-icon">
                    <FaReact className="icons-class" />
                  </a>
                </li>
                <li>
                  <a href="https://nodejs.org/en/" className="node-icon">
                    <FaNodeJs className="icons-class" />
                  </a>
                </li>
                <li>
                  <a href="https://www.mongodb.com/" className="mongo-icon">
                    <DiMongodb className="icons-class" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://https://kubernetes.io/.docker.com/"
                    className="kubernetes-icon"
                  >
                    <SiKubernetes className="icons-class" />
                  </a>
                </li>
                <li>
                  <a href="https://www.docker.com/" className="docker-icon">
                    <DiDocker className="icons-class" />
                  </a>
                </li>
              </ul>
            </div>
            <p>
              Besides projects, I love keeping up with the world of physics and
              sports!! I also love playing video games and going to the gym.
            </p>
          </div>
          <div className="about-image">
            <img src={parthavImage} className="about-img"></img>
          </div>
        </div>
      </div>
    </section>
  );
}
