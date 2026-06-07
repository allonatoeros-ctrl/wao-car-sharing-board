# WAO_CAR_SHARING_BUILD_PLAN_V0.md

Versione: 1.0  
Data creazione: 2026-06-07  
Area: BlaBlaParty / WAO Car Sharing Board / Build Plan  
Stato: piano operativo pre-codice per Antigravity  
Output target: React/Vite landing V0, senza backend

---

## 0. Scopo del file

Questo file prepara il piano di build per creare la prima landing/app V0 di:

```text
WAO Car Sharing Board — powered by BlaBlaParty
```

Non è ancora codice.

Serve a dare ad Antigravity un piano chiaro, sicuro e limitato per costruire una demo V0 mobile-first che raccolga richieste/offerte di car sharing verso WAO Festival tramite form esterno.

Regola centrale:

```text
Costruire una landing V0 semplice, credibile e sicura.
Non costruire una piattaforma completa.
```

---

## 1. Definizione prodotto

WAO Car Sharing Board è una board non ufficiale, powered by BlaBlaParty, per ordinare chi cerca e chi offre passaggi verso WAO Festival.

Non è:

```text
servizio ufficiale WAO
partner WAO
transfer service
agenzia viaggi
marketplace
piattaforma pagamenti
app taxi/NCC
chat interna
sistema di verifica conducenti/passeggeri
```

È:

```text
landing + form + board preview statica + safety copy + review manuale
```

---

## 2. Fonti operative da usare

Antigravity dovrà leggere come fonti principali:

```text
WAO_CAR_SHARING_PROJECT_CONTEXT_V0.md
WAO_CAR_SHARING_MVP_SCOPE_V0.md
WAO_CAR_SHARING_LANDING_COPY_V0.md
WAO_CAR_SHARING_FORM_SCHEMA_V0.md
WAO_CAR_SHARING_BOARD_PREVIEW_DATA_V0.md
WAO_CAR_SHARING_TRUST_AND_SAFETY_V0.md
```

Fonti di supporto:

```text
BLABLAPARTY_STAGE_GATE_BRAND_USAGE_GUIDE.md
BLABLAPARTY_CREATIVE_POLISH_BRIEF.md
BLABLAPARTY_TECHNO_CULTURE_INTELLIGENCE_SKILL.md
03_CODING_CONTEXT_PROMPTS_SECURITY_MASTER.md
```

---

## 3. Obiettivo build V0

Creare una landing React/Vite mobile-first con:

1. Hero chiaro;
2. CTA primaria verso form esterno;
3. sezione “Perché questa board”;
4. sezione “Come funziona”;
5. card “Cerco passaggio”;
6. card “Offro passaggio”;
7. board preview statica;
8. Trust & Safety section;
9. Telegram/community layer prudente;
10. CTA finale;
11. footer con disclaimer non ufficiale.

---

## 4. Stack consigliato

```text
React
Vite
Vanilla CSS
Static data files
External Tally link
Optional Telegram external link
No backend
No Supabase
No login
No payments
```

Regola:

```text
Nessuna nuova dipendenza salvo necessità forte e approvazione esplicita.
```

---

## 5. Repository / nome progetto

Nome cartella consigliato:

```text
wao-car-sharing-board
```

Nome package possibile:

```text
wao-car-sharing-board
```

---

## 6. Architettura file consigliata

```text
src/
  App.jsx
  main.jsx
  index.css

  config/
    links.js

  data/
    boardPreview.js
    steps.js

  components/
    Header.jsx
    Hero.jsx
    WhyBoard.jsx
    HowItWorks.jsx
    RideTypeCards.jsx
    BoardPreview.jsx
    SafetySection.jsx
    CommunitySection.jsx
    FinalCTA.jsx
    Footer.jsx
```

Nota:

```text
Questa struttura è consigliata per ordine e riuso.
Se Antigravity propone una struttura più semplice ma equivalente, va bene purché non aggiunga backend o routing inutile.
```

---

## 7. Config link

Creare:

```text
src/config/links.js
```

Contenuto logico:

