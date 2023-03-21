import "../Portraits00.scss"

import bigImage from '../../../assets/bigportrait3.png';

import gifmucha0 from '../../../assets/muchaGiff.gif';
import gifmucha from '../../../assets/muchaGif1.gif';
import gifmucha2 from '../../../assets/muchaGif0.gif';
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Portrait02 = () => {

  return (
    <section className="project-page">

      <h2>Portrait 3</h2>
      <h3>Traditional drawing</h3>

      <div className="project-navigation">
        <Link to="/portrait01"><Button><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>preview</Button></Link>
        <Link to="/"><Button>next<FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></Button></Link>
      </div>

      <hr></hr>

      <img style={{
        width: '80%',
      }}
        src={bigImage}
        alt="Ulisses Malanski Illustration">
      </img>
      <hr></hr>

      <div className="project-navigation">
        <Link to="/portrait01"><Button><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>preview</Button></Link>
        <Link to="/"><Button>next<FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></Button></Link>
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

        <div>
          <h4>Traditional Drawing</h4>
          <ul>
            <li>A3: 297 x 420 mm High resolution </li>
            <li>Graffiti drawing</li>
            <li>I can draw any picture your project needs</li>
          </ul>
        </div>


      </div>
      <div className="making-off">
        <div>
          <h4>Shading and Painting</h4>
          <ul>
            <li>High resolution texture and shadows</li>
            <li>Photo realism</li>
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
        <Link to="/portrait01"><Button><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>preview</Button></Link>
        <Link to="/"><Button>next<FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></Button></Link>
      </div>

    </section>
  )
}
