import React from 'react';

export default function SafetySection() {
  return (
    <section className="section-padding container">
      <div className="glass-panel safety-wrapper">
        <div className="safety-grid">
          <div className="safety-intro">
            <h3>🛡️ Passaggi ordinati, ma con limiti chiari</h3>
            <p>
              La condivisione del viaggio in auto è basata sulla fiducia e sul buon senso reciproco. 
              Questa board è uno strumento informativo e non commerciale ideato per agevolare il contatto tra passeggeri e conducenti della community.
            </p>
          </div>
          
          <div className="safety-rules-grid">
            <div className="safety-rule-card">
              <h4>🔞 Solo 18+</h4>
              <p>L'utilizzo del servizio è consentito esclusivamente a persone maggiorenni. L'età viene verificata in fase di form.</p>
            </div>
            
            <div className="safety-rule-card">
              <h4>💸 Nessun pagamento interno</h4>
              <p>Non gestiamo denaro, commissioni o prenotazioni. Eventuali divisioni di spese di viaggio vanno concordate in privato.</p>
            </div>
            
            <div className="safety-rule-card">
              <h4>🚗 Nessuna verifica conducenti/auto</h4>
              <p>Nella V0 non effettuiamo controlli su documenti, patenti o stato dei veicoli. Consigliamo di chiarire ogni dettaglio prima di partire.</p>
            </div>
            
            <div className="safety-rule-card">
              <h4>🤝 Accordo privato volontario</h4>
              <p>Il caricamento della richiesta non garantisce un passaggio. La board offre solo un aiuto logistico di ordinamento.</p>
            </div>
          </div>
        </div>
        
        <div className="safety-alert-box">
          <strong>IMPORTANTE:</strong> WAO Car Sharing Board non organizza i viaggi e non si assume alcuna responsabilità per i trasporti concordati tra gli utenti. 
          Raccomandiamo di non condividere dati sensibili come indirizzi privati o documenti di identità pubblicamente nei canali e di verificare sempre l'affidabilità dei contatti ricevuti prima del viaggio.
        </div>
      </div>
    </section>
  );
}
