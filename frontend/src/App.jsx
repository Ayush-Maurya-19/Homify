import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AddRentSpace from "./components/AddRentSpace";
import ManageRentSpaces from "./components/ManageRentSpaces";
import SpaceDetails from "./components/SpaceDetails";
import BrowserRentSpace from "./components/BrowserRentSpace";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
          <Route element={<AddRentSpace />} path="/addrentspace" />
          <Route element={<BrowserRentSpace />} path="/browserrentspace" />
          <Route element={<ManageRentSpaces />} path="/managerentspaces" />
          <Route element={<SpaceDetails />} path="/spacedetails" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