```js
export const FORM_URL = "INSERIRE_TALLY_LINK";
export const TELEGRAM_URL = "INSERIRE_TELEGRAM_LINK_OPZIONALE";
```

Regola:

```text
Se il link Tally non è ancora pronto, usare placeholder chiaro e facilmente sostituibile.
```

CTA primaria sempre verso `FORM_URL`.

Telegram resta CTA secondaria.

---

## 8. Dati statici board preview

Creare:

```text
src/data/boardPreview.js
```

Dataset mock, non reale.

Esempi da includere:

```text
Milano → WAO | Offre 2 posti | Andata 14 agosto | Ritorno 18 agosto
Roma → WAO | Cerca 1 posto | Flessibile | Zaino + tenda
Perugia → WAO | Cerca passaggio | Andata 14 agosto
Grosseto → WAO | Offre 1 posto | Tappa possibile Orvieto
Bologna → WAO | Sto valutando | Cerco gruppo auto
Firenze → WAO | Offre 2 posti | Spazio bagagli limitato
```

Regole:

```text
Non usare nomi reali.
Non usare username reali.
Non usare dati presi da chat.
Non fingere activity live reale.
```

---

## 9. Componenti

### 9.1 Header

Deve contenere:

```text
WAO Car Sharing Board
powered by BlaBlaParty
CTA compatta: Cerco / offro passaggio
```

Disclaimer piccolo o badge:

```text
Demo non ufficiale
```

Non usare logo WAO.

---

### 9.2 Hero

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

---

### 9.3 WhyBoard

Obiettivo:

```text
Spiegare che il problema non è il car sharing in sé, ma la dispersione delle richieste nella chat.
```

Copy core:

```text
Il gruppo aiuta, ma una chat non è fatta per ordinare partenze, tappe, date e posti disponibili. Questa board serve a raccogliere le informazioni minime e renderle più leggibili.
```

---

### 9.4 HowItWorks

Step:

```text
1. Dici se cerchi o offri passaggio.
2. Lasci città, giorno, posti o richiesta, bagagli e contatto.
3. Le risposte vengono ordinate per zona, tratta e data.
4. Se ci sono compatibilità, si possono creare piccoli gruppi o contatti diretti.
```

Nota safety:

```text
Le compatibilità sono manuali. Nessun passaggio è garantito.
```

---

### 9.5 RideTypeCards

Due card principali:

#### Cerco passaggio

Campi evocati:

```text
città di partenza
numero persone
andata / ritorno
bagagli / tenda
flessibilità
contatto
```

CTA:

```text
Sto cercando passaggio
```

#### Offro passaggio

Campi evocati:

```text
posti disponibili
tratta prevista
tappe possibili
spazio bagagli
orario indicativo
contributo spese se previsto
```

CTA:

```text
Ho posti in auto
```

---

### 9.6 BoardPreview

Deve sembrare:

```text
ordinata
manuale
leggibile
festival-oriented
non chat
non marketplace
```

Elementi card:

```text
tipo: CERCO / OFFRO / VALUTO
tratta
andata
ritorno
posti
bagagli
vibe/flex
stato: Nuova / Da verificare / Compatibilità possibile
```

Nota sotto board:

```text
Dati di esempio. La board reale verrà compilata manualmente dalle risposte al form.
```

---

### 9.7 SafetySection

Deve essere molto visibile.

Copy principale:

```text
Questa board non organizza viaggi, non gestisce pagamenti e non garantisce passaggi. Raccoglie e ordina richieste/offerte: poi le persone decidono autonomamente se e come accordarsi.
```

Punti:

```text
Solo 18+
Nessun pagamento interno
Nessuna vendita biglietti
Nessuna verifica driver/passenger nella V0
Controlla sempre identità e dettagli prima di partire
Segnala comportamenti strani all’admin
```

---

### 9.8 CommunitySection

Ruolo:

```text
Telegram/community come layer di aggiornamento, non chat caotica principale.
```

Copy:

```text
Il form serve a ordinare le richieste. La community può aiutare a ricevere aggiornamenti e capire quali tratte si stanno muovendo.
```

CTA Telegram opzionale:

