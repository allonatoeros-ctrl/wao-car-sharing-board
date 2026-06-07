import React from 'react';
import { FORM_LOOKING_FOR_RIDE_URL, FORM_OFFERING_RIDE_URL } from '../config/links';

export default function FinalCTA() {
  return (
    <section className="container section-padding">
      <div className="final-cta-section">
        <h2>Stai cercando o offrendo un passaggio?</h2>
        <p>
          Lascia i dettagli nel form. Se emergono tratte compatibili, sarà più semplice creare ordine invece di inseguire messaggi nella chat.
        </p>
        <div className="final-cta-actions">
          <a href={FORM_LOOKING_FOR_RIDE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Compila richiesta passaggio
          </a>
          <a href={FORM_OFFERING_RIDE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Compila offerta passaggio
          </a>
        </div>
        <div className="final-cta-trust">
          Board non ufficiale · Review manuale · Nessun pagamento interno · Solo 18+
        </div>
      </div>
    </section>
  );
}
