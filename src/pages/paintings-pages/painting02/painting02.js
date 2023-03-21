import "../Paintings00.scss"

import bigImage from '../../../assets/bigpainting3.png';

import gifmucha0 from '../../../assets/muchaGiff.gif';
import gifmucha from '../../../assets/muchaGif1.gif';
import gifmucha2 from '../../../assets/muchaGif0.gif';
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const Painting02 = () => {

  return (
    <section className="project-page">

      <h2>Painting 3</h2>
      <h3>Traditional drawing</h3>

      <div className="project-navigation">
        <Link to="/painting01"><Button><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>preview</Button></Link>
        <Link to="/portrait00"><Button>next<FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></Button></Link>
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
      <Link to="/painting01"><Button><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>preview</Button></Link>
        <Link to="/portrait00"><Button>next<FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></Button></Link>
      </div>

      <h3>Making off</h3>

      <div className="making-off">
        <img
          style={{
            width: '25%'
          }}
          src={gifmucha2}
          alt="Ulisses Malanski Illustration">
        </img>
        <div>
          <h4>Drawing</h4>
          <ul>
            <li>A3: 297 x 420 mm High resolution </li>
            <li>Nankin inking</li>
            <li>Graffiti shading</li>
          </ul>
        </div>


      </div>
      <div className="making-off">
        <div>
          <h4>Painting</h4>
          <ul>
            <li>Watercolor pencil and markers painting</li>
            <li>Photo realism</li>
            <li>Japanese Tattoo mixed with Art Nouveau </li>
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
      <Link to="/painting01"><Button><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon>preview</Button></Link>
        <Link to="/portrait00"><Button>next<FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon></Button></Link>
      </div>

    </section>
  )
}
