"use client";
import React, { useState } from "react";
import "./page.css";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import GithubIcon from "./icons/GithubIcon";
import teamMembers from "./TeamMembers.json";

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container">
      <div className="icon">
        {teamMembers.map((member, index) => (
          <div
            className={`imgbx ${index === activeIndex ? "active" : ""}`}
            style={{ "--i": member.id }}
            data-id={`content${member.id}`}
            key={member.id}
            onMouseOver={() => handleMouseOver(index)}
          >
            <img src={member.imgPath} alt="" />
          </div>
        ))}
      </div>
      <div className="content">
        {teamMembers.map((member, index) => (
          <div
            className={`contentbx ${index === activeIndex ? "active" : ""}`}
            id={`content${member.id}`}
            key={member.id}
          >
            <div className="card">
              <div className="imgbx">
                <img src={member.imgPath} alt="" />
              </div>
              <div className="textbx">
                <h2>
                  {member.name} <br />
                  <span>{member.role}</span>
                </h2>
                <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                  {member.socialMedia.map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.link}
                        rel="noreferrer"
                        target="_blank"
                        className="text-white transition hover:opacity-75"
                      >
                        <span className="sr-only">{social.name}</span>
                        {social.name === "Facebook" && <FacebookIcon />}
                        {social.name === "Instagram" && <InstagramIcon />}
                        {social.name === "GitHub" && <GithubIcon />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
