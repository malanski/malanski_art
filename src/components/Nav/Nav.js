import './nav.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCircle, faPenAlt } from '@fortawesome/free-solid-svg-icons';

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
                    Illustrations&ensp;
                    <FontAwesomeIcon icon={faCircle} className="icons" />
                </span>
            </CustomLink>

            <CustomLink title="Tattoo design and other projects" to="/projects">
                <span className="nav-links">
                    <FontAwesomeIcon icon={faCircle} className="icons" />
                    &ensp;Projects&ensp;
                    <FontAwesomeIcon icon={faCircle} className="icons" />
                </span>
            </CustomLink>

            <CustomLink title="My skills" to="/skills">
                <span className="nav-links">
                    <FontAwesomeIcon icon={faCircle} className="icons" />
                    &ensp;Skills
                </span>
            </CustomLink>
        </nav>
    )
}