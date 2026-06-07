# WAO_CAR_SHARING_MVP_SCOPE_V0.md

Versione: 1.0  
Data creazione: 2026-06-07  
Area: BlaBlaParty / AI Business Factory / WAO Car Sharing Vertical  
Stato: MVP Scope operativo pre-codice  
Completezza stimata: 88%  
Fonte principale: `WAO_CAR_SHARING_PROJECT_CONTEXT_V0.md`  
Fonti di supporto: `01_BLABLAPARTY_INTEGRAL_MASTER.md`, `02_FACTORY_METHOD_AND_BUSINESS_MASTER.md`, `03_CODING_CONTEXT_PROMPTS_SECURITY_MASTER.md`, `BLABLAPARTY_PROJECT_RESTART_CONTEXT_2026-06-05.md`, `BLABLAPARTY_CREATIVE_POLISH_BRIEF.md`, `BLABLAPARTY_TECHNO_CULTURE_INTELLIGENCE_SKILL.md`, `BLABLAPARTY_STAGE_GATE_BRAND_USAGE_GUIDE.md`

---

## 0. Scopo del file

Questo file definisce lo scope MVP della verticale:

```text
WAO Car Sharing Board — powered by BlaBlaParty
```

Serve a fissare cosa costruire nella V0, cosa rimandare, cosa evitare e quali rischi proteggere prima di aprire Antigravity o iniziare codice.

Regola centrale:

```text
Non stiamo creando un servizio ufficiale WAO.
Non stiamo creando un transfer.
Non stiamo organizzando viaggi.
Stiamo creando una board leggera e non ufficiale per ordinare richieste/offerte di car sharing verso WAO Festival.
```

---

## 1. One-liner prodotto

```text
WAO Car Sharing Board è una board non ufficiale, powered by BlaBlaParty, per raccogliere e ordinare chi cerca e chi offre passaggi verso WAO Festival.
```

Versione più diretta:

```text
Car sharing per festival, ma ordinato.
```

Versione landing:

```text
Trova o offri un passaggio per WAO Festival, senza perdere tutto nella chat.
```

---

## 2. Problema reale

Nel gruppo community non ufficiale le persone stanno già cercando e offrendo passaggi.

Il problema non è creare il bisogno.

Il problema è:

```text
le richieste esistono, ma si perdono nella chat.
```

Problemi specifici:

- messaggi sparsi;
- città non sempre chiare;
- giorni di andata/ritorno incompleti;
- offerte e richieste mischiate;
- persone che entrano tardi e non leggono lo storico;
- richieste duplicate;
- tappe e posti disponibili difficili da confrontare;
- admin/community owner costretto a fare ordine manuale;
- rischio che il gruppo diventi rumoroso e poco utile.

Formula problema:

```text
Le persone ci sono.
Le richieste ci sono.
Manca una board leggera per ordinarle.
```

---

## 3. Perché è una verticale BlaBlaParty

BlaBlaParty nasce come:

```text
Festival Crew Finder / Crew Board / community moderata.
```

WAO Car Sharing Board prende la stessa logica e la restringe a un bisogno più specifico:

```text
non trovare solo una crew,
ma trovare o offrire un passaggio verso il festival.
```

Differenza operativa:

| Progetto | Bisogno principale | Output |
|---|---|---|
| BlaBlaParty | Con chi vado al festival? | Crew / gruppo compatibile |
| WAO Car Sharing Board | Come ci arrivo? Chi parte dalla mia zona? | Richieste/offerte ordinate per tratta |

Questa verticale ha senso perché è:

- più concreta;
- più facile da spiegare;
- più vicina a un bisogno già visibile;
- più rapida da validare con landing + form;
- utile anche come test per future verticali festival-specifiche.

---

## 4. Target utente

### 4.1 Chi cerca passaggio

Persone che:

- non hanno auto;
- partono da città o zone non servite bene;
- arrivano in treno/bus e cercano ultimo tratto;
- hanno tenda, zaino o bagagli;
- cercano andata, ritorno o entrambi;
- possono spostarsi verso una città vicina;
- vogliono viaggiare con persone compatibili;
- non vogliono scrivere mille volte in chat.

### 4.2 Chi offre passaggio

Persone che:

- hanno auto;
- hanno posti liberi;
- vogliono dividere benzina/pedaggi;
- possono fare tappe;
- vogliono evitare messaggi sparsi;
- preferiscono trovare persone con vibe compatibile;
- vogliono rendere il viaggio più semplice e social.

### 4.3 Admin/community owner

Persona che:

- ha creato o gestisce il gruppo spontaneo;
- non rappresenta ufficialmente WAO Festival;
- vuole mantenere il gruppo utile;
- può condividere una board/form per fare ordine;
- non vuole diventare centralino;
- ha interesse a ridurre spam e confusione.

