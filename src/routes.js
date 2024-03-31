import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao";
import Post from "componentes/Post";
import NaoEncontrado from "componentes/NaoEncontrado";


function AppRouter() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>

        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/sobremim" element={<SobreMim />} />
          <Route index element={<Inicio />} />
        </Route>

        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>

      <Rodape />

    </BrowserRouter>
  );
}

export default AppRouter;
