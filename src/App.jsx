// App.jsx

import { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import ErrorPage from "./pages/ErrorPage";
import Title from "./pages/components/Title";
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
    <main className="main-cg">
      {renderPage()}
      <Title currentPage={currentPage} handlePageChange={handlePageChange} />
    </main>
  );
};

export default App;
