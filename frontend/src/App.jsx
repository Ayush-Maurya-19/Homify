import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import Browse from "./components/Browser";
import ManageUser from "./components/ManageUser";
import AddRentSpace from "./components/AddRentSpace";
import ManageRentSpaces from "./components/ManageRentSpaces";
import SpaceDetails from "./components/SpaceDetails";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./AppContext";
import UserAuth from "./UserAuth";
import UpdateUser from "./components/UpdateUser";
import AllProducts from "./components/AllProducts";
import EditAllProducts from "./components/EditAllProducts";


function App() {
  return (
    <div>
      <Toaster position="top right" />
      <AnimatePresence mode="popLayout">
        <BrowserRouter>
          <AppProvider >
            <Navbar />
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Login />} path="/login" />
              <Route element={<Signup />} path="/signup" />
              <Route element={<AddRentSpace />} path="/addrentspace" />
              <Route element={<Browse />} path="/browser" />
              <Route element={<ManageRentSpaces />} path="/managerentspaces" />
              <Route element={<SpaceDetails />} path="/spacedetails/ :id" />
              <Route element={<UserAuth> <ManageUser /> </UserAuth>} path="/manageuser" />
              <Route element={<UpdateUser />} path="/updateuser/:id" />
              <Route element={<NotFound />} path="*" />
              <Route element={<AllProducts />} path="/allproducts" />
              <Route element={<EditAllProducts />} path="/editallproducts/:id" />





            </Routes>
          </AppProvider>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
