import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../components/pages/home/home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
