import React from 'react';

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="container header-container">
        <div className="header-brand">
          <div className="brand-title">
            🚗 WAO Car Sharing Board
            <span className="badge badge-unofficial">NON UFFICIALE</span>
          </div>
          <span className="brand-subtitle">powered by BlaBlaParty</span>
        </div>
        <div className="header-actions">
          <a href="#cta-section" className="btn btn-primary btn-sm">
            Cerco / offro passaggio
          </a>
        </div>
      </div>
    </header>
  );
}
