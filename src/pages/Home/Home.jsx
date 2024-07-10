import "./Home.css";
import {
  FaBolt,
  FaWrench,
  FaHammer,
  FaPaintRoller,
  FaTree,
} from "react-icons/fa";
import { GiHandSaw } from "react-icons/gi";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1 className="title_home">Minga</h1>
      <h3 className="slogan">
        No hay problema que no tenga <span>quién</span> lo solucione
      </h3>
      <div className="container_offered_categories">
        <h3 className="title_category">¿Qué servicio necesita?</h3>
        <hr className="divider" />
        <div className="offered_categories">
          <Link to="/categoria/electricidad" className="offered_category">
            <FaBolt size={40} className="icon" />
            <div className="underline"></div>
            <h4>Electricidad</h4>
          </Link>
          <Link to="/categoria/gasfiteria" className="offered_category">
            <FaWrench size={40} className="icon" />
            <div className="underline"></div>
            <h4>Gasfitería</h4>
          </Link>
          <Link to="/categoria/construccion" className="offered_category">
            <FaHammer size={40} className="icon" />
            <div className="underline"></div>
            <h4>Construcción</h4>
          </Link>
          <Link to="/categoria/carpinteria" className="offered_category">
            <GiHandSaw size={40} className="icon" />
            <div className="underline"></div>
            <h4>Carpintería</h4>
          </Link>
          <Link to="/categoria/albanileria" className="offered_category">
            <FaHammer size={40} className="icon" />
            <div className="underline"></div>
            <h4>Albañilería</h4>
          </Link>
          <Link to="/categoria/pintura" className="offered_category">
            <FaPaintRoller size={40} className="icon" />
            <div className="underline"></div>
            <h4>Pintura</h4>
          </Link>
          <Link to="/categoria/jardineria" className="offered_category">
            <FaTree size={40} className="icon" />
            <div className="underline"></div>
            <h4>Jardinería</h4>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
