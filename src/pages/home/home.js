import './home.scss'

import mucha0 from '../../assets/mucha0.png';
import mucha1 from '../../assets/mucha1.png';
import mucha2 from '../../assets/mucha2.png';
import mucha3 from '../../assets/mucha3.png';
import mucha4 from '../../assets/mucha4.png';
import tattoo0 from '../../assets/tattoo0.jpg';
import tattoo1 from '../../assets/tattoo1.jpg';
import tattoo2 from '../../assets/tattoo2.jpg';
import tattoo3 from '../../assets/tattoo3.jpg';
import painting0 from '../../assets/painting0.png';
import painting1 from '../../assets/painting1.png';
import painting3 from '../../assets/painting3.png';
import portrait0 from '../../assets/portrait0.png';
import portrait1 from '../../assets/portrait1.png';
import portrait3 from '../../assets/portrait3.png';


export const Home = () => {
    return (
        <div className="illustrations">
            
           
            <div className='grid-container'>

                <div className='image-card'>
                    <img src={mucha1}alt="Ulisses Malanski Illustration"></img>
                </div>
                <div className='image-card'>
                    <img src={mucha0} alt="Ulisses Malanski Illustration"></img>
                </div>
                <div className='image-card'>
                    <img src={mucha2} alt="Ulisses Malanski Illustration"></img>
                </div>


                <div className='image-card'>
                    <img src={mucha3} alt="Ulisses Malanski Illustration"></img>
                </div>
                <div className='image-card'>
                    <img src={tattoo2} alt="Ulisses Malanski Illustration"></img>
                </div>
                <div className='image-card'>
                    <img src={mucha4} alt="Ulisses Malanski Illustration"></img>
                </div>


                <div className='image-card'>
                    <img src={painting1}alt="Ulisses Malanski Illustration"></img>
                </div>
                <div className='image-card'>
                    <img src={painting0} alt="Ulisses Malanski Illustration"></img>
                </div>
                <div className='image-card'>
                    <img src={painting3} alt="Ulisses Malanski Illustration"></img>
                </div>


                <div className='image-card'>
                    <img src={portrait1}alt="Ulisses Malanski Illustration"></img>
                </div>
                <div className='image-card'>
                    <img src={portrait0} alt="Ulisses Malanski Illustration"></img>
                </div>
                <div className='image-card'>
                    <img src={portrait3} alt="Ulisses Malanski Illustration"></img>
                </div>



            </div>

            <div className='grid-container'>



            </div>


        </div>
    )
}