---

## 5. Posizionamento corretto

Deve sembrare:

```text
board ordinata
progetto leggero
community tool
festival/electronic culture
mobile-first
serio ma non corporate
car sharing helper
manuale ma credibile
sicuro, con limiti chiari
```

Non deve sembrare:

```text
servizio ufficiale WAO
partner WAO
agenzia viaggi
servizio transfer
NCC/taxi service
marketplace
piattaforma pagamenti
ticket resale
app dating
chat caotica
servizio assicurato
```

Frase di posizionamento:

```text
Una demo non ufficiale, powered by BlaBlaParty, per ordinare richieste e offerte di passaggio verso WAO Festival.
```

---

## 6. MVP V0

La V0 deve essere estremamente semplice.

### 6.1 Cosa costruire ora

```text
Landing V0
Form esterno tipo Tally
Board preview statica
Copy chiaro
Safety/disclaimer
CTA primaria verso form
Review manuale delle risposte
Eventuale link Telegram/community come layer secondario
```

### 6.2 Obiettivo MVP

Validare se le persone usano davvero un form ordinato per lasciare richiesta/offerta di passaggio.

Non validiamo ancora:

- matching automatico;
- database;
- login;
- dashboard;
- automazioni;
- modello business;
- partnership con WAO.

Validiamo solo:

```text
le persone passano da chat rumorosa → form ordinato?
```

---

## 7. Flusso utente MVP

```text
Landing
↓
Capisco che è una board non ufficiale
↓
Scelgo: cerco passaggio / offro passaggio
↓
Compilo form esterno
↓
Lascio città, data, posti/bagagli/tappe, contatto
↓
Il team/admin revisiona manualmente
↓
Se c'è compatibilità, posso essere contattato o inserito in mini gruppo con consenso
```

---

## 8. Flusso admin/manuale MVP

```text
Form submission
↓
Review manuale
↓
Classificazione: cerca / offre
↓
Raggruppamento per città / zona / data / tratta
↓
Identificazione compatibilità
↓
Contatto manuale o mini gruppo Telegram
↓
Stato aggiornato manualmente
```

Stati manuali consigliati:

```text
Nuova
Da verificare
Compatibilità possibile
Compatibilità trovata
Gruppo creato
Archiviata
```

---

## 9. Form fields V0

### 9.1 Campi comuni

- Nome / nickname;
- conferma 18+;
- contatto Telegram;
- contatto Instagram opzionale;
- cerco / offro passaggio;
- città di partenza;
- zona o punto indicativo di partenza;
- data andata;
- data ritorno;
- flessibilità oraria;
- note generali;
- consenso a essere contattato per compatibilità.

### 9.2 Se cerco passaggio

- numero persone;
- cerco andata / ritorno / entrambi;
- bagagli / tenda / zaino;
- posso raggiungere una città vicina?;
- posso contribuire a benzina/pedaggi?;
- vibe viaggio: tranquillo / social / music-first / flessibile;
- eventuali vincoli orari.

### 9.3 Se offro passaggio

- posti disponibili;
- spazio bagagli/tenda;
- tratta prevista;
- tappe possibili;
- orario indicativo partenza;
- piano ritorno;
- contributo spese indicativo, se previsto;
- preferenza contatto.

---

## 10. Landing V0 — struttura

### 10.1 Header

Elementi:

- WAO Car Sharing Board;
- powered by BlaBlaParty;
- badge: Demo non ufficiale;
- CTA: Cerco / offro passaggio.

### 10.2 Hero

Headline:

```text
Trova o offri un passaggio per WAO Festival.
```

Subtitle:

```text
Le richieste in chat si perdono. Qui puoi lasciare città, giorno, posti disponibili o richiesta passaggio, così diventa più facile creare gruppi per zona o tratta compatibile.
```

CTA primaria:

```text
Cerco / offro passaggio
```

CTA secondaria:

```text
Come funziona
```

Trust line:

```text
Solo 18+ · No pagamenti interni · No viaggi organizzati · Demo non ufficiale
```

### 10.3 Perché questa pagina

Messaggio:

```text
Il gruppo è utile, ma le richieste di passaggio si perdono nei messaggi. Questa board prova a mettere ordine.
```

### 10.4 Come funziona

Step:

```text
1. Dici se cerchi o offri passaggio.
2. Lasci città, giorno, posti o richiesta, bagagli e contatto.
3. Le richieste vengono ordinate per zona/tratta/data.
4. Se ci sono compatibilità, si possono creare piccoli gruppi o contatti diretti.
```

### 10.5 Cerco passaggio / Offro passaggio

Due card distinte.

Card “Cerco passaggio”:

- città;
- giorno;
- persone;
- bagagli;
- flessibilità;
- contatto.

Card “Offro passaggio”:

