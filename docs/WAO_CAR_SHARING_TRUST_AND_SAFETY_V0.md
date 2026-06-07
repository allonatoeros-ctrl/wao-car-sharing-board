# WAO_CAR_SHARING_TRUST_AND_SAFETY_V0.md

Versione: 1.0  
Data creazione: 2026-06-07  
Area: BlaBlaParty / WAO Car Sharing Board / Trust & Safety  
Stato: documento operativo pre-build  
Uso previsto: landing V0, form Tally, board preview, prompt Antigravity, moderazione manuale

---

## 0. Scopo del file

Questo file definisce le regole di **Trust & Safety** per il progetto:

```text
WAO Car Sharing Board — powered by BlaBlaParty
```

La board nasce per ordinare richieste e offerte di passaggio verso WAO Festival, ma il car sharing tra persone sconosciute introduce rischi più delicati rispetto a una semplice crew board.

La regola centrale è:

```text
WAO Car Sharing Board aiuta a raccogliere e ordinare richieste/offerte.
Non organizza viaggi.
Non garantisce passaggi.
Non gestisce pagamenti.
Non verifica conducenti o passeggeri nella V0.
```

Questo documento serve a proteggere:

- utenti;
- admin/community owner;
- BlaBlaParty;
- percezione del progetto;
- futura possibilità di validare il prodotto senza overbuilding o rischi inutili.

---

## 1. Posizionamento safety

WAO Car Sharing Board deve essere percepito come:

```text
board ordinata
community helper
strumento leggero
non ufficiale
manuale
prudente
chiaro nei limiti
```

Non deve essere percepito come:

```text
servizio ufficiale WAO
servizio transfer
agenzia viaggi
piattaforma NCC/taxi
marketplace pagamenti
servizio assicurato
garanzia di sicurezza
garanzia di passaggio
```

Frase madre:

```text
Questa board non organizza viaggi: mette ordine tra chi cerca e chi offre passaggi.
```

---

## 2. Disclaimer principale

Usare questo testo nella landing, nel form e nel footer.

```text
WAO Car Sharing Board è una demo non ufficiale, powered by BlaBlaParty.
Non è un servizio ufficiale WAO, non organizza viaggi, non gestisce pagamenti, non vende biglietti e non garantisce passaggi.
La board raccoglie e ordina richieste/offerte di car sharing: le persone decidono autonomamente se e come mettersi d’accordo.
```

Versione breve per hero/trust line:

```text
Solo 18+ · Demo non ufficiale · No pagamenti interni · No viaggi organizzati · No garanzia di passaggio
```

Versione compatta per card safety:

```text
Crew e passaggi, non caos. Noi ordiniamo le richieste: accordi, responsabilità e decisioni restano tra le persone coinvolte.
```

---

## 3. Regole assolute V0

### 3.1 Età

```text
Solo persone 18+.
```

Nel form deve esserci una conferma obbligatoria:

```text
Confermo di avere almeno 18 anni.
```

Se una persona non conferma 18+, la submission non deve essere considerata valida.

---

### 3.2 Nessun pagamento interno

La V0 non deve gestire:

- pagamenti;
- caparre;
- prenotazioni;
- rimborsi;
- wallet;
- pagamento benzina/pedaggi tramite piattaforma;
- trattenute;
- commissioni.

Copy corretto:

```text
Eventuali contributi spese vengono concordati privatamente tra le persone. BlaBlaParty non incassa, non trattiene e non gestisce pagamenti.
```

Copy da evitare:

```text
Prenota il posto
Paga il passaggio
Blocca il tuo seat
Passaggio garantito
Pagamento sicuro tramite noi
```

---

### 3.3 Nessuna garanzia di passaggio

Non promettere mai:

- passaggio garantito;
- driver verificato;
- passeggero verificato;
- viaggio sicuro garantito;
- posto assicurato;
- compatibilità garantita;
- arrivo garantito.

Copy corretto:

```text
Lasciare una richiesta non garantisce un passaggio. Serve a rendere più facile individuare persone compatibili per città, tratta e giorno.
```

---

### 3.4 Nessuna verifica driver/passenger nella V0

La V0 non verifica:

- patente;
- identità;
- assicurazione auto;
- revisione veicolo;
- fedina penale;
- affidabilità della persona;
- validità dei documenti;
- stato reale dei posti disponibili.

Copy corretto:

```text
Nella V0 non verifichiamo conducenti, passeggeri, veicoli o documenti. Prima di partire, controlla sempre con chi viaggi e concorda dettagli chiari.
```

---

