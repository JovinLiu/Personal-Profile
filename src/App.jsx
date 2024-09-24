import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Aboutme from "./Components/Aboutme";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import GlobalStyles from "./Styles/GlobalStyles";
import Main from "./UI/Main";
import Curtain from "./Components/Curtain";
import {useEffect, useState} from "react";

function App() {
  const [showCurtain, setShowCurtain] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowCurtain(false), 2000);
  }, []);

  return (
    <>
      {showCurtain ? <Curtain /> : null}
      <GlobalStyles />
      <Header />
      <Main>
        <Hero />
        <Aboutme />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Main>
    </>
  );
}

export default App;
