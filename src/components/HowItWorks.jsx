import React from 'react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding container">
      <div className="section-header">
        <h2>Come funziona</h2>
        <p>Una gestione semplice basata su form esterni e riorganizzazione manuale del team BlaBlaParty.</p>
      </div>
      
      <div className="how-steps">
        <div className="step-card glass-panel">
          <div className="step-number">01</div>
          <h3>Scegli il percorso</h3>
          <p>Indica nel form se stai cercando un posto a bordo o se hai dei posti liberi da offrire nella tua auto.</p>
        </div>
        
        <div className="step-card glass-panel">
          <div className="step-number">02</div>
          <h3>Lascia i dettagli</h3>
          <p>Inserisci città di partenza, tappe, date di andata/ritorno, bagagli e il tuo contatto Telegram.</p>
        </div>
        
        <div className="step-card glass-panel">
          <div className="step-number">03</div>
          <h3>Mettiamo in ordine</h3>
          <p>Raggruppiamo periodicamente le risposte ricevute per zona geografica, tratta e compatibilità oraria.</p>
        </div>
        
        <div className="step-card glass-panel">
          <div className="step-number">04</div>
          <h3>Contatto privato</h3>
          <p>In caso di compatibilità, ti contattiamo o creiamo un mini-gruppo dedicato. Decidete poi in autonomia come accordarvi.</p>
        </div>
      </div>
    </section>
  );
}
