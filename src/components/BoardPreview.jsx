import React, { useState } from 'react';
import { boardPreview } from '../data/boardPreview';

export default function BoardPreview() {
  const [filter, setFilter] = useState('ALL'); // ALL, CERCO, OFFRO

  const filteredData = boardPreview.filter(item => {
    if (filter === 'ALL') return true;
    return item.type === filter;
  });

  return (
    <section className="section-padding container">
      <div className="section-header">
        <h2>Anteprima della bacheca</h2>
        <p>Esempio dimostrativo di come le risposte al form vengono organizzate ed esposte ordinatamente.</p>
      </div>

      <div className="board-preview-wrapper">
        <div className="board-filters">
          <button 
            className={`filter-btn ${filter === 'ALL' ? 'active' : ''}`}
            onClick={() => setFilter('ALL')}
          >
            Tutti gli annunci
          </button>
          <button 
            className={`filter-btn ${filter === 'CERCO' ? 'active' : ''}`}
            onClick={() => setFilter('CERCO')}
          >
            Chi cerca passaggio
          </button>
          <button 
            className={`filter-btn ${filter === 'OFFRO' ? 'active' : ''}`}
            onClick={() => setFilter('OFFRO')}
          >
            Chi offre passaggio
          </button>
        </div>

        <div className="board-preview-grid">
          {filteredData.map((item) => (
            <div key={item.id} className="board-card glass-panel">
              <div className="board-card-header">
                <div className="board-card-route">{item.route}</div>
                <span className={`badge ${
                  item.type === 'CERCO' ? 'badge-cerco' : 
                  item.type === 'OFFRO' ? 'badge-offro' : 'badge-valuto'
                }`}>
                  {item.type}
                </span>
              </div>
              
              <div className="board-card-status">Stato: {item.status}</div>
              
              <div className="board-card-details">
                <div className="board-card-detail-item">
                  <span className="board-card-detail-label">Andata:</span>
                  <span>{item.outbound}</span>
                </div>
                <div className="board-card-detail-item">
                  <span className="board-card-detail-label">Ritorno:</span>
                  <span>{item.returnDate}</span>
                </div>
                <div className="board-card-detail-item">
                  <span className="board-card-detail-label">Posti/Pers.:</span>
                  <span>{item.seats}</span>
                </div>
                <div className="board-card-detail-item">
                  <span className="board-card-detail-label">Bagaglio:</span>
                  <span>{item.luggage}</span>
                </div>
                {item.stops && (
                  <div className="board-card-detail-item">
                    <span className="board-card-detail-label">Tappe:</span>
                    <span>{item.stops}</span>
                  </div>
                )}
              </div>
              
              <div className="board-card-vibe">Vibe: {item.vibe}</div>
              <p className="board-card-note">{item.note}</p>
            </div>
          ))}
        </div>
        
        <p className="board-preview-note">
          ⚠️ Nota: I dati sopra riportati sono <strong>esempi di mock statici</strong> a scopo dimostrativo. 
          I contatti reali non sono esposti pubblicamente e vengono gestiti in privato solo in caso di compatibilità.
        </p>
      </div>
    </section>
  );
}
