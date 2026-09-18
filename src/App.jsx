import React from 'react';
import AmbientBackground from './components/AmbientBackground';
import Header from './components/Header';
import HeroHeadline from './components/HeroHeadline';
import VisionStatement from './components/VisionStatement';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <AmbientBackground />
      <div className="app-container">
        <Header />
        <main className="main-content">
          <HeroHeadline />
          <VisionStatement />
        </main>
        <Footer />
      </div>
    </>
  );
}
