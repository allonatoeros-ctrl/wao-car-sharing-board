import React from 'react';

export default function WhyBoard() {
  return (
    <section className="section-padding container">
      <div className="why-board-grid">
        <div className="why-intro-card glass-panel">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '20px' }}>
            <h2>Perché una board?</h2>
          </div>
          <p style={{ color: 'var(--text-secondary)' }}>
            Nei gruppi community le richieste di car sharing arrivano di continuo: 
            <em> "qualcuno parte da Milano?"</em>, <em>"cerco passaggio da Perugia"</em>, 
            <em> "ho due posti da Roma"</em>. Il problema è che dopo pochi minuti questi messaggi si disperdono nel flusso della chat.
          </p>
        </div>
        
        <div className="why-features">
          <div className="why-feature-item glass-panel">
            <div className="why-feature-icon">💬</div>
            <div className="why-feature-text">
              <h3>La chat aiuta, la board ordina</h3>
              <p>Non sostituiamo la chat di Telegram. La integriamo raccogliendo le informazioni giuste in modo strutturato.</p>
            </div>
          </div>
          
          <div className="why-feature-item glass-panel">
            <div className="why-feature-icon">🔍</div>
            <div className="why-feature-text">
              <h3>Tratte e date leggibili</h3>
              <p>Mettiamo in fila partenze, posti disponibili, tappe intermedie e bagagli per rendere immediato il confronto.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
