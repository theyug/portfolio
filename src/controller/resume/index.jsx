import React from "react";
import PageHeaderContent from "../../component/page_headercontent";
import { BsInfoCircleFill } from "react-icons/bs";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { data } from './utils.js';
import {MdWork} from "react-icons/md";

import 'react-vertical-timeline-component/style.min.css';
import './Style.scss'; // Ensure this CSS file handles the layout

const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeaderContent 
                headerText="My Resume" 
               
            />
            <div className="timeline-container">
                <div className="timeline__experience">
                    <h3 className="timeline__header">Experience</h3>
                    <VerticalTimeline layout={'1-column'} lineColor="var(--yellow-theme-main-color)">
                        {data.experience.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline__element"
                                contentStyle={{ background: 'none', 
                                    color: 'var(--yellow-theme-main-color)',
                                border:'1.5px solid  var(--yellow-theme-main-color)'
                            }}
                            icon ={<MdWork/>}
                                iconStyle={{ background: 'var(--yellow-theme-main-color)', color: '#fff' }}
                            >
                                <h3 className="timeline__title">{item.title}</h3>
                                <h4 className="timeline__subtitle">{item.subTitle}</h4>
                                <p>{item.descrpition}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>

                <div className="timeline__education">
                    <h3 className="timeline__header">Education</h3>
                    <VerticalTimeline layout={'1-column'} lineColor="var(--yellow-theme-main-color)">
                        {data.education.map((item, i) => (
                            <VerticalTimelineElement
                                key={i}
                                className="timeline__element"
                                contentStyle={{ background: 'none', 
                                    color: 'var(--yellow-theme-main-color)',
                                border:'1.5px solid  var(--yellow-theme-main-color)'
                            }}
                            icon ={<MdWork/>}
                                iconStyle={{ background: 'var(--yellow-theme-main-color)', color: '#fff' }}
                            > 
                                <h3 className="timeline__title">{item.title}</h3>
                                <h4 className="timeline__subtitle">{item.subTitle}</h4>
                                <p>{item.descrpition}</p>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </section>
    );
};

export default Resume;
