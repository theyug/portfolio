import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../component/page_headercontent";
import { Animate } from "react-simple-animate";
import {DiApple , DiAndroid} from "react-icons/di";
import { FaDatabase, FaDev} from "react-icons/fa"


import './Style.scss'

const personalDetails = [
    {
        label: "Name",
        value: "Yugavart Tyagi"
    },
    {
        label: "Age",
        value: "20"
    },
    {
        label: "Email",
        value: "tyagiyugavart@gmail.com",
    },
    {
        label: "Mobile No.",
        value: "8851004129"
    }
];

const jobSummary = 'Hi, I am Yugavart Tyagi, an aspiring Java developer, I am a passionate software developer with a background in Java, Spring Boot, Angular, React, and Kafka. I am reaching out to explore potential opportunities within your team.';

const About = () => {
    return (
        <section id="about" className="about">
            <PageHeaderContent 
                headerText="About Me"
               
            />
            <div className="about__content">
                <div className="about__content__personal-wrapper">
                    <Animate
                        play 
                        duration={1}
                        delay={0}
                        start={{ transform: "translateX(-900px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h1>Software Developer</h1>
                        <p>{jobSummary}</p>
                    </Animate>
                </div>
                <div className="about__content__service-wrapper">
                    <Animate
                        play 
                        duration={1}
                        delay={0}
                        start={{ transform: "translateX(500px)" }}
                        end={{ transform: "translateX(0px)" }}
                    >
                        <h3 className="personalinfoheader">Personal Details</h3>
                        <ul>
                            {personalDetails.map((item, i) => (
                                <li key={i}>
                                    <span className="title">{item.label}:</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>
                <div className="about__content__serviceswrapper"> 
                    <div className="about__content__serviceswrapper__inner_content">
                    <div>
                        <FaDev size={60} color="var(--yellow-theme-main-color)"/>
                     </div>
                     <div>
                     <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>

                     </div>
                     <div>
                     <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>

                     </div>
                     <div>
                     <DiApple size={60} color="var(--yellow-theme-main-color)"/>

                     </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default About;
