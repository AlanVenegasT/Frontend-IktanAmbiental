import {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import ArticuloBlog from "./components/ArticuloBlog";
import Pagina404 from "./components/Pag404";
import Politicas from "./pages/Politicas";
import AuthLayout from "./layouts/AuthLayout";
import { IndexLayout } from "./layouts/IndexLayout";
import Home from "./pages/Home";
import Loader from "./components/Loader";
import Hero2 from "./components/Hero2";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular una carga de 2 segundos
    setTimeout(() => setIsLoading(false), 4000);
  }, []);


  return (
    <>
     {isLoading ? (<Loader />) 
       : ( <>
        <BrowserRouter>
        <Routes>
          <Route element={<IndexLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="blog/:title" element={<ArticuloBlog />} />
            <Route path="*" element={<Pagina404 />} />
          </Route>
          <Route path="/hero2" element={<Hero2 />} />
        </Routes>
      </BrowserRouter>
        </>)}
        </>
  );
}

export default App;
