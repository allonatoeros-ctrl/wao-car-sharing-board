# WAO_CAR_SHARING_BOARD_PREVIEW_DATA_V0.md

Versione: 1.0  
Data creazione: 2026-06-07  
Area: BlaBlaParty / WAO Car Sharing Board / Static Preview Data  
Stato: dati mock per landing V0, pre-codice  
Uso previsto: Antigravity / React landing V0 / board preview statica

---

## 0. Scopo del file

Questo file definisce i dati statici/mock da usare nella **board preview** della landing V0 di **WAO Car Sharing Board — powered by BlaBlaParty**.

La board preview deve far capire in pochi secondi il valore del prodotto:

```text
Le richieste sparse in chat diventano righe ordinate per tratta, giorno, posti, bagagli e vibe.
```

Regola centrale:

```text
Questi dati sono esempi dimostrativi.
Non devono essere presentati come richieste reali.
Non devono usare nomi, username o dati presi da chat/gruppi reali.
```

---

## 1. Ruolo della board preview nella landing

La board preview serve a distinguere WAO Car Sharing Board da:

```text
chat Telegram caotica
servizio transfer
marketplace
agenzia viaggi
app taxi/NCC
servizio ufficiale WAO
```

Deve comunicare:

```text
ordine
leggerezza
compatibilità manuale
community helper
sicurezza nei limiti dichiarati
```

Non deve sembrare:

```text
database live
prenotazione garantita
servizio pagamenti
sistema ufficiale del festival
elenco utenti verificati
```

---

## 2. Label chiave della board

Usare label semplici e leggibili da mobile.

### Tipologia richiesta

```text
CERCO
OFFRO
VALUTO
```

### Stato richiesta

```text
Nuova richiesta
Da ordinare
Compatibilità possibile
Gruppo possibile
In attesa dettagli
```

### Tratta

```text
Milano → WAO
Roma → WAO
Firenze → WAO
Bologna → WAO
Perugia → WAO
Grosseto → WAO
Orvieto → WAO
Centro Italia → WAO
```

### Giorni

```text
Andata 14 agosto
Ritorno 18 agosto
Andata flessibile
Ritorno da definire
Weekend completo
```

### Bagagli

```text
Zaino
Zaino + tenda
Bagaglio leggero
Tenda piccola
Spazio bagagli limitato
Spazio tenda ok
```

### Vibe viaggio

```text
Tranquillo
Social
Music-first
Flessibile
No drama
```

---

## 3. Board preview — dataset statico V0

Queste righe possono essere usate come card nella landing.

### Card 1 — Offre passaggio da Milano

```yaml
id: preview-001
type: OFFRO
route: Milano → WAO
status: Compatibilità possibile
outbound: Andata 14 agosto
return: Ritorno 18 agosto
seats: 2 posti disponibili
luggage: Spazio bagagli medio
stops: Possibile tappa zona Bologna
vibe: Music-first / tranquillo
note: Ideale per chi parte dal Nord e ha bisogno anche del ritorno.
```

Copy card:

```text
Milano → WAO
OFFRO · 2 posti
Andata 14 agosto · Ritorno 18 agosto
Spazio bagagli medio · possibile tappa Bologna
Vibe: music-first / tranquillo
```

---

### Card 2 — Cerca passaggio da Roma

```yaml
id: preview-002
type: CERCO
route: Roma → WAO
status: Nuova richiesta
outbound: Andata 14 agosto
return: Ritorno 18 agosto
seats: 1 posto cercato
luggage: Zaino + tenda
stops: Può raggiungere zona raccordo / stazione
vibe: Social / flessibile
note: Buona compatibilità con auto da Roma o Centro Italia.
```

Copy card:

```text
Roma → WAO
CERCO · 1 posto
Andata 14 agosto · ritorno 18 agosto
Zaino + tenda · può muoversi su Roma
Vibe: social / flessibile
```

---

### Card 3 — Cerca passaggio da Perugia

```yaml
id: preview-003
type: CERCO
route: Perugia → WAO
status: Da ordinare
outbound: Andata flessibile
return: Ritorno da definire
seats: 1 posto cercato
luggage: Bagaglio leggero
stops: Può arrivare a Orvieto
vibe: Tranquillo / no drama
note: Potenziale match con tratte da Umbria, Toscana o Roma.
```

Copy card:

```text
Perugia → WAO
CERCO · 1 posto
Andata flessibile · ritorno da definire
Bagaglio leggero · può arrivare a Orvieto
Vibe: tranquillo / no drama
```

---

### Card 4 — Offre passaggio da Grosseto

```yaml
id: preview-004
type: OFFRO
route: Grosseto → WAO
status: Gruppo possibile
outbound: Andata 14 agosto
return: Ritorno 18 agosto
seats: 1 posto disponibile
luggage: Spazio tenda ok
stops: Tappa possibile zona Orvieto
vibe: Flessibile / festival mood
note: Utile per persone in Toscana o lungo la tratta verso il festival.
```

Copy card:

```text
Grosseto → WAO
OFFRO · 1 posto
Andata 14 agosto · ritorno 18 agosto
Spazio tenda ok · tappa possibile Orvieto
Vibe: flessibile / festival mood
```

---

### Card 5 — Valuta partenza da Bologna

```yaml
id: preview-005
type: VALUTO
route: Bologna → WAO
status: In attesa dettagli
outbound: Andata 14 o 15 agosto
return: Ritorno flessibile
seats: 1-2 persone
luggage: Zaino / bagaglio leggero
stops: Può unirsi a auto da Nord Italia
vibe: Music-first / easy
note: Esempio utile per chi non ha ancora piano definitivo ma vuole essere ordinato nella board.
```

