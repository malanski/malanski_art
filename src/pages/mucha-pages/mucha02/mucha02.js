import "../Mucha00.scss"

import bigmucha0 from '../../../assets/bigmucha2.png';
import gifmucha0 from '../../../assets/muchaGiff.gif';
import gifmucha from '../../../assets/muchaGif1.gif';
import gifmucha2 from '../../../assets/muchaGif0.gif';
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Mucha02 = () => {

  return (
    <section className="project-page">

      <h2>Mucha style 3</h2>
      <h3>Vector based Art Nouveau drawing</h3>

      <div className="project-navigation">
        <Link to="/mucha01"><Button><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>preview</Button></Link>
        <Link to="/painting00"><Button>next<FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></Button></Link>
      </div>

      <hr></hr>

      <img style={{
        width: '80%',
      }}
        src={bigmucha0}
        alt="Ulisses Malanski Illustration">
      </img>
      <hr></hr>

      <div className="project-navigation">
      <Link to="/mucha01"><Button><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>preview</Button></Link>
        <Link to="/painting00"><Button>next<FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></Button></Link>
      </div>

      <h3>Making off</h3>

      <div className="making-off">
        <img
          style={{
            width: '25%'
          }}
          src={gifmucha0}
          alt="Ulisses Malanski Illustration">
        </img>
        <img
          style={{
            width: '25%'
          }}
          src={gifmucha2}
          alt="Ulisses Malanski Illustration">
        </img>
        <div>
          <h4>Vector Drawing</h4>
          <ul>
            <li>High Scalability</li>
            <li>Customization</li>
            <li>Composition trough different elements</li>
          </ul>
        </div>


      </div>
      <div className="making-off">
        <div>
          <h4>Raster Painting</h4>
          <ul>
            <li>High resolution texture and shadows</li>
            <li>Photo realism</li>
            <li>Art Nouveau </li>
          </ul>
        </div>
        <img
          style={{
            width: '25%'
          }}
          src={gifmucha}
          alt="Ulisses Malanski Illustration">
        </img>
       
      </div>
      <br></br>

      <div className="project-navigation">
      <Link to="/mucha01"><Button><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>preview</Button></Link>
        <Link to="/painting00"><Button>next<FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></Button></Link>
      </div>

    </section>
  )
}
