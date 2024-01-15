// App.jsx

import { useState } from "react";
import Header from "./pages/components/Header";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./pages/components/Footer";
import "./App.css";

const App = () => {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    } else {
      return <ErrorPage />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="main-cg">{renderPage()}</main>
      <Footer />
    </div>
  );
};

export default App;
