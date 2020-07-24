import React from "react";
import TarjetaFotografia from "./componentes/TarjetaFotografia";
import ListaFruta from "./componentes/ListaFruta";
import Graficas from "./componentes/Graficas";
import Formularios from "./componentes/Formularios";

const App = () => (
  <div>
    <Formularios />
    <ListaFruta />
    <TarjetaFotografia />
    <Graficas />
  </div>
);

export default App;
