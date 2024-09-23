import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Aboutme from "./Components/Aboutme";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import GlobalStyles from "./Styles/GlobalStyles";
import Main from "./UI/Main";

function App() {
  return (
    <>
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
