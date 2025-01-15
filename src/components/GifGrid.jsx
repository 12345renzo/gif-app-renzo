import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import "./../style.css";
import { useFetchGifs } from "../hooks/useFetchGifs";

function GifGrid({ categorias }) {
  
  //aki usamos un custom hook
  const { imagen , isLoading} = useFetchGifs(categorias); 

  return (
    <>
      <h3>{categorias}</h3>
      { isLoading === true ? <p>Cargando...</p> :
        <div className="card-grid">
          {imagen.map((image) => (
            <GifGridItem key={image.id} {...image} />
          ))}
        </div>
      }
    </>
  );
}

GifGrid.propTypes = {
  categorias: PropTypes.string.isRequired,
};

export default GifGrid;
