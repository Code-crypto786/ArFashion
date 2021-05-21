import React from 'react';
import {NavLink} from 'react-router-dom';
import web from '../src/images/image1.jpg'
import Comon from './Comon';
  const About = () => {
        return(
            <>
                <Comon name="Contact us for More on demand Dressing Requirments and much more"
                imgSrc={web}
                Visit="/contact" 
                btnName="Contact us"
                />
            </>
        )
    }
export default About;