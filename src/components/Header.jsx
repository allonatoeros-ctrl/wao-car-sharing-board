import React from 'react';
import { FORM_URL } from '../config/links';

export default function Header() {
  return (
    <header className="header-wrapper">
      <div className="container header-container">
        <div className="header-brand">
          <div className="brand-title">
            🚗 WAO Car Sharing Board
            <span className="badge badge-demo">Demo non ufficiale</span>
          </div>
          <span className="brand-subtitle">powered by BlaBlaParty</span>
        </div>
        <div className="header-actions">
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            Cerco / offro passaggio
          </a>
        </div>
      </div>
    </header>
  );
}
