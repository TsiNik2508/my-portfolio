import "./App.scss";
import React, { useState, useEffect, Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Header from "./components/Header/Header";
import StarBackground from "./components/StarBackground/StarBackground";
import Footer from "./components/Footer/Footer";

// Lazy load components
const HeroSection = lazy(() => import("./components/HeroSection/HeroSection"));
const AboutSection = lazy(() => import("./components/AboutSection/AboutSection"));
const About = lazy(() => import("./components/About/About"));
const ContactSection = lazy(() => import("./components/ContactSection/ContactSection"));
const TechStack = lazy(() => import("./components/TechStack/TechStack"));
const Tools = lazy(() => import("./components/Tools/Tools"));
const MyGithub = lazy(() => import("./components/MyGithub/MyGithub"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/Resume"));

const App = () => {
  const [isLoading, setIsLoading] = useState(
    !sessionStorage.getItem("hasLoaded")
  );

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("hasLoaded", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  const LoadingFallback = () => <div className="loading-fallback">Loading...</div>;

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
              <Suspense fallback={<LoadingFallback />}>
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
              </Suspense>
            </main>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default React.memo(App);
