import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    //if the scroll exceeds 150px then the control variable is changed to true and if conditional rendering applies 
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 150 ? setSticky(true) : setSticky(false);
        })
    }, [])

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="" srcset="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact us</button></li>
            </ul>
        </nav>
    )
}

export default Navbar