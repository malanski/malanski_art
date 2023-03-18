import './projects.scss'
import tattoo2 from '../../assets/tattoo2.jpg';
import muchaGif0 from '../../assets/muchaGif0.gif';
import muchaGif1 from '../../assets/muchaGif1.gif';
import muchaGif2 from '../../assets/muchaGif2.gif';
import muchaGifBlinc from '../../assets/muchaGifBlinc.gif';
import mucha0 from '../../assets/mucha0.png';
import tattoo0 from '../../assets/tattoo0.jpg';
import tattoo1 from '../../assets/tattoo1.jpg';

export const Projects = () => {
    return (
        <div className="tattoos">
            <h1>Ulisses Malanski's Portfolio</h1>
            <img
                src={tattoo1}
                title="Most of this illustration is made from vectors, shadows and background texture colors are made from raster images"
                alt='Illustration'
                oncontextMenu="return false">
            </img>

            <div className='grid-container'>

                <div className='making-off'>
                    <img
                        className='animation-gif'
                        src={tattoo2}
                        title=""
                        alt='Illustration'
                        oncontextMenu="return false">
                    </img>
                    <img
                        className='animation-gif-over'
                        src={muchaGif0}
                        title=""
                        alt='Illustration'
                        oncontextMenu="return false">
                    </img>

                    <div className='process-description'>
                        <p>Vector Shapes and Lines</p>
                        <ul>
                            <li>High complexity shapes.</li>
                            <li>Over than 30 layers.</li>
                            <li>Dynamic lines.</li>

                        </ul>
                    </div>

                </div>

                <div className='making-off'>
                    <img
                        className='animation-gif'
                        src={muchaGif1}
                        title=""
                        alt='Illustration'
                        oncontextMenu="return false">
                    </img>
                    <img
                        className='animation-gif-over'
                        src={muchaGif1}
                        title=""
                        alt='Illustration'
                        oncontextMenu="return false">
                    </img>

                    <div className='process-description'>
                        <p>Raster (Bitmap) Painting</p>
                        <ul>
                            <li>High resolution.</li>
                            <li>Refined coloring technics.</li>
                            <li>Photo realism.</li>

                        </ul>
                    </div>
                </div>

                <div className='making-off'>
                    <img
                        className='animation-gif'
                        src={muchaGif2}
                        title=""
                        alt='Illustration'
                        oncontextMenu="return false">
                    </img>
                    <img
                        className='animation-gif-over'
                        src={muchaGifBlinc}
                        title=""
                        alt='Illustration'
                        oncontextMenu="return false">
                    </img>

                    <div className='process-description'>

                        <p>Raster (Bitmap) Painting</p>
                        <ul>
                            <li>High resolution.</li>
                            <li>Refined coloring technics.</li>
                            <li>Photo realism.</li>

                        </ul>
                    </div>

                </div>

            </div>


        </div>
    )
}