import React from 'react';
import { FORM_LOOKING_FOR_RIDE_URL, FORM_OFFERING_RIDE_URL } from '../config/links';

export default function RideTypeCards() {
  return (
    <section id="cta-section" className="section-padding container">
      <div className="section-header">
        <h2>Seleziona il tuo ruolo</h2>
        <p>Scegli come partecipare al car sharing del WAO Festival</p>
      </div>
      
      <div className="ride-cards-grid">
        {/* Card 1: Cerco un passaggio */}
        <div className="ride-card glass-panel card-cerco-theme">
          <div className="ride-card-title">
            <h3>Cerco un passaggio</h3>
            <span className="badge badge-cerco">Passeggero</span>
          </div>
          <p className="desc">
            Parti da solo o con amici e vuoi trovare qualcuno che va al WAO Festival dalla tua zona.
          </p>
          <div className="ride-card-actions">
            <a href={FORM_LOOKING_FOR_RIDE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              Compila richiesta passaggio
            </a>
          </div>
        </div>
        
        {/* Card 2: Offro un passaggio */}
        <div className="ride-card glass-panel card-offro-theme">
          <div className="ride-card-title">
            <h3>Offro un passaggio</h3>
            <span className="badge badge-offro">Conducente</span>
          </div>
          <p className="desc">
            Hai posti liberi in auto e vuoi segnalare la tua tratta agli admin della board.
          </p>
          <div className="ride-card-actions">
            <a href={FORM_OFFERING_RIDE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Compila offerta passaggio
            </a>
          </div>
        </div>
      </div>
      
      <div className="cta-disclaimer-note">
        BlaBlaParty / WAO Car Sharing Board non organizza viaggi, non garantisce passaggi e non gestisce pagamenti. Le richieste vengono riviste manualmente.
      </div>
    </section>
  );
}

