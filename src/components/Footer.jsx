import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3>WAO Car Sharing Board</h3>
          <p>powered by BlaBlaParty &copy; {new Date().getFullYear()}</p>
        </div>
        
        <div className="footer-disclaimers">
          <p>Piattaforma non ufficiale / Community Board.</p>
          <p>
            Questo progetto non è in alcun modo affiliato, approvato, sponsorizzato o gestito dagli organizzatori ufficiali di WAO Festival. 
            Nessun logo o marchio registrato del festival è utilizzato in questa pagina.
          </p>
          <p>
            No Ticket Resale · No Payments · No Travel Organization. 
            Il servizio si limita a ordinare le informazioni fornite dagli utenti per scopi logistici.
          </p>
        </div>
      </div>
    </footer>
  );
}
