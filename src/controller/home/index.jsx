import React from "react";
import "./Style.scss";
import { useNavigate } from "react-router-dom";
import {Animate } from 'react-simple-animate'
const Home=()=>{
    const navigate = useNavigate();
    console.log(navigate);
    
    const handlnavigate = ()=>{
        navigate("/contact")
    };
return (
<section id ="home" className="home">
    <div className="home__text-wrapper">
   <h1>Welcome I'm Yugavart ^'^
   <br />
   Software Developer 
   </h1>
    </div>
    <Animate 
    play 
    duration={1.5}
    delay={1}
    start ={{
    transform: "translateY(550px)",

    }}
    end={{
        transform:"translateY(0px)",
    }}
    >
        
    <div className="home__contact-me">
 <button onClick={handlnavigate}> Hire me</button>
    </div>
    </Animate>
   

</section>
)

}
export default Home;
