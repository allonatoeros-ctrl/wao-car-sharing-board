import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section container">
      <div className="hero-badges">
        <span className="badge badge-demo">Community Experiment</span>
        <span className="badge badge-demo">Non ufficiale</span>
        <span className="badge badge-18">18+</span>
      </div>
      
      <h1>Trova o offri un passaggio<br />per WAO Festival.</h1>
      
      <p className="subtitle">
        Le richieste in chat si perdono nei messaggi. Lascia città, giorno, posti o richiesta passaggio: 
        la board ordina le informazioni per tratta e data, facilitando la creazione di gruppi per zona compatibile.
      </p>
      
      <div className="hero-actions">
        <a href="#cta-section" className="btn btn-primary">
          Cerco / offro passaggio
        </a>
        <a href="#how-it-works" className="btn btn-secondary">
          Scopri come funziona
        </a>
      </div>
      
      <div className="hero-trust">
        Solo 18+ · No pagamenti interni · No viaggi organizzati · Demo non ufficiale
      </div>
    </section>
  );
}
