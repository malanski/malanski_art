import './home.scss'

import mucha0 from '../../assets/mucha0.png';
import mucha1 from '../../assets/mucha1.png';
import mucha2 from '../../assets/mucha2.png';

import painting0 from '../../assets/painting0.png';
import painting1 from '../../assets/painting1.png';
import painting3 from '../../assets/painting3.png';


import portrait0 from '../../assets/portrait0.png';
import portrait1 from '../../assets/portrait1.png';
import portrait3 from '../../assets/portrait3.png';
import { Link } from 'react-router-dom';



export const Home = () => {

    return (
        <div className="home">

            <div className='grid-container' >


                <Link className='image-card' to="/mucha00">
                    <img src={mucha1} alt="Ulisses Malanski Illustration"></img>
                    <p className='cart-text'>Advertising</p>
                </Link>

                <Link className='image-card' to="/mucha01">
                    <img src={mucha0} alt="Ulisses Malanski Illustration"></img>
                    <p className='cart-text'>Posters</p>
                </Link>

                <Link className='image-card' to="/mucha02">
                    <img src={mucha2} alt="Ulisses Malanski Illustration"></img>
                    <p className='cart-text'>Branding</p>
                </Link>


                <Link className='image-card' to="/painting00">
                    <img src={painting1} alt="Ulisses Malanski Illustration"></img>
                </Link>

                <Link className='image-card' to="/painting01">
                    <img src={painting0} alt="Ulisses Malanski Illustration"></img>
                </Link>

                <Link className='image-card' to="/painting02">
                    <img src={painting3} alt="Ulisses Malanski Illustration"></img>
                </Link>


                <Link className='image-card' to="/portrait00">
                    <img src={portrait0} alt="Ulisses Malanski Illustration"></img>
                </Link>

                <Link className='image-card' to="/portrait01">
                    <img src={portrait1} alt="Ulisses Malanski Illustration"></img>
                </Link>

                <Link className='image-card' to="/portrait02">
                    <img src={portrait3} alt="Ulisses Malanski Illustration"></img>
                </Link>
            </div>

            <div className='grid-container'>



            </div>


        </div>
    )
}