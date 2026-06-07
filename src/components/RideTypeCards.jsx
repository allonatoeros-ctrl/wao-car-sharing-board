import React from 'react';
import { FORM_URL } from '../config/links';

export default function RideTypeCards() {
  return (
    <section className="section-padding container">
      <div className="section-header">
        <h2>Seleziona il tuo ruolo</h2>
        <p>Entrambi i flussi convergono su un unico form esterno diviso per percorsi dedicati.</p>
      </div>
      
      <div className="ride-cards-grid">
        {/* Card 1: Cerco passaggio */}
        <div className="ride-card glass-panel card-cerco-theme">
          <div className="ride-card-title">
            <h3>Cerco passaggio</h3>
            <span className="badge badge-cerco">Passeggero</span>
          </div>
          <p className="desc">
            Per chi non ha la macchina, ha bisogno di un passaggio o può muoversi per raggiungere un punto d'incontro compatibile.
          </p>
          <ul className="ride-card-fields">
            <li><span className="bullet-dot"></span> Città o stazione di partenza</li>
            <li><span className="bullet-dot"></span> Date di andata e ritorno preferite</li>
            <li><span className="bullet-dot"></span> Numero di persone (1, 2, o gruppo)</li>
            <li><span className="bullet-dot"></span> Ingombro bagagli (zaino, tenda, camping gear)</li>
            <li><span className="bullet-dot"></span> Livello di flessibilità oraria</li>
            <li><span className="bullet-dot"></span> Contatto Telegram per il coordinamento</li>
          </ul>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            Lascia richiesta passaggio
          </a>
        </div>
        
        {/* Card 2: Offro passaggio */}
        <div className="ride-card glass-panel card-offro-theme">
          <div className="ride-card-title">
            <h3>Offro passaggio</h3>
            <span className="badge badge-offro">Conducente</span>
          </div>
          <p className="desc">
            Per chi viaggia in auto, ha posti liberi a bordo e vuole condividere il tragitto e dividere le spese.
          </p>
          <ul className="ride-card-fields">
            <li><span className="bullet-dot"></span> Città di partenza e tratta prevista</li>
            <li><span className="bullet-dot"></span> Tratta principale e tappe intermedie</li>
            <li><span className="bullet-dot"></span> Posti effettivamente disponibili</li>
            <li><span className="bullet-dot"></span> Spazio bagagli libero (es. "solo zaini")</li>
            <li><span className="bullet-dot"></span> Orario indicativo di partenza</li>
            <li><span className="bullet-dot"></span> Eventuale contributo spese indicativo</li>
          </ul>
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Segnala posti disponibili
          </a>
        </div>
      </div>
    </section>
  );
}