### 3.5 Nessun ticket resale

Il progetto non deve diventare spazio biglietti.

Vietato:

- vendere biglietti;
- cercare biglietti;
- scambiare biglietti;
- raccogliere caparre per biglietti;
- promuovere resale non verificato.

Copy corretto:

```text
Questa board è solo per car sharing. Per biglietti e informazioni evento usa canali ufficiali o piattaforme note.
```

---

### 3.6 Nessuna chat interna

La V0 non crea chat interna.

Motivo:

```text
La chat interna aumenta moderazione, responsabilità, dati personali e complessità tecnica.
```

V0 corretta:

```text
Form esterno → review manuale → eventuale contatto/gruppo solo se c’è compatibilità e consenso.
```

---

### 3.7 Nessuno scraping

Non fare scraping di chat, gruppi, messaggi o username.

Consentito:

- osservazione manuale di pattern pubblici;
- insight aggregati;
- richieste volontarie tramite form;
- dati forniti con consenso.

Non consentito:

- esportare chat senza consenso;
- raccogliere username da gruppi;
- profilare persone;
- automatizzare DM;
- salvare conversazioni private;
- creare liste contatti da chat.

Copy interno:

```text
Se in futuro nasce un Chat Insight Agent, deve lavorare solo su dati esportati con consenso o anonimizzati.
```

---

## 4. Regole per il form

Il form deve raccogliere solo dati utili al matching manuale.

### 4.1 Dati consentiti V0

Consentiti:

- nickname/nome leggero;
- conferma 18+;
- contatto Telegram;
- Instagram opzionale;
- cerco/offro/sto valutando;
- città di partenza;
- zona/punto indicativo;
- data andata;
- data ritorno;
- numero persone;
- posti disponibili;
- tappe possibili;
- bagagli/tenda/zaino;
- flessibilità;
- vibe viaggio;
- note generali;
- consenso a essere contattati manualmente.

### 4.2 Dati da non chiedere ora

Non chiedere:

- documento identità;
- codice fiscale;
- numero patente;
- targa auto;
- indirizzo di casa;
- coordinate precise;
- foto documento;
- dati bancari;
- IBAN;
- numero carta;
- informazioni mediche;
- orientamento politico/religioso/sensibile;
- dati di minori;
- contatti di terze persone senza consenso.

### 4.3 Campo posizione

Usare sempre formulazioni leggere:

```text
Città di partenza
Zona o punto indicativo
```

Evitare:

```text
Indirizzo preciso
Dove abiti
Mandaci la tua posizione esatta
```

---

## 5. Regole per la board preview

La board preview della landing deve usare solo dati mock/statici.

### 5.1 Dati visibili consentiti nella preview

Esempi corretti:

```text
Milano → WAO · Offre 2 posti · Andata 14 agosto · Ritorno 18 agosto
Roma → WAO · Cerca 1 posto · Zaino + tenda · Orario flessibile
Grosseto → WAO · Offre 1 posto · Tappa possibile Orvieto
```

### 5.2 Dati da non mostrare nella preview

Non mostrare:

- nomi reali;
- username Telegram reali;
- profili Instagram reali;
- numeri di telefono;
- indirizzi;
- foto persone;
- targhe;
- chat screenshots;
- messaggi reali copiati.

### 5.3 Frase sotto board

```text
La preview è dimostrativa. Le richieste reali vengono riviste manualmente prima di eventuali contatti o gruppi compatibili.
```

---

## 6. Regole per contatto e gruppi

### 6.1 Contatto manuale

Il contatto tra persone deve avvenire solo se:

```text
[ ] entrambe le parti hanno lasciato consenso al contatto;
[ ] c’è compatibilità reale di città/tratta/data;
[ ] non emergono safety flag evidenti;
[ ] l’admin ha fatto review manuale;
[ ] il messaggio di introduzione chiarisce che gli accordi restano privati.
```

### 6.2 Mini gruppi Telegram

Creare mini gruppi solo se:

- il gruppo ha scopo chiaro;
- città/tratta/data sono compatibili;
- i membri hanno accettato contatto;
- le regole sono inviate all’ingresso;
- il gruppo resta piccolo;
- niente ticket resale;
- niente spam;
- niente pressioni.

Messaggio iniziale consigliato:

```text
Questo mini gruppo serve solo a coordinare un possibile passaggio verso WAO Festival.
BlaBlaParty non organizza il viaggio e non garantisce il passaggio: siete voi a decidere se accordarvi.
Niente pagamenti tramite noi, niente ticket resale, niente spam. Concordate dettagli chiari e usate buon senso.
```

