import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Register } from "./pages";
import { ImagesProvider } from "./context/images";
import { AuthProvider } from "./context/auth";
import { PrivateRoute } from "./components";
function App() {
  return (
    <React.StrictMode>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<PrivateRoute />}>
              <Route
                exact
                path="/"
                element={
                  <div className="container">
                    <ImagesProvider>
                      <Home />
                    </ImagesProvider>
                  </div>
                }
              />
            </Route>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
          </Routes>
        </AuthProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
