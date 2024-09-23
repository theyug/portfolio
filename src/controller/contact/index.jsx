import React from "react";
import PageHeaderContent from "../../component/page_headercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Import LinkedIn and GitHub icons
import { Animate } from "react-simple-animate";
import "./Style.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent headerText="My Contact" />
      <div className="contact__content">
        {/* Animation for header */}
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        {/* Animation for form */}
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="description"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>

            <button>Submit</button>

            {/* Social Links Section */}
            <div className="contact__content__social-links">
              <a
                href="https://www.linkedin.com/in/yugavart-tyagi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={40} color="var(--yellow-theme-main-color)" />
              </a>
              <a
                href="https://github.com/Yugavart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithub size={40} color="var(--yellow-theme-main-color)" />
              </a>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
