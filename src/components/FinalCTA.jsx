import React from 'react';
import { FORM_URL } from '../config/links';

export default function FinalCTA() {
  return (
    <section className="container section-padding">
      <div className="final-cta-section">
        <h2>Stai cercando o offrendo un passaggio?</h2>
        <p>
          Lascia i dettagli nel form. Se emergono tratte compatibili, sarà più semplice creare ordine invece di inseguire messaggi nella chat.
        </p>
        <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Compila il form car sharing
        </a>
        <div className="final-cta-trust">
          Demo non ufficiale · Review manuale · Nessun pagamento interno · Solo 18+
        </div>
      </div>
    </section>
  );
}
