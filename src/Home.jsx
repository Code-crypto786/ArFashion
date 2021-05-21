import React from 'react';
import {NavLink} from 'react-router-dom';
import web from '../src/images/image2.jpg'
import Comon from './Comon';
  const Home = () => {
        return(
            <>
                <Comon name="we are providing cultural and fashion designig"
                imgSrc={web}
                Visit="/service"
                btnName="get started"
                />
            </>
        )
    }
export default Home;