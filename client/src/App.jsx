import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Courses from "./Pages/Courses/Courses";
import Playground from "./Pages/Playground/Playground";
import Instructor from "./Pages/Instructor/Instructor";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Pnf from "./Pages/Pnf/Pnf";
import About from "./Pages/About/About";
import ScrollToTop from "./Components/ScrollTop";
import ContactForm from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import Faq from "./Pages/Faq/Faq";
import Trainer from "./Pages/Trainer/Trainer";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/instructor/:id" element={<Trainer/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Pnf />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
