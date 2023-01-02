import Head from "next/head";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Works from "../components/Works";
import Experiences from "../components/Experiences";
import { useEffect } from "react";
import useElementObserver from "../hook/useElementObserver";

export default function Home() {
  const [size, refs, active] = useElementObserver();
  useEffect(() => { size(5) }, [])
  
  return (
    <div
      style={{ scrollBehavior: "smooth" }}
      className="min-h-screen font-mono w-screen flex flex-col bg-[#1a191d] scroll-smooth selection:bg-[#37e5] selection:text-white"
    >
      <Head>
        <title>Yosefw | FullStack Developer</title>
        <meta
          name="description"
          content="FullStack web and mobile app developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-1">
        <NavBar active={active} />
        <Hero innerRef={refs[0]} />
        <About innerRef={refs[1]} />
        <Skills innerRef={refs[2]}/>
        <Works innerRef={refs[3]}/>
        <Experiences innerRef={refs[4]}/>
      </main>
      <Footer />
    </div>
  );
}
