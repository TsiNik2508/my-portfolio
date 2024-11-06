import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Header from "./components/Header/Header";
import StarBackground from "./components/StarBackground/StarBackground";
import HeroSection from "./components/HeroSection/HeroSection";
import AboutSection from "./components/AboutSection/AboutSection";
import About from "./components/About/About";
import ContactSection from "./components/ContactSection/ContactSection";
import TechStack from "./components/TechStack/TechStack";
import Tools from "./components/Tools/Tools";
import MyGithub from "./components/MyGithub/MyGithub";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";

import "./App.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState(
    !localStorage.getItem("hasLoaded")
  );

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("hasLoaded", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <Router>
      <div className="app">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
            <StarBackground />
            <Header />
            <main>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HeroSection />
                      <AboutSection />
                      <ContactSection />
                    </>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <>
                      <About />
                      <TechStack />
                      <Tools />
                      <MyGithub />
                    </>
                  }
                />
                <Route path="/projects" element={<Projects />} />
                <Route path="/resume" element={<Resume />} />
              </Routes>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;
