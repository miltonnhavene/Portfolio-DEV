'use client'
import './globals.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Skills/>
    <Projects/>
    </>
  );
}
