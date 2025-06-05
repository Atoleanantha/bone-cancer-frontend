import React from 'react'
import Button from 'react-bootstrap/Button';
import ProjectInfo from './ProjectInfo';
import IntroCard from './Introcard';

const About = () => {
    return (
        <div className='bg-dark'>
            <ProjectInfo />
            <h2 style={{ color: "white", padding: "15px" }}>Guidence</h2>
            <div className="intro-container">

                return <div className="intro-card">
                    {/* <img src={item.profile} alt="Pr/sofile" className="profile-image" /> */}
                    <h2 className="intro-title">Mrs. Pooja A. Thorat</h2>
                    <p className="intro-text">
                        <strong>(Project Guide)</strong><br />
                        <strong>Department:</strong> Computer Engineering
                    </p>
                </div>

            </div>
            <h2 style={{ color: "white", padding: "15px" }}>Contributers</h2>
            <IntroCard />



        </div>
    )
}

export default About