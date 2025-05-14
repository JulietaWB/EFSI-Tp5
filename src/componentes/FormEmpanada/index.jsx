
import { useState } from "react";
import './formEmpanada.css';

const formEmpanada () {

    return (
        <>
            <label>Nombre completo</label>

            <select name="selectGusto" >
                <option value="carneSuave">Carne suave</option>
                <option value="jyq" selected>Jamón y queso</option>
                <option value="verdura">Verdura</option>
                <option value="humita">Humita</option>
                <option value="pollo">Pollo</option>
                <option value="caprese">Caprese</option>
            </select>

            <input type="number" id="cantEmpanada" name="cantEmpanada" min="1" max="10" />

            <button>Agregar sabor</button>

        </>
    );
};



  
  export default Formulario;