- città;
- tappe;
- posti;
- spazio bagagli;
- orario;
- eventuale contributo spese.

### 10.6 Board preview statica

Esempi:

```text
Milano → WAO | Offre 2 posti | Andata 14 agosto | Ritorno 18 agosto
Roma → WAO | Cerca 1 posto | Flessibile | Zaino + tenda
Perugia → WAO | Cerca passaggio | Andata 14 agosto
Grosseto → WAO | Offre 1 posto | Tappa possibile Orvieto
```

Regola:

```text
La board preview deve sembrare un esempio ordinato, non dati reali pubblicati.
```

### 10.7 Trust & Safety

Mostrare subito limiti e responsabilità.

### 10.8 CTA finale

Copy:

```text
Stai cercando o offrendo un passaggio?
Lascia i dettagli e aiutiamo a ordinare le compatibilità.
```

CTA:

```text
Compila il form car sharing
```

### 10.9 Footer

Elementi:

- powered by BlaBlaParty;
- demo non ufficiale;
- no ticket resale;
- no pagamenti;
- no garanzia passaggi.

---

## 11. Board preview V0

La board preview deve dimostrare ordine.

Non deve sembrare:

- una chat;
- una bacheca annunci senza controllo;
- un marketplace;
- un servizio di prenotazione;
- dati personali reali.

Formato consigliato card:

```text
Tipo: Cerca / Offre
Tratta: Milano → WAO
Data andata: 14 agosto
Data ritorno: 18 agosto
Posti: 2 disponibili / 1 cercato
Bagagli: zaino + tenda
Flessibilità: alta / media / bassa
Stato: Da verificare / Compatibilità possibile
```

Badge utili:

```text
CERCA
OFFRE
FLESSIBILE
TENDA
TAPPA POSSIBILE
18+
DEMO NON UFFICIALE
```

---

## 12. Trust & Safety V0

Questa verticale ha rischio più alto della crew board generica perché coinvolge auto, spostamenti e sconosciuti.

### 12.1 Regole da mostrare

- solo 18+;
- niente pagamenti tramite BlaBlaParty;
- nessuna garanzia di passaggio;
- nessuna verifica driver/passenger nella V0;
- nessuna verifica patente/documenti;
- controllare sempre identità e contatti prima di partire;
- concordare dettagli chiari prima del viaggio;
- non condividere dati sensibili pubblicamente;
- segnalare comportamenti strani all’admin;
- usare buon senso e canali sicuri;
- BlaBlaParty aiuta a ordinare richieste, non sostituisce responsabilità personale.

### 12.2 Safety copy breve

```text
Crew e passaggi, non caos.
Questa board non organizza viaggi, non gestisce pagamenti e non garantisce passaggi. Raccoglie e ordina richieste/offerte: poi le persone decidono autonomamente se e come accordarsi.
```

### 12.3 Disclaimer esteso

```text
WAO Car Sharing Board è una demo non ufficiale powered by BlaBlaParty. Non è un servizio di trasporto, non è affiliata ufficialmente a WAO Festival, non verifica conducenti o passeggeri e non gestisce pagamenti. Le informazioni raccolte servono solo a ordinare richieste/offerte e a facilitare eventuali compatibilità manuali.
```

---

## 13. Roadmap

Solo dopo interesse reale.

### 13.1 Roadmap prodotto

- form Tally dedicato definitivo;
- board aggiornata manualmente;
- Supabase database;
- dashboard admin;
- profili leggeri;
- stato richiesta;
- filtri per città/data/tratta;
- matching suggerito;
- gruppi Telegram per tratte compatibili;
- report per admin;
- replica per altri festival.

### 13.2 Roadmap agentica

- Chat Insight Agent solo con consenso e anonimizzazione;
- analisi pattern richieste/offerte;
- clustering città/tratte;
- suggerimenti compatibilità;
- automazioni leggere di notifica;
- checkpoint e dashboard operativa.

### 13.3 Roadmap business/partnership

- mostrare demo all’admin privato;
- verificare se il gruppo accetta il form;
- raccogliere 5–10 richieste reali;
- valutare interesse per altri festival;
- eventuale contatto futuro con organizzatori, senza dichiarare partnership prima.

---

## 14. Non fare ora

Out of scope assoluto V0:

```text
pagamenti
prenotazioni
biglietti
ticket resale
verifica patente/documenti
assicurazione
responsabilità sul viaggio
servizio ufficiale WAO
uso logo WAO senza consenso
scraping chat/gruppi
automazione DM
chat interna
mobile app nativa
marketplace completo
algoritmo complesso
backend
Supabase
login
profili pubblici
recensioni conducenti/passeggeri
```

---

## 15. Criteri di successo MVP

La V0 funziona se:

