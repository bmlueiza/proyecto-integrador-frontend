import "./Home.css";
import {
  FaBolt,
  FaWrench,
  FaHammer,
  FaPaintRoller,
  FaTree,
} from "react-icons/fa";
import { GiHandSaw } from "react-icons/gi";

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
          <div className="offered_category">
            <FaBolt size={40} className="icon" />
            <div className="underline"></div>
            <h4>Electricidad</h4>
          </div>
          <div className="offered_category">
            <FaWrench size={40} className="icon" />
            <div className="underline"></div>
            <h4>Gasfitería</h4>
          </div>
          <div className="offered_category">
            <FaHammer size={40} className="icon" />
            <div className="underline"></div>
            <h4>Construcción</h4>
          </div>
          <div className="offered_category">
            <GiHandSaw size={40} className="icon" />
            <div className="underline"></div>
            <h4>Carpintería</h4>
          </div>
          <div className="offered_category">
            <FaHammer size={40} className="icon" />
            <div className="underline"></div>
            <h4>Albañilería</h4>
          </div>
          <div className="offered_category">
            <FaPaintRoller size={40} className="icon" />
            <div className="underline"></div>
            <h4>Pintura</h4>
          </div>
          <div className="offered_category">
            <FaTree size={40} className="icon" />
            <div className="underline"></div>
            <h4>Jardinería</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
