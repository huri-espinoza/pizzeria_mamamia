import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Pizza from "./pages/Pizza";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import { useContext } from "react";
import { SessionContext } from "./context/SessionContext";

function App() {;
  const {token} = useContext(SessionContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/login" element={!token ? <Login />: <Navigate to="/" />} />
        <Route path="/register" element={!token ? <Register />: <Navigate to="/" />} />
        <Route path="/profile" element={token ? <Profile />: <Navigate to="/login" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
