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

//压缩图片
//media query
// 准备简历
// 主页的Media Query
// Minimalist Bank整理一下发上去
// myWebDevHub的bug修复一下发上去
// fast react pizza的media query bug
// natour的登陆头像
// natour购买会员
// onimi food的bug修复一下
// 给需要登陆的app预设一个账号密码
// Linkedin上的中文去掉
