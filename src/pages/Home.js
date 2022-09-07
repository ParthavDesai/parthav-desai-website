import React from "react";
import ReactTypingEffect from "react-typing-effect";

export default function Home() {
  return (
    <section className="home" id="home">
      <h1 className="home-heading">
        Hi, I am <span className="home-name">Parthav Desai</span>
      </h1>
      <ReactTypingEffect
        text={["Software Engineer", "Developer", "Computer Science Enthusiast"]}
        className="home-heading2"
      />
      <p className="home-para">
        I am based in Toronto, and love all things computer science. Currently
        interested in Full-stack development, A.I. and blockchain.
      </p>
      <a href="Desai,Parthav_Resume.pdf" className="btn" download>
        Resume
      </a>
    </section>
  );
}
