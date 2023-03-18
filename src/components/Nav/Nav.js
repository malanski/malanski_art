import './nav.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCircle, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { faBehance, faInstagram, faDeviantart, faFacebook } from '@fortawesome/free-brands-svg-icons';

import {
    Link,
    useMatch,
    useResolvedPath
} from 'react-router-dom';

// Cutomization for Link Actions
function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true })

    return (
        <Link className={match ? "active" : "normal-link"} to={to} {...props}>{children}</Link>
    );
}

export function Nav() {
    return (
        <nav>
            <h1>
                Ulisses Malanski <br></br>
                <small>Illustrations Portfolio</small>
            </h1>

            <div className='navigation'>
                <CustomLink title="Digital & Traditional paintings" to="/">
                    <span className="nav-links">
                        Illustrations
                    </span>
                </CustomLink>

                {/* <CustomLink title="Tattoo design and other projects" to="/projects">
                    <span className="nav-links">
                        Available
                    </span>
                </CustomLink> */}

                {/* <CustomLink title="My skills" to="/shop">
                    <span className="nav-links">
                        Shop
                    </span>
                </CustomLink> */}

                <CustomLink title="lets talk" to="/contact">
                    <span className="nav-links">
                       Contact
                    </span>
                </CustomLink>

                <a title="instagram" target="_blank" href="https://www.instagram.com/ulissesmalanski_art/">
                    <span className="nav-links">
                    <FontAwesomeIcon className='iconeLink' icon={faInstagram} /><br/>
                    </span>
                </a>

            </div>
        </nav>
    )
}