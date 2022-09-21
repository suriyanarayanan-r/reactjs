import React, { Component } from 'react';
import './project.css';

class Project extends Component {
    render() {
        return (
            <div className='project_container'>
                <h2>Projects Undertaken</h2>
                <div className='project_grid_column'>
                    <div className='project'>
                        <div className='project1'>
                            <h4>Optical Management Solution</h4>
                            <p>This is a Desktop Application(Windows) created for the purpose to store and
                                manage the patient's eye examination details in an easy way.
                                The records are properly store using sqlite and
                                the details of each patient can be downloaded as PDF with predefined design.</p>
                        </div>
                    </div>
                    <div className='project'>
                        <div className='project2'>
                            <h4>Covid-19 Social Distancing Monitor</h4>
                            <p>This is a Python Monitoring Tool(uses Faster R-CNN) created for the purpose of checking
                                the people weather they are following the
                                social distancing in public places
                                using object detection algorithm and alerting them if they fail to follow.
                                Faster R-CNN is implemented using Facebook's Detectron.
                                This tool is created using Transfer Learning Technique.
                            </p>
                        </div>
                    </div>
                    {/* <div className='project'>
                        <div className='project3'>To be added</div>
                    </div>
                    <div className='project'>
                        <div className='project4'>To be added</div>
                    </div> */}

                </div>
            </div>
        );
    }
}

export default Project;