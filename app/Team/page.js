"use client";
import React, { useEffect } from "react";

import "./page.css";

// Assets
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import GithubIcon from "./icons/GithubIcon";

// Mock
import teamMembers from "./TeamMembers.json";

const Team = () => {
  useEffect(() => {
    const initializeHoverEffect = () => {
      const imgbx = document.querySelectorAll(".imgbx");
      const contentbx = document.querySelectorAll(".contentbx");

      imgbx.forEach((item) => {
        item.addEventListener("mouseover", function (event) {
          contentbx.forEach((content) => {
            content.classList.remove("active");
          });
          imgbx.forEach((img) => {
            img.classList.remove("active");
          });
          const targetId = this.dataset.id;
          const targetContent = document.getElementById(targetId);
          if (targetContent) {
            targetContent.classList.add("active");
          }
          this.classList.add("active");
        });
      });
    };

    initializeHoverEffect();

    return () => {
      const imgbx = document.querySelectorAll(".imgbx");
      imgbx.forEach((item) => {
        item.removeEventListener("mouseover", initializeHoverEffect);
      });
    };
  }, []);

  return (
    <section className="bg-black">
    <div className="container">
      <div className="icon">
        {teamMembers.map((member, index) => (
          <div
            className={`imgbx ${index === 0 ? "active" : ""}`}
            style={{ "--i": member.id }}
            data-id={`content${member.id}`}
            key={member.id}
          >
            <img src={member.imgPath} alt="" />
          </div>
        ))}
      </div>
      <div className="content">
        {teamMembers.map((member, index) => (
          <div
            className={`contentbx ${index === 0 ? "active" : ""}`}
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
    </section>
  );
};

export default Team;