```text
Segui aggiornamenti community
```

Non deve superare la CTA form.

---

### 9.9 FinalCTA

Headline:

```text
Stai cercando o offrendo un passaggio?
```

Subtitle:

```text
Lascia i dettagli e aiutiamo a ordinare le compatibilità per città, tratta e giorno.
```

CTA:

```text
Compila il form car sharing
```

Trust line:

```text
Demo non ufficiale · No pagamenti · Nessuna garanzia di passaggio
```

---

### 9.10 Footer

Contenuti:

```text
WAO Car Sharing Board — powered by BlaBlaParty
Demo non ufficiale / community experiment
Non affiliato, approvato o gestito da WAO Festival
No ticket resale · No payments · No travel organization
```

---

## 10. Visual direction

Usare DNA BlaBlaParty, ma adattato al verticale car sharing.

Deve sembrare:

```text
dark premium
festival/electronic culture
board ordinata
mobile-first
serio ma non corporate
community tool
```

Non deve sembrare:

```text
sito WAO ufficiale
agenzia viaggi
transfer service
marketplace auto
dating app
chat Telegram caotica
startup enterprise fredda
```

Palette consigliata:

```text
background: deep black / night navy
primary: electric violet / blue
CTA: acid lime usato poco
safety: green/amber controllato
cards: glass/dark panels
```

Regola lime:

```text
Lime solo per CTA, badge chiave e micro-highlight.
Mai dominante.
```

---

## 11. Mobile-first requirements

Priorità mobile:

```text
CTA visibile nel primo viewport
headline leggibile
card scrollabili o ben impilate
board preview leggibile anche su schermo piccolo
no testi lunghi compressi
bottoni almeno 44-48px
spacing respirato
```

Header mobile:

```text
logo/testo breve + CTA compatta
```

---

## 12. Accessibilità e leggibilità

Richiedere:

```text
contrasto alto
focus-visible per bottoni/link
font size leggibile
aria-label dove utile
testi non troppo piccoli
nessuna animazione aggressiva
```

---

## 13. Cosa NON costruire nel build V0

Divieti assoluti:

```text
backend
Supabase
database
login
auth
pagamenti
prenotazioni
ticket resale
chat interna
matching automatico
dashboard admin
scraping chat/gruppi
uso logo WAO
claim ufficiali
mappe/API
notifiche automatiche
verifica documenti/patente
```

---

## 14. Tally form

La landing deve solo linkare/aprire il form.

Non implementare form interno complesso nella V0.

Possibili opzioni:

```text
1. link esterno Tally in nuova tab;
2. popup Tally, solo se già disponibile e semplice.
```

Regola:

```text
Se non abbiamo ancora il link Tally, usare placeholder FORM_URL e mantenere CTA funzionante come anchor/link sostituibile.
```

---

## 15. Test manuale richiesto

Dopo build:

```text
npm run build
npm run dev
controllo desktop
controllo mobile responsive
click CTA form
click CTA secondaria
verifica board preview
verifica safety visibile
verifica footer disclaimer
controllo che non compaia “ufficiale” o “partner WAO”
controllo che non ci siano loghi WAO
```

---

## 16. Git workflow consigliato

Prima:

```bash
git status
```

Dopo build funzionante:

```bash
npm run build
git diff
git add .
git commit -m "Create WAO car sharing board landing V0"
```

---

## 17. Prompt Antigravity — build V0

Usare questo prompt solo dopo aver creato o aperto la cartella progetto.

