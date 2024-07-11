import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({ className }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const navigate = useNavigate();

  const handleItemClick = (id) => {
    navigate(`/perfil/${id}`);
  };
  const SearchResults = ({ searchResults }) => {};
  const handleInputChange = (event) => {
    /* setSearchTerm(event.target.value);  */
    const value = event.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setSearchResults([]);
    }
  };

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      setSearchResults([]); // CAMBIADO ESTO
      return; // Si el término de búsqueda está vacío, no hagas nada
      // ACA LOGICA DE LA BUSQUEDA, LLAMADA A LA API, ETC
      /*  console.log("Searching for:", searchTerm); */
    }
    try {
      const response = await fetch(
        `http://localhost:8080/api/colaborador/nombreLike?nombre=${encodeURIComponent(
          searchTerm
        )}`
      );
      if (!response.ok) {
        throw new Error("Error en la solicitud de búsqueda");
      }
      const data = await response.json();
      /* console.log("Resultados de la búsqueda:", data); */
      setSearchResults(data); // Guarda los resultados de la búsqueda en el estado
      // Aquí puedes hacer algo con los datos, como actualizar el estado o mostrar los resultados en la UI
    } catch (error) {
      console.error("Error al realizar la búsqueda:", error);
    }
  };

  return (
    <Box className={`search-bar ${className}`}>
      <Search className="search-text">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Buscar..."
          inputProps={{ "aria-label": "search" }}
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </Search>
      {searchResults.length > 0 && (
        <MenuList className="search_results">
          {searchResults.map((result, index) => (
            <MenuItem
              className="search_result_item"
              key={index}
              onClick={() => handleItemClick(result.id)}
            >
              {result.nombre} {result.apellidoPaterno}
              {/* Asegúrate de que esto coincida con la estructura de tus datos */}
            </MenuItem>
          ))}
        </MenuList>
      )}

      {/* a */}
    </Box>
  );
}
