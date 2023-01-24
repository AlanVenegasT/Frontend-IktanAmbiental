import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import { IndexLayout } from "./layouts/IndexLayout";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IndexLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
