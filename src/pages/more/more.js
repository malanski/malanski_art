import './popculture.scss'

import popcultture0 from '../../assets/fanart1.png';
import popcultture1 from '../../assets/fanart4.png';
import popcultture2 from '../../assets/fanart0.png';

import painting0 from '../../assets/painting0.png';
import painting1 from '../../assets/painting1.png';
import painting3 from '../../assets/painting3.png';


import mucha3 from '../../assets/mucha3.png';
import mucha4 from '../../assets/mucha4.png';
// import tattoo0 from '../../assets/tattoo0.jpg';
// import tattoo1 from '../../assets/tattoo1.jpg';
import tattoo2 from '../../assets/tattoo2.jpg';
// import tattoo3 from '../../assets/tattoo3.jpg';

import portrait0 from '../../assets/portrait4.png';
import portrait1 from '../../assets/painting5.png';
import portrait3 from '../../assets/portrait5.png';
import { Link } from 'react-router-dom';


export const More = () => {

    return (
        <div className="illustrations">

            <div className='grid-container' >

                <div className='image-card'>
                    <img src={mucha3} alt="Ulisses Malanski Illustration"></img>
                </div>
                <div className='image-card'>
                    <img src={tattoo2} alt="Ulisses Malanski Illustration"></img>
                </div>
                <div className='image-card'>
                    <img src={mucha4} alt="Ulisses Malanski Illustration"></img>
                </div> 
                

                <div className='image-card' to="/popcultture00">
                    <img src={popcultture1} alt="Ulisses Malanski Illustration"></img>
                </div>

                <div className='image-card' to="/popcultture01">
                    <img src={popcultture0} alt="Ulisses Malanski Illustration"></img>
                </div>
                
                <div className='image-card' to="/popcultture02">
                    <img src={popcultture2} alt="Ulisses Malanski Illustration"></img>
                </div>




                <div className='image-card' to="/portrait00">
                    <img src={portrait0} alt="Ulisses Malanski Illustration"></img>
                </div>

                <div className='image-card' to="/portrait01">
                    <img src={portrait1} alt="Ulisses Malanski Illustration"></img>
                </div>

                <div className='image-card' to="/portrait02">
                    <img src={portrait3} alt="Ulisses Malanski Illustration"></img>
                </div>
            </div>

            <div className='grid-container'>



            </div>


        </div>
    )
}