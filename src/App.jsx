import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import ArticuloBlog from "./components/ArticuloBlog";
import Pagina404 from "./components/Pag404";
import Politicas from "./pages/Politicas";
import AuthLayout from "./layouts/AuthLayout";
import { IndexLayout } from "./layouts/IndexLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IndexLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="blog/:title" element={<ArticuloBlog />} />
          <Route path="*" element={<Pagina404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
