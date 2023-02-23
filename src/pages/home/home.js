import './home.scss'
import muchaGiff from '../../assets/muchaGiff.gif';
import muchaGif0 from '../../assets/muchaGif0.gif';
import mucha0 from '../../assets/mucha0.png';
import mucha1 from '../../assets/mucha1.png';

export const Home = () => {
    return (

        <div className="illustrations">
            <h1>Ulisses Malanski's Portfolio</h1>



            <img
                src={mucha1}
                title="GANÇO AQUI VOU ESCREVER UMAS COIAS"
                alt='Illustration'
                oncontextMenu="return false">
            </img>

            <div className='making-off'>
                <img
                    className='animation-gif'
                    src={muchaGiff}
                    title="GANÇO AQUI VOU ESCREVER UMAS COIAS"
                    alt='Illustration'
                    oncontextMenu="return false">
                </img>
                <img
                    className='animation-gif-over'
                    src={muchaGif0}
                    title="GANÇO AQUI VOU ESCREVER UMAS COIAS"
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
                title="GANÇO AQUI VOU ESCREVER UMAS COIAS"
                alt='Illustration'
                >
            </img>
        </div>
    )
}