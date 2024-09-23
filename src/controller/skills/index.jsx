import React from "react";
import PageHeaderContent from "../../component/page_headercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import { skillsdata } from "./utils";
import './Style.scss';

const Skills = () => {
    // Check if skillsdata is not undefined or empty
    

    return (
        <section id="skills" className="skills">
            <PageHeaderContent
                headerText="Skills"
                icon={<BsInfoCircleFill size={40} />} />
            <div className="skills__content-wrapper">
                {skillsdata.map((item, i) => (
                    <div key={i} className="skills__content-wrapper__inner-content">
                        <Animate
                            play
                            duration={1}
                            delay={0.3}
                            start={{ transform: 'translateX(-200px)' }}
                            end={{ transform: 'translateX(0px)' }}>
                            <h3 className="skills__content-wrapper__inner-content__text"> {item.label}</h3>
                            <div>
                                {item.data.map((skillItem, j) => (
                                    <AnimateKeyframes
                                        play
                                        duration={1}
                                        keyframes={["opacity:1", "opacity:0"]}
                                        iterationCount={"1"}
                                        key={j}
                                    >
                                        <div className="progress-wrapper">
                                            <p>{skillItem.skillname}</p>
                                            <Line percent={skillItem.Percentage}
                                                strokeWidth="2"
                                                strokeColor="var(--yellow-theme-main-color)"
                                                trailWidth={"2"}
                                                strokeLinecap="square"></Line>
                                        </div>
                                    </AnimateKeyframes>
                                ))}
                            </div>
                        </Animate>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
