import "./Mucha.scss"

import Typography from '@mui/material/Typography';
import bigmucha1 from '../../../assets/bigmucha1.png';
import gifmucha1 from '../../../assets/muchaGif2.gif';
import gifmucha from '../../../assets/muchaGifBlinc.gif';
import * as React from 'react';

export function Mucha() {

    return (
        <section className="project-page">
    
            <h2>
                Mucha style
            </h2>
            <h3>
                Vector based Art Nouveau drawing
            </h3>
            <hr></hr>

            {/* <img className='big-img'
                style={{
                    width: '100%',
                    // height: '90%',
                   
                }}
                src={bigmucha1}
                alt="Ulisses Malanski Illustration">
            </img> */}
            <hr></hr>
            <h3>Making off</h3>

            <img 
                style={{
                    width: '25%'
                }}
                src={gifmucha1}
                alt="Ulisses Malanski Illustration">
            </img>
            <br></br>
            <img 
                style={{
                    width: '25%'
                }}
                src={gifmucha}
                alt="Ulisses Malanski Illustration">
            </img>

        </section>
    )
}