```text
Usa i file progetto come fonte principale:
- WAO_CAR_SHARING_PROJECT_CONTEXT_V0.md
- WAO_CAR_SHARING_MVP_SCOPE_V0.md
- WAO_CAR_SHARING_LANDING_COPY_V0.md
- WAO_CAR_SHARING_FORM_SCHEMA_V0.md
- WAO_CAR_SHARING_BOARD_PREVIEW_DATA_V0.md
- WAO_CAR_SHARING_TRUST_AND_SAFETY_V0.md
- WAO_CAR_SHARING_BUILD_PLAN_V0.md

Agisci come Frontend Agent della AI Business Factory.

Obiettivo:
crea una landing React/Vite V0 per “WAO Car Sharing Board — powered by BlaBlaParty”.

Scope:
- landing mobile-first;
- CTA primaria verso form esterno placeholder FORM_URL;
- board preview statica con dati mock;
- Trust & Safety visibile;
- disclaimer demo non ufficiale;
- nessun backend;
- nessun login;
- nessun pagamento;
- nessuna chat interna;
- nessun Supabase;
- nessun logo WAO.

Struttura consigliata:
- src/config/links.js
- src/data/boardPreview.js
- src/components/Header.jsx
- src/components/Hero.jsx
- src/components/WhyBoard.jsx
- src/components/HowItWorks.jsx
- src/components/RideTypeCards.jsx
- src/components/BoardPreview.jsx
- src/components/SafetySection.jsx
- src/components/CommunitySection.jsx
- src/components/FinalCTA.jsx
- src/components/Footer.jsx
- src/App.jsx
- src/index.css

Visual direction:
- dark premium;
- festival/electronic culture;
- board ordinata;
- violet/blue glow controllato;
- acid lime solo per CTA/badge;
- mobile-first;
- serio ma non corporate.

Vincoli assoluti:
- non dire “official”;
- non dire “partner WAO”;
- non usare logo WAO;
- non vendere biglietti;
- non creare pagamenti;
- non organizzare viaggi;
- non garantire passaggi;
- non creare backend;
- non aggiungere dipendenze inutili.

Processo:
1. crea struttura file;
2. implementa componenti semplici;
3. crea CSS responsive;
4. usa dati mock statici;
5. esegui npm run build;
6. riassumi file creati e test effettuati.

Fermati e chiedi prima di aggiungere qualunque cosa fuori scope.
```

Modello consigliato:

```text
Gemini Flash Medium
```

Se Antigravity deve fare solo micro-fix successivi:

```text
Gemini Flash Low / Medium
```

Se emergono bug di routing/build multi-file:

```text
Gemini Flash High oppure Pro
```

---

## 18. Prompt Antigravity — read-only review prima del build

Se vuoi essere più prudente, usare prima questo:

```text
Modalità read-only. Non creare e non modificare file.

Leggi:
- WAO_CAR_SHARING_PROJECT_CONTEXT_V0.md
- WAO_CAR_SHARING_MVP_SCOPE_V0.md
- WAO_CAR_SHARING_LANDING_COPY_V0.md
- WAO_CAR_SHARING_FORM_SCHEMA_V0.md
- WAO_CAR_SHARING_BOARD_PREVIEW_DATA_V0.md
- WAO_CAR_SHARING_TRUST_AND_SAFETY_V0.md
- WAO_CAR_SHARING_BUILD_PLAN_V0.md

Output:
1. cosa deve essere costruito;
2. file/componenti consigliati;
3. rischi principali;
4. cosa non costruire;
5. conferma se il build plan è sicuro;
6. eventuali micro-correzioni prima del build.

Non proporre backend, Supabase, login, pagamenti, chat interna o uso logo WAO.
```

Modello consigliato:

```text
Gemini Flash Medium
```

---

## 19. Definition of Done

La V0 è completata quando:

```text
[ ] landing carica in locale;
[ ] mobile layout funziona;
[ ] CTA form presente e sostituibile;
[ ] board preview statica visibile;
[ ] safety section chiara;
[ ] footer dice demo non ufficiale;
[ ] non appare “official” o “partner WAO”;
[ ] non c’è logo WAO;
[ ] non ci sono pagamenti/login/backend;
[ ] npm run build passa;
[ ] git commit fatto.
```

---

## 20. Prossimo step singolo

Prossimo step consigliato:

```text
Creare il progetto React/Vite in Antigravity usando WAO_CAR_SHARING_BUILD_PLAN_V0.md come fonte principale.
```

Prima azione operativa:

```text
Aprire Antigravity in una nuova cartella wao-car-sharing-board e usare il prompt “build V0”.
```

Modello consigliato:

```text
Gemini Flash Medium
```
