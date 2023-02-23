import './nav.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faBrush, faCircle, faPaintBrush, faPen, faPenAlt, faPencil, faPenClip, faSquare, faTriangleCircleSquare } from '@fortawesome/free-solid-svg-icons';

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
            <CustomLink title="Digital & Traditional paintings" to="/">
                <span className="nav-links">
                    <FontAwesomeIcon icon={faCircle} className="icons" />
                    Illustrations
                    <FontAwesomeIcon icon={faSquare} className="iconsR" />
                </span>
            </CustomLink>

            <CustomLink title="Tattoo design and other projects" to="/projects">
                <span className="nav-links">
                    <FontAwesomeIcon icon={faArrowUp} className="icons" />
                    Design Projects
                    <FontAwesomeIcon icon={faPenAlt} className="iconsR" />
                </span>
            </CustomLink>

            <CustomLink title="My skills" to="/skills">
                <span className="nav-links">
                    <FontAwesomeIcon icon={faSquare} className="icons" />
                    Skills
                    <FontAwesomeIcon icon={faCircle} className="iconsR" />
                 </span>
            </CustomLink>
        </nav>
    )
}