---

## 7. Comportamenti vietati

Vietare esplicitamente:

- molestie;
- pressioni insistenti;
- linguaggio aggressivo;
- discriminazione;
- spam;
- vendita biglietti;
- truffe;
- richieste di soldi anticipate non chiare;
- pubblicazione dati altrui;
- invio di documenti non richiesti;
- contenuti sessuali o dating-oriented;
- uso del gruppo per promozioni;
- sostanze illegali;
- guida sotto effetto di alcol o sostanze;
- minorenni;
- impersonificazione dell’organizzazione WAO;
- claim “passaggio ufficiale” o “servizio WAO”.

Copy breve:

```text
No spam, no ticket resale, no pressioni, no comportamenti molesti, no uso improprio dei contatti.
```

---

## 8. Safety flags per review manuale

Durante la review, segnare attenzione se compare uno di questi segnali:

```text
richiesta di pagamento anticipato poco chiara
utente senza contatto leggibile
messaggio aggressivo o insistente
minor age o età non confermata
richiesta ticket o vendita ticket
richiesta dati personali non necessari
tratta troppo vaga
orari completamente non definiti
offerta con troppi posti non credibile
uso del progetto come promo
linguaggio ambiguo/dating/molesto
```

Stati consigliati:

```text
Nuova
Da chiarire
Safety flag
Compatibilità possibile
Contatto autorizzato
Gruppo creato
Archiviata
```

---

## 9. Messaggi operativi admin

### 9.1 Richiesta informazioni mancanti

```text
Ciao! Abbiamo ricevuto la tua richiesta per WAO Car Sharing Board.
Per ordinarla meglio ci serve solo un dettaglio: [campo mancante].
Ti ricordiamo che la board non organizza viaggi né garantisce passaggi: serve solo a trovare possibili compatibilità.
```

### 9.2 Compatibilità trovata

```text
Ciao! Abbiamo trovato una possibile compatibilità per città/tratta/data.
Prima di mettervi in contatto, confermi che possiamo condividere il tuo contatto Telegram con l’altra persona/gruppo compatibile?
```

### 9.3 Nessuna compatibilità per ora

```text
Ciao! Per ora non abbiamo ancora trovato una compatibilità chiara sulla tua tratta/data.
Teniamo la richiesta in board manuale e ti aggiorniamo se entra qualcosa di compatibile.
```

### 9.4 Safety warning in mini gruppo

```text
Promemoria: questo gruppo serve solo a coordinare un possibile passaggio.
Concordate orari, punto d’incontro, bagagli, contributo spese e dettagli in modo chiaro.
BlaBlaParty non organizza il viaggio e non garantisce il passaggio.
```

---

## 10. Copy safety per landing

### 10.1 Sezione Trust & Safety completa

Titolo:

```text
Passaggi ordinati, ma con limiti chiari.
```

Testo:

```text
WAO Car Sharing Board è una demo non ufficiale per raccogliere e ordinare richieste/offerte di car sharing.
Non organizziamo viaggi, non gestiamo pagamenti, non vendiamo biglietti e non garantiamo passaggi.
Le richieste vengono riviste manualmente e, se emergono compatibilità, le persone decidono autonomamente se e come accordarsi.
```

Bullet:

```text
Solo 18+
No pagamenti interni
No ticket resale
No viaggi organizzati
No garanzia di passaggio
Review manuale prima dei contatti
Contatti condivisi solo con consenso
```

### 10.2 Versione corta per footer

```text
Demo non ufficiale. WAO Car Sharing Board non è affiliato né approvato da WAO Festival. Non organizza viaggi, non vende biglietti, non gestisce pagamenti e non garantisce passaggi.
```

### 10.3 Versione per form finale

```text
Confermo di aver capito che WAO Car Sharing Board raccoglie e ordina richieste/offerte di passaggio, ma non organizza viaggi, non gestisce pagamenti, non verifica conducenti/passeggeri e non garantisce passaggi.
```

---

## 11. Privacy base V0

Principio:

```text
Raccogliere il minimo necessario per ordinare le richieste.
```

Regole:

- non pubblicare contatti senza consenso;
- non mostrare dati reali nella preview pubblica;
- non esportare dati in chat pubbliche;
- non usare i dati per marketing non richiesto;
- non raccogliere documenti;
- cancellare richieste su richiesta dell’utente;
- usare i dati solo per review manuale e compatibilità car sharing;
- non condividere dati con WAO Festival o terzi senza consenso.

Copy breve:

