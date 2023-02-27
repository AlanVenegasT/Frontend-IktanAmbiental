import {useEffect, useState} from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import ArticuloBlog from "./components/ArticuloBlog";
import Pagina404 from "./components/Pag404";
import Politicas from "./pages/Politicas";
import AuthLayout from "./layouts/AuthLayout";
import { IndexLayout } from "./layouts/IndexLayout";
import Home from "./pages/Home";
import Loader from "./components/Loader";


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular una carga de 2 segundos
    setTimeout(() => setIsLoading(false), 2000);
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
        </Routes>
      </BrowserRouter>
        </>)}
        </>
  );
}

export default App;
