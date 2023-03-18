import "./Aside.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCircle, faPenAlt } from '@fortawesome/free-solid-svg-icons';

import { faBehance, faLinkedin, faInstagram, faDeviantart, faFacebook } from '@fortawesome/free-brands-svg-icons';
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

export function Aside() {
    return (
        <aside>
            <h1>Ulisses Malanski <br></br>
            <small>Illustrations Portfolio</small></h1>
            <CustomLink title="Digital & Traditional paintings" to="/">
                <span className="nav-links">
                    <FontAwesomeIcon icon={faCircle} className="icons" />
                    &ensp;Illustrations
                </span>
            </CustomLink>

            <CustomLink title="Tattoo design and other projects" to="/paintings">
                <span className="nav-links">
                    <FontAwesomeIcon icon={faCircle} className="icons" />
                    &ensp;Paintings
                </span>
            </CustomLink>

            <CustomLink title="Tattoo design and other projects" to="/portraits">
                <span className="nav-links">
                    <FontAwesomeIcon icon={faCircle} className="icons" />
                    &ensp;Portraits
                </span>
            </CustomLink>

            <CustomLink title="Tattoo design and other projects" to="/comics">
                <span className="nav-links">
                    <FontAwesomeIcon icon={faCircle} className="icons" />
                    &ensp;Comics
                </span>
            </CustomLink>
            
            <CustomLink title="My skills" to="/about">
                <span className="nav-links">
                   <FontAwesomeIcon icon={faCircle} className="icons" />
                   &ensp;About
                </span>
            </CustomLink>

            <CustomLink title="My skills" to="/shop">
                <span className="nav-links">
                    <FontAwesomeIcon icon={faCircle} className="icons" />
                    &ensp;Shop
                </span>
            </CustomLink>
        </aside>
    )
}
