import React from 'react';
import gitHub from "../../assets/icons/gitHub.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import './Contact.scss';

const Contact = () => (
    <div className={'contact'}>
        <a style={{marginBottom: '15px'}} target={'_blank'} href={'https://www.linkedin.com/in/karina-furt-a396311a8/'}>
            <img className={'contact_img'} src={gitHub} alt="gitHub"/>
        </a>

        <a style={{marginBottom: '100px', cursor: 'pointer'}} target={'_blank'} href={'https://github.com/WolfFoxColony'}>
            <img className={'contact_img'} src={linkedin} alt="linkedin"/>
        </a>
    </div>
);

export default Contact;