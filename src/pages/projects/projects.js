import './projects.scss'
import muchaGiff from '../../assets/muchaGiff.gif';
import muchaGif0 from '../../assets/muchaGif0.gif';
import mucha0 from '../../assets/mucha0.png';
import mucha1 from '../../assets/mucha1.png';

export const Projects = () => {
    return (

        <div className="projects">
            <h1>Ulisses Malanski's Portfolio</h1>

            <img
                src={mucha1}
                title="Most of this illustration is made from vectors, shadows and background texture colors are made from raster images"
                alt='Illustration'
                oncontextMenu="return false">
            </img>

            <div className='making-off'>
                <img
                    className='animation-gif'
                    src={muchaGiff}
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
                    <hr></hr>
                    <p>Raster (Bitmap) Painting</p>
                    <ul>
                        <li>High resolution.</li>
                        <li>Refined coloring technics.</li>
                        <li>Photo realism.</li>

                    </ul>
                </div>
 
            </div>
            
            <img 
                src={mucha0}
                title="Most of this illustration is made from vectors, only the shadows and the background landscape colors are made from high resolution raster images"
                alt='Illustration'
                >
            </img>
        </div>
    )
}