```text
Useremo i dati che lasci solo per ordinare richieste/offerte di passaggio e, se c’è compatibilità, contattarti manualmente. Non pubblicheremo il tuo contatto senza consenso.
```

---

## 12. Risk register

| Rischio | Gravità | Mitigazione V0 |
|---|---:|---|
| Sembrare servizio ufficiale WAO | Alta | Ripetere “demo non ufficiale”, no logo WAO, no claim partner |
| Responsabilità viaggio | Alta | Disclaimer chiaro: non organizziamo, non garantiamo |
| Pagamenti/truffe | Alta | No pagamenti interni, warning su contributi privati |
| Molestie/pressioni | Alta | Regole comportamento + admin review + archiviazione |
| Privacy contatti | Alta | Consenso prima di condividere contatti |
| Ticket resale | Media/Alta | Vietato, copy chiaro, rimuovere richieste ticket |
| Overbuilding | Media | Landing + form + board preview, no backend/Supabase ora |
| Chat caotica | Media | Mini gruppi solo per compatibilità, non chat libera |
| Dati sensibili | Media | Non chiedere documenti, indirizzi precisi o dati bancari |
| Spam | Media | Review manuale, campi chiari, blocco richieste ambigue |

---

## 13. Cosa NON fare ora

Non fare ora:

```text
backend
Supabase
login
chat interna
pagamenti
booking
verifica patente/documenti
assicurazione
servizio transfer
uso logo WAO
claim ufficiali
scraping chat
automazioni DM
pubblicazione contatti
matching automatico
dashboard admin reale
```

Motivo:

```text
La V0 deve validare se la board ordinata riduce il caos della chat e genera richieste compatibili. Tutto il resto è roadmap.
```

---

## 14. Roadmap safety futura

Solo dopo segnali reali:

- privacy policy più formale;
- termini d’uso;
- processo rimozione dati;
- dashboard admin con ruoli;
- stati richiesta tracciati;
- consenso esplicito per contatto;
- audit log interno;
- segnalazioni strutturate;
- blocco utenti problematici;
- template per mini gruppi;
- eventuale verifica leggera profilo;
- database con permessi corretti;
- policy per eventi/festival replicabili.

---

## 15. Checklist prima della pubblicazione V0

```text
[ ] La landing dice “demo non ufficiale”.
[ ] Non usa logo WAO ufficiale.
[ ] Non dichiara partnership WAO.
[ ] Hero include trust line.
[ ] Safety section visibile.
[ ] Footer disclaimer presente.
[ ] Form richiede conferma 18+.
[ ] Form include consenso contatto manuale.
[ ] Form include disclaimer finale.
[ ] Non chiede documenti o dati sensibili.
[ ] Board preview usa solo dati mock.
[ ] Non pubblica username reali.
[ ] Non promette passaggi garantiti.
[ ] Non introduce pagamenti.
[ ] Non parla di ticket resale.
[ ] Admin review manuale definita.
```

---

## 16. Output da passare ad Antigravity

Quando si passerà alla build, la sezione Trust & Safety dovrà essere costruita con questi elementi minimi:

```text
Title: Passaggi ordinati, ma con limiti chiari.
Trust line: Solo 18+ · Demo non ufficiale · No pagamenti interni · No viaggi organizzati
Disclaimer: WAO Car Sharing Board non organizza viaggi, non gestisce pagamenti, non vende biglietti e non garantisce passaggi.
Bullets: 18+, no ticket resale, review manuale, contatti solo con consenso.
Footer: non affiliato / non approvato da WAO Festival.
```

---

## 17. Prossimo step singolo

Creare:

```text
WAO_CAR_SHARING_BUILD_PLAN_V0.md
```

Obiettivo:

```text
trasformare Project Context + MVP Scope + Landing Copy + Form Schema + Board Preview + Trust & Safety in un piano di build React/Vite per Antigravity, ancora senza scrivere codice direttamente in ChatGPT.
```

Modello consigliato:

```text
GPT-5.5 Thinking qui in chat per creare il build plan.
Gemini Flash Medium in Antigravity per eseguire la landing V0.
```

---

## 18. Checkpoint finale

Stato:

```text
Trust & Safety V0 definito.
La board è protetta come demo non ufficiale, senza pagamenti, senza garanzie, senza verifica utenti, senza ticket resale e senza scraping.
```

Decisione stabile:

```text
La V0 può raccogliere richieste/offerte solo tramite form esterno e review manuale.
Ogni contatto reale richiede consenso e controllo minimo admin.
```

Prossimo step:

```text
WAO_CAR_SHARING_BUILD_PLAN_V0.md
```
