import React from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import MainLogo from './mainLogo';

import About from './about';


const Home = (props) => {
    return(
        <div className='body-wrapper'>
            <div className='section-main'>
                <div className='stars-wrapper'>
                    <div className='night'>
                        <div className='shooting_star'></div>
                        <div className='shooting_star'></div>
                        <div className='shooting_star'></div>
                    </div>
                </div>
                <div className='particle-js-wrapper'>
                <MainLogo />
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 250,
                                "density": {
                                    "enable": true,
                                    "value_area": 1500
                                }
                            },
                            "line_linked": {
                                "enable": false,
                                "opacity": 0.02
                            },
                            "move": {
                                "direction": "right",
                                "speed": 0.05
                            },
                            "size": {
                                "value": 1,
                                // "random": true,
                            },
                            "opacity": {
                                "anim": {
                                    "enable": true,
                                    "speed": 1,
                                    "opacity_min": 0.05
                                }
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onclick": {
                                    "enable": true,
                                    "mode": "push"
                                }
                            },
                            "modes": {
                                "push": {
                                    "particles_nb": 1
                                }
                            }
                        },
                        "retina_detect": true
                    }} />
                </div>
                <div className='section-main--logo'>

                </div>
                <div className='section-main--nav laptop'>
                    <ul>
                        <Link to='/events' className='link'>
                            <li>Events</li>
                        </Link>
                        <li>
                            Sponsors
                        </li>
                        <li>
                            Contact Us
                        </li>
                        <li>
                            Login
                        </li>
                    </ul>
                </div>
                <div className='section-main--title'>
                    <span className='section-main--title_letter'>A</span>
                    <span className='section-main--title_letter'>D</span>
                    <span className='section-main--title_letter'>H</span>
                    <span className='section-main--title_letter'>Y</span>
                    <span className='section-main--title_letter'>A</span>
                    <span className='section-main--title_letter'>A</span>
                    <span className='section-main--title_letter'>Y'</span>
                    <span className='section-main--title_letter'>1</span>
                    <span className='section-main--title_letter'>9</span>
                    <span className='section-main--title_letter-shadow'>A</span>
                </div>
                <div className='mountains'>
                    <div className='mountains-one'></div>
                    <div className='mountains-two'></div>
                    <div className='mountains-three'></div>
                </div>
                
            </div>
            <div className='section-about'>
                <About />
            </div>
        </div>
    );
}

export default Home;