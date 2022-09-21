import React, { Component } from 'react';
import './footer.css';

var twitter_link = 'https://twitter.com/suriyaravi_';
var linkedin_link = 'https://www.linkedin.com/in/suriya-narayanan-24b291159';
var mail_link = 'mailto:suriyanarayananit@gmail.com';
var html_page_link = 'https://suriyanarayanan-r.github.io/';
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className='footer_grid'>
                    <div className='grid1'>Note: This is a simple reactjs app and
                        to view my basic HTML page <a href={html_page_link} target='blank_'>click here.</a>
                    </div>
                    <div className='grid2'>
                        <div class="social">
                            <a href={twitter_link} target="blank_">
                                <i class="fa fa-twitter icon_size"></i>
                            </a>
                        </div>
                        <div class="social">
                            <a href={linkedin_link} target="blank_">
                                <i class="fa fa-linkedin icon_size"></i>
                            </a>
                        </div>
                        <div class="social">
                            <a href={mail_link} target="blank_">
                                <i class="fa fa-envelope icon_size"></i>
                            </a>
                        </div>
                        <p class="help_note">(click the above icon to connect)</p>
                    </div>
                    <div className='grid3'>© Suriyanarayanan Ravi</div>
                </div>
            </footer >

        );
    }
}

export default Footer;