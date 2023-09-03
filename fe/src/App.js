import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
            {/* da qui tutte le Routes saranno ProtectedRoutes */}
            <Route exact path="/homepage" element={<HomePage />} />  
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
