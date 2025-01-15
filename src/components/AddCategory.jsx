import { useState } from "react";
import PropTypes from "prop-types";

function AddCategory({ onCategory }) {
  //aki creamos un hook para obtener el valor del imput
  const [inputValue, setInputValue] = useState("");

  //aki creamos esta funcion para setear el valor del imput
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //aki creamos esta funcion para subir los datos
  //aparte de actulizar el hook de mi componente padre categorias
  //y lo seteamos como bacios para limpiar el imput
  const subirDatos = (e) => {
    e.preventDefault();
    const valor = inputValue.trim();
    if (valor.length <= 2) return;
    //onCategory((categories) => [inputValue, ...categories]);
    onCategory(valor);
    setInputValue("");
  };

  return (
    <form onSubmit={subirDatos}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
}

AddCategory.propTypes = {
  onCategory: PropTypes.func.isRequired,
};

export default AddCategory;
