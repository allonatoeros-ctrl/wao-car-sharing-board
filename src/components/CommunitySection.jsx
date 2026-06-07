import React from 'react';
import { TELEGRAM_URL } from '../config/links';

export default function CommunitySection() {
  return (
    <section className="section-padding container">
      <div className="glass-panel community-wrapper">
        <h3>📢 Resta in contatto con la community</h3>
        <p>
          Il canale o gruppo Telegram è utile per ricevere aggiornamenti, discutere della viabilità e scambiarsi feedback veloci. 
          Tuttavia, ti invitiamo a compilare prima il form per evitare che i dettagli del tuo viaggio vadano persi.
        </p>
        <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
          Segui aggiornamenti community
        </a>
      </div>
    </section>
  );
}
