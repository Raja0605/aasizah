import React from 'react';
import logoImg from '/asset/logo.png';

export default function Header() {
  return (
    <header className="site-header">
      <a href="/" className="site-logo-link" aria-label="Aasizah Health Ecosystems Home">
        <img
          src={logoImg}
          alt="Aasizah Health Ecosystems Pvt Ltd"
          className="site-logo"
          loading="eager"
        />
      </a>
    </header>
  );
}

