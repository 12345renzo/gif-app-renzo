import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function GifExpertApp() {
  const [categories, setCategories] = useState(["Valorant"]);

  const onAddCategory = (categoria) => {
    if (categories.includes(categoria)) return;

    setCategories([categoria, ...categories]);
  };

  return (
    <div>
      {/*Nessitamos un titulo */}
      <h1>Titulo de los Gift</h1>

      {/*ESTE MANDA EL HOOK PARA AGREGAR AL ARREGLO*/}
      <AddCategory
        /*onCategory={setCategories}*/
        onCategory={(event) => onAddCategory(event)}
      />

      {/*aca se va a mostrar el grid de los gif */}
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} categorias={category} />
        ))}
      </ol>
      
      {/*el gif */}
    </div>
  );
}

export default GifExpertApp;
