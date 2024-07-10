import "./Categoria.css";
import ResultadoCategoria from "../../components/Cards/ResultadoCategoria/ResultadoCategoria";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:8080/api/colaborador/categoria",
});

const categoriasConTilde = {
  electricidad: "Electricidad",
  gasfiteria: "Gasfitería",
  construccion: "Construcción",
  carpinteria: "Carpintería",
  albanileria: "Albañilería",
  pintura: "Pintura",
  jardineria: "Jardinería",
};

function capitalizeAndTildeCategory(category) {
  const lowerCaseCategory = category.toLowerCase();
  return categoriasConTilde[lowerCaseCategory] || lowerCaseCategory;
}

function Categoria() {
  const { nombre } = useParams();
  const nombreConTilde = capitalizeAndTildeCategory(nombre);

  const [professionals, setProfessionals] = useState([]);
  const [filters, setFilters] = useState({ comuna: "", puntuacion: "" });
  const [comunas, setComunas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/comunas")
      .then((response) => {
        setComunas(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comunas:", error);
      });
  }, []);

  useEffect(() => {
    const { comuna, puntuacion } = filters;
    let url = `/${nombre}?disponibilidad=1`;
    if (comuna) url += `&comuna=${comuna}`;
    if (puntuacion) url += `&puntuacion=${puntuacion}`;

    client
      .get(url)
      .then((response) => {
        setProfessionals(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [nombre, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  return (
    <main className="main">
      <div className="title_search_filter">
        <h1>{nombreConTilde}</h1>
        <div className="search_filter">
          <div className="filtros">
            <select
              className="filtro_busqueda"
              name="comuna"
              id="comuna"
              onChange={handleFilterChange}
            >
              <option value="">Selecciona una comuna</option>
              {comunas.map((comuna) => (
                <option key={comuna.id} value={comuna.nombre}>
                  {comuna.nombre}
                </option>
              ))}
            </select>
            <select
              className="filtro_busqueda"
              name="puntuacion"
              id="puntuacion"
              onChange={handleFilterChange}
            >
              <option value="">Selecciona una puntuación</option>
              <option value="1">1 estrella</option>
              <option value="2">2 estrellas</option>
              <option value="3">3 estrellas</option>
              <option value="4">4 estrellas</option>
              <option value="5">5 estrellas</option>
            </select>
          </div>
        </div>
      </div>
      <div className="cards_professionals">
        {professionals.map((professional) => (
          <ResultadoCategoria
            key={professional.id}
            professional={professional}
          />
        ))}
      </div>
    </main>
  );
}

export default Categoria;
