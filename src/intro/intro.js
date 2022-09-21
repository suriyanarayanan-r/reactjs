import React, { Component } from 'react';
import suriya_img from './suriya water bg final.jpg';
import './intro.css';

class Intro extends Component {
    render() {
        return (
            <div className='intro_container'>
                <div className='intro_grid_column'>
                    <div>
                        <p><h1>Hi You,</h1>
                            I'm a Technology Enthusiast who is willing to
                            explore new technologies that emerge in this world
                            and interested in Editing and more.
                        </p>
                    </div>
                    <div>
                        <img className='profile_pic' src={suriya_img} alt='profile' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Intro;