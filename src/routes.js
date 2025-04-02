import LayoutPage from "components/layoutPage";
import Favoritos from "pages/Favotiros";
import Inicio from "pages/Inicio";
import NaoEncontrada from "pages/NaoEncontrada";
import Player from "pages/Player";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <LayoutPage>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/:id" element={<Player />} />
          <Route path="/not" element={<NaoEncontrada />} />
        </Routes>
      </LayoutPage>
    </BrowserRouter>
  );
}
export default AppRoutes;
