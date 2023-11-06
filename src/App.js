import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./input.css";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Welcome />
              </MainLayout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/Products"
            element={
              <MainLayout>
                <Products />
              </MainLayout>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/Contact"
            element={
              <MainLayout>
                <Contact />
              </MainLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
