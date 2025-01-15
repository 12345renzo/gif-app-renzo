import { useEffect,useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categorias) => {
  //para almacenar las imagenes
  const [imagen, setimagen] = useState([]);
  //para manejar la carga
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const newImagen = await getGifs(categorias);
    setimagen(newImagen);
    setIsLoading(false);
  };

  //dispara efectos secundarios
  useEffect(() => {
    getImages();
  }, []);

  return {
    imagen,
    isLoading,
  };
};
