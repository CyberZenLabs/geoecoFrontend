import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./page-css/sidenav.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
<<<<<<< HEAD
import PersonalData from "./pages/PersonalData";
=======
import NavBar from "./components/NavBar";
import {Cart} from "./pages/Cart";
>>>>>>> 93474f783d67f2925ab2c268317f2b27c1a8aa8c
import Mooo from "./pages/AdminLogin";
import ProductDetail from "./pages/ProductDetail";
import AdminDashboard from "./pages/AdminDashboard";
import Registration from "./pages/Registration";
import SignIn from "./pages/SignIn";
import StoreFront from "./pages/StoreFront";

//components
import NavBar from "./components/NavBar";
// import AdminForm from "./pages/AdminForm";
import Footer from "./components/Footer";
import MapBiding from "./pages/MapBinding";
import Catalog from "./components/Catalog";
<<<<<<< HEAD
import ReviewForm from "./components/ReviewForm";
import Modal from "./components/Modal";
import EcoModal from "./components/Modal";


import AppContext, { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";
//notifications 
import { ToastContainer } from "react-toastify";

=======
import AppContext, { AppProvider } from "./context/AppContext";
import SignIn from "./pages/SignIn";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import StoreFront from "./pages/StoreFront";
>>>>>>> 93474f783d67f2925ab2c268317f2b27c1a8aa8c
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <ToastContainer position="top-left" autoClose={2000} />
    <React.StrictMode>
      <AppProvider>
        <AuthProvider>
          <BrowserRouter>
            {/* Same as */}
            {/* <EcoModal></EcoModal> */}
            <div id="overlay-nav"></div>
            <NavBar />
            <Catalog />
            <Routes>
              <Route index element={<Home />} />
              <Route path="personaldata" element={<PersonalData />} />
              <Route path="admin-dashboard" element={<AdminDashboard />} />
              <Route path="store/:id" element={<StoreFront />} />
              {/*<Route*/}
              {/*  path="admin-dashboard/admin-form"*/}
              {/*  element={<AdminForm />}*/}
              {/*/>*/}
              <Route path="registration" element={<Registration />} />
              <Route path="map-binding" element={<MapBiding />} />
              <Route path="signin" element={<SignIn />} />
              <Route path="admin-portal" element={<Mooo />} />
              <Route path="product/:id" element={<ProductDetail />} />
              {/* <Route path="reviewform" element={<ReviewForm />} /> */}
            </Routes>

            <Footer />
          </BrowserRouter>
        </AuthProvider>
      </AppProvider>
    </React.StrictMode>
  </>
);