- admin/community owner capisce il valore;
- la demo è mostrabile in privato;
- le persone capiscono entro 10 secondi;
- nessuno pensa che sia un servizio ufficiale WAO;
- nessuno pensa che BlaBlaParty stia organizzando viaggi;
- arrivano almeno 5–10 richieste/offerte reali;
- emergono almeno 2–3 tratte/città compatibili;
- il gruppo diventa più ordinato;
- l’admin percepisce meno caos;
- i dati raccolti sono sufficienti per decidere se passare a board dinamica o Supabase.

Metriche leggere:

```text
numero form inviati
percentuale cerca/offre
città più frequenti
tratte compatibili
richieste incomplete
segnalazioni/rischi
feedback admin
```

---

## 16. Risk register

### Rischio 1 — Sembrare ufficiale WAO

Mitigazione:

```text
usare sempre “demo non ufficiale” e “powered by BlaBlaParty”; non usare logo WAO; non dire partner.
```

### Rischio 2 — Responsabilità sui viaggi

Mitigazione:

```text
ripetere che la board non organizza viaggi, non garantisce passaggi e non gestisce pagamenti.
```

### Rischio 3 — Privacy contatti

Mitigazione:

```text
non pubblicare contatti personali nella board preview; usare review manuale; creare gruppi solo con consenso.
```

### Rischio 4 — Abuso/spam

Mitigazione:

```text
form con campi chiari, review admin, possibilità di archiviare/segnalare richieste strane.
```

### Rischio 5 — Overbuilding

Mitigazione:

```text
landing + form prima; Supabase solo dopo interesse reale.
```

### Rischio 6 — Sembrare agenzia viaggi/transfer

Mitigazione:

```text
evitare parole come prenota, transfer, servizio, corsa, viaggio organizzato, garantito.
```

---

## 17. Visual direction

Usare DNA BlaBlaParty:

- dark premium;
- festival culture;
- accenti violet / electric blue / acid lime controllati;
- card modulari;
- CTA forte;
- Trust & Safety visibile;
- mobile-first.

Adattamento WAO Car Sharing:

- più route/board feeling;
- più natura/notte/camping;
- meno “club city”;
- più “festival journey”;
- badge cerca/offre;
- map/route energy senza diventare agenzia viaggi.

Non usare:

- logo WAO ufficiale senza consenso;
- foto stock auto/valigie;
- estetica travel agency;
- cuori/dating vibe;
- claim ufficiali;
- visual troppo corporate.

---

## 18. Copy base da proteggere

### Claim

```text
Trova o offri un passaggio per WAO Festival.
```

### Subclaim

```text
Le richieste in chat si perdono. Questa board prova a ordinarle per città, giorno, tratta e posti disponibili.
```

### Trust line

```text
Solo 18+ · No pagamenti interni · No viaggi organizzati · Demo non ufficiale
```

### Safety line

```text
BlaBlaParty non organizza viaggi e non garantisce passaggi: aiuta solo a ordinare richieste e offerte.
```

### CTA primaria

```text
Cerco / offro passaggio
```

### CTA finale

```text
Compila il form car sharing
```

---

## 19. Agenti da usare ora

### Product Agent

Ruolo:

```text
proteggere MVP, roadmap e non fare ora.
```

### Trust & Safety Agent

Ruolo:

```text
ridurre rischi legati a car sharing tra sconosciuti.
```

### Creative Director Agent

Ruolo:

```text
rendere la landing credibile, festival-oriented, non travel agency.
```

### Documentation Agent

Ruolo:

```text
creare checkpoint, prompt e contesto riusabile.
```

### Frontend Agent / Antigravity

Non ancora attivo per codice.

Si attiva dopo approvazione di questo MVP Scope.

---

## 20. Modello consigliato

Per documentazione strategica in ChatGPT:

```text
GPT-5.5 Thinking
```

Per Planning Mode in Antigravity:

```text
Gemini Flash Medium
```

Per build landing V0 in Antigravity:

```text
Gemini Flash Medium
```

Per eventuale debug multi-file futuro:

```text
Gemini Flash High o Claude Sonnet Thinking
```

---

## 21. Prossimo step singolo

Creare il prossimo file:

```text
WAO_CAR_SHARING_LANDING_COPY_V0.md
```

Obiettivo:

```text
scrivere copy completo della landing V0: hero, sezioni, board preview, safety, CTA, footer e microcopy del form.
```

Non creare ancora codice.

---

## 22. Checkpoint finale

```text
CHECKPOINT — WAO Car Sharing MVP Scope V0

Data:
2026-06-07

Stato:
MVP Scope definito.

Decisione:
Prima landing + form + board preview statica + review manuale.

Backend:
Non ora.

Supabase:
Non ora.

Brand ufficiale WAO:
Non usare.

Safety:
Obbligatoria e visibile.

Prossimo step:
WAO_CAR_SHARING_LANDING_COPY_V0.md
```
