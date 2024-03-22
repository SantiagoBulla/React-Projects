import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
    return (
        <div className="about">
            <div className="about-left">
                <img src={about_img} alt="about_img" className='about-img' />
                <img src={play_icon} alt="play_icon" className='play-icon' onClick={() => { setPlayState(true) }} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurting Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod minus nemo provident vel incidunt. Tempore praesentium minima odio numquam voluptate in eligendi nisi sequi dolore, asperiores fugiat, praesentium quas!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quos fugit, officiis aspernatur ullam atque et repellendus asperiores magni ad eligendi minus accusantium optio labore, blanditiis quas cumque quasi perferendis.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi quos fugit, officiis aspernatur , blanditiis quas cumque quasi perferendis.</p>
            </div>
        </div>
    )
}

export default About