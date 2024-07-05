import "./Categoria.css";
import ResultadoCategoria from "../../components/Cards/ResultadoCategoria/ResultadoCategoria";
const professionals = [
  {
    id: 1,
    nombre: "Juan",
    apellido_paterno: "Pérez",
    apellido_materno: "González",
    disponibilidad: true,
    puntuacion: 4,
    categorias: ["Carpintería", "Electricidad"],
    comunas: ["Maípu", "El Bosque"],
  },
  {
    id: 2,
    nombre: "María",
    apellido_paterno: "González",
    apellido_materno: "Pérez",
    disponibilidad: false,
    puntuacion: 3,
    categorias: ["Gasfitería", "Carpintería"],
    comunas: ["La Reina", "Ñuñoa"],
  },
  {
    id: 3,
    nombre: "José",
    apellido_paterno: "González",
    apellido_materno: "de Bustamante",
    disponibilidad: true,
    puntuacion: 5,
    categorias: ["Electricidad", "Gasfitería"],
    comunas: ["Huechuraba", "Quilicura"],
  },
];

function Categoria({ categoria_nombre }) {
  return (
    <main className="main">
      <div className="title_search_filter">
        <h1>{categoria_nombre}</h1>
        <div className="search_filter">
          <div className="buscador">
            <input
              id="input_buscar_profesional"
              type="text"
              placeholder={`Buscar profesional de ${categoria_nombre}`}
            />
            <button className="btn btn_text">Buscar</button>
          </div>
          <div className="filtros">
            <select className="filtro_busqueda" name="comuna" id="comuna">
              <option value="0">Selecciona una comuna</option>
              <option value="1">Maipú</option>
              <option value="2">El Bosque</option>
              <option value="3">La Reina</option>
              <option value="4">Ñuñoa</option>
              <option value="5">Huechuraba</option>
              <option value="6">Quilicura</option>
            </select>
            <select
              className="filtro_busqueda"
              name="puntuacion"
              id="puntuacion"
            >
              <option value="0">Selecciona una puntuación</option>
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
