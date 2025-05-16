import React from 'react';
import gitHub from "../../assets/icons/gitHub.svg";
import linkedin from "../../assets/icons/linkedin.svg";

const Contact = () => (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center'}}>
        <a style={{marginBottom: '15px'}} href={'https://www.linkedin.com/in/karina-furt-a396311a8/'}>
            <img src={gitHub} alt="gitHub"/>
        </a>

        <a style={{marginBottom: '100px', cursor: 'pointer'}} href={'https://github.com/ilumm?tab=repositories'}>
            <img src={linkedin} alt="linkedin"/>
        </a>
    </div>
);

export default Contact;