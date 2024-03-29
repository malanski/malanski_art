import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faInstagram, faDeviantart, faFacebook } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <footer>
             <div className='social-links'>
                <hr></hr>
                <br></br>
                <a target="_blank" rel="noreferrer"
                    title='Behance profile'
                    href="https://www.behance.net/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faBehance} /><br/>
                    <p className='social-link-name' >Behance</p>
                </a>

                <a target="_blank" rel="noreferrer"
                    title='Instagram'
                    href="https://www.instagram.com/ulissesmalanski_art/">
                    <FontAwesomeIcon className='iconeLink' icon={faInstagram} /><br/>
                    <p className='social-link-name' >Instagram</p>
                </a>

                <a target="_blank" rel="noreferrer"
                    title='Deviant Art'
                    href="https://www.deviantart.com/ulissesmalanski">
                    <FontAwesomeIcon className='iconeLink' icon={faDeviantart} /><br/>
                    <p className='social-link-name' >Deviant Art</p>
                </a>

            </div>
        </footer>
    )
}