Copy card:

```text
Bologna → WAO
VALUTO · 1-2 persone
Andata 14 o 15 agosto · ritorno flessibile
Zaino / bagaglio leggero
Vibe: music-first / easy
```

---

### Card 6 — Offre passaggio da Firenze

```yaml
id: preview-006
type: OFFRO
route: Firenze → WAO
status: Compatibilità possibile
outbound: Andata 14 agosto
return: Ritorno da confermare
seats: 2 posti disponibili
luggage: Spazio bagagli limitato
stops: Tappe brevi possibili
vibe: Tranquillo / puntuale
note: Esempio per chi offre ma deve ancora chiarire ritorno e spazio.
```

Copy card:

```text
Firenze → WAO
OFFRO · 2 posti
Andata 14 agosto · ritorno da confermare
Spazio bagagli limitato · tappe brevi possibili
Vibe: tranquillo / puntuale
```

---

## 4. Mini statistiche mock per la preview

Le statistiche vanno usate solo se chiaramente presentate come esempi.

### Variante prudente consigliata

```text
Esempio board · dati demo
```

### Micro stats possibili

```yaml
requests_demo: 6 esempi
routes_demo: 5 tratte
mode: Review manuale
status: Demo non ufficiale
```

Copy UI:

```text
Board preview
Esempi dimostrativi · richieste reali solo dopo compilazione form
```

Oppure:

```text
Esempio di ordine: tratta, giorno, posti, bagagli e vibe in una sola card.
```

---

## 5. Layout consigliato per la board preview

### Mobile

Usare carousel orizzontale o lista verticale compatta.

Gerarchia card:

```text
[Tipo: CERCO/OFFRO]
Tratta
Giorni
Posti
Bagagli/tappe
Vibe
Stato
```

### Desktop

Usare griglia 2 o 3 colonne.

Possibile struttura:

```text
Header board
↓
Filtro mock: Tutti / Cerco / Offro
↓
Cards preview
↓
Safety note
```

Nota: i filtri possono essere solo visuali/statici nella V0, non devono promettere funzionalità reale se non implementata.

---

## 6. Badge visuali consigliati

### Badge type

```text
CERCO = badge outline / violet-blue
OFFRO = badge acid lime controllato
VALUTO = badge amber soft
```

### Badge safety

```text
18+
No pagamenti interni
Demo non ufficiale
Review manuale
```

### Badge status

```text
Compatibilità possibile
Da ordinare
Gruppo possibile
In attesa dettagli
```

Regola palette:

```text
Acid lime solo per CTA o badge importanti.
Non rendere ogni card neon.
```

---

## 7. Safety note da mettere sotto la board

Versione breve:

```text
La board non garantisce passaggi e non verifica conducenti o passeggeri. Serve a ordinare le richieste: ogni accordo resta tra le persone coinvolte.
```

Versione più completa:

```text
WAO Car Sharing Board non organizza viaggi, non gestisce pagamenti e non garantisce passaggi. Le richieste vengono ordinate manualmente per aiutare a trovare compatibilità, ma ogni accordo resta responsabilità delle persone coinvolte.
```

---

## 8. Copy da evitare nella board

Non usare:

```text
Prenota ora
Passaggio garantito
Driver verificato
Passeggero verificato
Pagamento sicuro
Transfer ufficiale
WAO official car sharing
Partner WAO
Compra posto
Blocca il tuo sedile
```

Motivo:

```text
Queste frasi aumentano responsabilità percepita e fanno sembrare il progetto un servizio ufficiale, commerciale o assicurato.
```

---

## 9. Dati da NON inserire

Non inserire:

```text
nomi reali
username Telegram reali
numeri di telefono
foto persone
screenshot chat
richieste copiate da gruppi
città + dettagli troppo specifici di persone reali
prezzi contributo spese come se fossero fissi
targhe auto
modelli auto
orari precisi se sembrano reali
```

Per V0 la board preview deve essere:

```text
realistica, ma dichiaratamente demo.
```

---

## 10. Mapping eventuale per React/Vite

Quando passeremo alla build, questi dati possono diventare un array statico.

Esempio struttura dati:

```js
const boardPreview = [
  {
    id: 'preview-001',
    type: 'OFFRO',
    route: 'Milano → WAO',
    status: 'Compatibilità possibile',
    outbound: 'Andata 14 agosto',
    returnDate: 'Ritorno 18 agosto',
    seats: '2 posti disponibili',
    luggage: 'Spazio bagagli medio',
    stops: 'Possibile tappa Bologna',
    vibe: 'Music-first / tranquillo',
  },
]
```

Nota:

```text
Questo mapping è solo riferimento futuro.
Non creare codice ora.
```

---

## 11. Criteri di successo della board preview

La board preview funziona se l’utente capisce:

```text
1. posso cercare o offrire passaggio;
2. non devo scrivere tutto in chat in modo disordinato;
3. città, data, bagagli e vibe sono importanti;
4. qualcuno rivede manualmente le richieste;
5. non è un servizio ufficiale o garantito;
6. il passo giusto è compilare il form.
```

---

## 12. Prossimo step singolo

Creare:

```text
WAO_CAR_SHARING_TRUST_AND_SAFETY_V0.md
```

Obiettivo:

```text
Fissare regole, disclaimer, limiti di responsabilità, comportamento vietato e microcopy safety prima di generare il prompt di build.
```

Modello consigliato:

```text
GPT-5.5 Thinking qui in chat
```

Motivo:

```text
Il tema car sharing tra sconosciuti è più sensibile della normale crew board: serve precisione su cosa promettere e cosa non promettere.
```
