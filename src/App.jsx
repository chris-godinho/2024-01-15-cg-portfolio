// App.jsx

import { useState } from "react";

import { ModalProvider } from "./pages/context/ModalProvider.jsx";

// Import all pages
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Personal from "./pages/Personal";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Title from "./pages/components/Title";
import "./App.css";

// Define the App component and render all pages
const App = () => {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Personal") {
      return <Personal />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <ErrorPage />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  // Return the App component
  return (
    <ModalProvider>
      <main className="main-cg">
        <div className="main-container-wrapper-cg">{renderPage()}</div>

        <Title currentPage={currentPage} handlePageChange={handlePageChange} />
      </main>
    </ModalProvider>
  );
};

export default App;
