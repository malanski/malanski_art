import "./Footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faLinkedin, faInstagram, faDeviantart, faFacebook } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
    return (
        <footer>
             <div className='social-links'>
                <hr></hr>
                <a target="_blank" rel="noreferrer"
                    title='Github'
                    href="https://github.com/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faBehance} /><br/>
                    <p className='social-link-name' >Behance</p>
                </a>

                <a target="_blank" rel="noreferrer"
                    title='Linkedin'
                    href="https://www.linkedin.com/in/ulisses-malanski/">
                    <FontAwesomeIcon className='iconeLink' icon={faLinkedin} /><br/>
                    <p className='social-link-name' >Linedin</p>
                </a>

                <a target="_blank" rel="noreferrer"
                    title='Github'
                    href="https://www.instagram.com/ulissesmalanski_art/">
                    <FontAwesomeIcon className='iconeLink' icon={faInstagram} /><br/>
                    <p className='social-link-name' >Instagram</p>
                </a>

                <a target="_blank" rel="noreferrer"
                    title='Behance'
                    href="https://www.behance.net/malanski">
                    <FontAwesomeIcon className='iconeLink' icon={faDeviantart} /><br/>
                    <p className='social-link-name' >Deviant Art</p>
                </a>

            </div>
        </footer>
    )
}
