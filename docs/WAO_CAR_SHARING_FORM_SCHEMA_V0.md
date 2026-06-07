# WAO_CAR_SHARING_FORM_SCHEMA_V0.md

Versione: 1.0  
Data creazione: 2026-06-07  
Area: BlaBlaParty / WAO Car Sharing Board / Form Schema  
Stato: schema operativo per Tally form V0  
Uso previsto: creare il form esterno prima della landing/app V0  

---

## 0. Scopo del file

Questo file definisce il **form V0** per WAO Car Sharing Board.

Il form serve a raccogliere in modo ordinato chi:

- cerca un passaggio verso WAO Festival;
- offre posti in auto verso WAO Festival;
- ha bisogno di coordinarsi per andata, ritorno, tappe, bagagli e contatti.

Regola centrale:

```text
Il form non prenota viaggi.
Il form non vende passaggi.
Il form non gestisce pagamenti.
Il form raccoglie informazioni per ordinare manualmente richieste/offerte.
```

---

## 1. Nome form

Nome consigliato su Tally:

```text
WAO Car Sharing Board — Cerco / Offro Passaggio
```

Nome breve interno:

```text
WAO Car Sharing Form V0
```

---

## 2. Intro form

Testo iniziale consigliato:

```text
WAO Car Sharing Board è una board non ufficiale, powered by BlaBlaParty, per raccogliere e ordinare chi cerca e chi offre passaggi verso WAO Festival.

Compila il form con città, date, posti, bagagli e contatto. Le richieste vengono revisionate manualmente e ordinate per zona, tratta e compatibilità.

Importante: questa board non organizza viaggi, non gestisce pagamenti, non vende biglietti e non garantisce passaggi. Serve solo a mettere ordine tra richieste/offerte.
```

---

## 3. Regole prima di iniziare

Campo obbligatorio: checkbox.

Label:

```text
Confermo di aver capito che questa è una board non ufficiale, non un servizio WAO ufficiale, e che BlaBlaParty non organizza né garantisce passaggi.
```

Opzioni:

```text
Sì, ho capito
```

Obbligatorio: sì.

---

## 4. Campo 18+

Tipo campo: checkbox obbligatoria.

Label:

```text
Confermi di avere almeno 18 anni?
```

Opzioni:

```text
Sì, ho almeno 18 anni
```

Obbligatorio: sì.

Nota:

```text
Se non conferma 18+, non usare la risposta per creare compatibilità.
```

---

## 5. Identità leggera

### 5.1 Nome / nickname

Tipo campo: short answer.  
Obbligatorio: sì.

Label:

```text
Nome o nickname
```

Placeholder:

```text
Es. Eros, Marco, Giulia...
```

Nota:

```text
Non chiedere cognome obbligatorio nella V0.
```

---

### 5.2 Contatto Telegram

Tipo campo: short answer.  
Obbligatorio: sì.

Label:

```text
Username Telegram
```

Placeholder:

```text
Es. @username
```

Helper text:

```text
Serve solo per eventuale contatto manuale o mini gruppo compatibile.
```

---

### 5.3 Instagram opzionale

Tipo campo: short answer.  
Obbligatorio: no.

Label:

```text
Instagram, opzionale
```

Placeholder:

```text
Es. @username
```

---

## 6. Tipo richiesta

Tipo campo: multiple choice.  
Obbligatorio: sì.

Label:

```text
Cosa vuoi fare?
```

Opzioni:

```text
Cerco passaggio
Offro passaggio
Sto valutando, voglio capire se ci sono persone dalla mia zona
```

Regola:

```text
Usare logica condizionale: se "Cerco passaggio" mostra sezione Cerco. Se "Offro passaggio" mostra sezione Offro. Se "Sto valutando" mostra campi base + note.
```

---

## 7. Campi comuni viaggio

Questi campi vanno mostrati a tutti.

### 7.1 Città di partenza

Tipo campo: short answer.  
Obbligatorio: sì.

Label:

```text
Da quale città parti o vorresti partire?
```

Placeholder:

```text
Es. Milano, Roma, Perugia, Grosseto, Bologna...
```

---

### 7.2 Zona / punto indicativo

Tipo campo: short answer.  
Obbligatorio: no.

Label:

```text
Zona o punto indicativo di partenza, se lo sai
```

Placeholder:

```text
Es. Milano Centrale, Roma Tiburtina, zona Perugia, provincia di Grosseto...
```

---

### 7.3 Data andata

Tipo campo: date oppure multiple choice se Tally è più semplice.  
Obbligatorio: sì.

Label:

```text
Quando vorresti partire per l'andata?
```

Opzioni consigliate se multiple choice:

```text
13 agosto
14 agosto
15 agosto
Altro / da definire
```

Nota:

```text
Le date esatte possono essere adattate in base al calendario reale del festival.
```

---

### 7.4 Data ritorno

Tipo campo: date oppure multiple choice.  
Obbligatorio: sì.

Label:

```text
Quando vorresti rientrare?
```

Opzioni consigliate:

```text
17 agosto
18 agosto
19 agosto
Altro / da definire
```

---

### 7.5 Flessibilità oraria

Tipo campo: multiple choice.  
Obbligatorio: sì.

Label:

```text
Quanto sei flessibile su orari e tappe?
```

Opzioni:

```text
Molto flessibile
Abbastanza flessibile
Poco flessibile
Ho orari già abbastanza fissi
```

---

### 7.6 Bagagli / tenda

Tipo campo: checkboxes.  
Obbligatorio: sì.

Label:

```text
Che bagagli avrai?
```

Opzioni:

```text
Solo zaino piccolo
Zaino grande / trolley
Tenda
Attrezzatura camping
Altro
```

---

### 7.7 Vibe viaggio

Tipo campo: multiple choice oppure checkboxes.  
Obbligatorio: sì.

Label:

```text
Che vibe cerchi per il viaggio?
```

Opzioni:

```text
Tranquillo
Social
Music-first
Super flessibile
No drama
Non importa, basta organizzarsi bene
```

---

## 8. Sezione: Cerco passaggio

Mostrare solo se utente seleziona: `Cerco passaggio`.

### 8.1 Numero persone

Tipo campo: number oppure multiple choice.  
Obbligatorio: sì.

Label:

```text
Per quante persone cerchi passaggio?
```

Opzioni:

```text
1
2
3
4+
```

---

### 8.2 Andata / ritorno

Tipo campo: checkboxes.  
Obbligatorio: sì.

Label:

```text
Cerchi passaggio per:
```

Opzioni:

```text
Solo andata
Solo ritorno
Andata e ritorno
Valuto entrambe le opzioni
```

---

### 8.3 Possibilità di raggiungere città vicine

Tipo campo: multiple choice + testo opzionale.  
Obbligatorio: sì.

Label:

```text
Puoi raggiungere una città vicina per farti trovare?
```

Opzioni:

```text
Sì
No
Forse, dipende
```

Campo testo opzionale:

```text
Quali città o zone potresti raggiungere?
```

Placeholder:

```text
Es. posso arrivare a Bologna, Firenze, Perugia...
```

---

### 8.4 Contributo spese

Tipo campo: multiple choice.  
Obbligatorio: sì.

Label:

```text
Se trovi passaggio, sei disponibile a contribuire a benzina/pedaggi?
```

Opzioni:

```text
Sì
Da valutare con chi guida
No
```

Nota safety:

```text
La board non gestisce pagamenti. Eventuali accordi sono privati tra persone.
```

---

### 8.5 Note richiesta

Tipo campo: long answer.  
Obbligatorio: no.

Label:

```text
Note utili per chi potrebbe offrirti passaggio
```

Placeholder:

```text
Es. ho una tenda, sono flessibile sull'orario, posso arrivare in stazione, cerco anche ritorno...
```

---

## 9. Sezione: Offro passaggio

Mostrare solo se utente seleziona: `Offro passaggio`.

### 9.1 Posti disponibili

Tipo campo: multiple choice oppure number.  
Obbligatorio: sì.

Label:

```text
Quanti posti liberi hai in auto?
```

Opzioni:

```text
1
2
3
4+
Da definire
```

---

### 9.2 Tratta prevista

Tipo campo: long answer.  
Obbligatorio: sì.

Label:

```text
Quale tratta pensi di fare?
```

Placeholder:

```text
Es. Milano → WAO, Roma → Orvieto → WAO, Grosseto → WAO...
```

---

### 9.3 Tappe possibili

Tipo campo: long answer.  
Obbligatorio: no.

Label:

```text
Puoi fare tappe intermedie?
```

Placeholder:

```text
Es. posso passare da Bologna / Firenze / Perugia / Orvieto...
```

---

### 9.4 Spazio bagagli

Tipo campo: multiple choice.  
Obbligatorio: sì.

Label:

```text
Quanto spazio bagagli hai?
```

Opzioni:

```text
Poco, solo zaini piccoli
Medio, qualche zaino/trolley
Buono, anche tenda o camping leggero
Da definire
```

---

### 9.5 Orario indicativo partenza

Tipo campo: short answer.  
Obbligatorio: sì.

Label:

```text
Orario indicativo di partenza
```

Placeholder:

```text
Es. mattina 14 agosto, pomeriggio, sera, da definire...
```

---

### 9.6 Piano ritorno

Tipo campo: long answer.  
Obbligatorio: no.

Label:

```text
Hai già un piano per il ritorno?
```

Placeholder:

```text
Es. torno il 18 mattina, forse resto un giorno in più, ritorno da definire...
```

---

### 9.7 Contributo spese indicativo

Tipo campo: short answer.  
Obbligatorio: no.

Label:

```text
Contributo spese indicativo, se vuoi indicarlo
```

Placeholder:

```text
Es. benzina/pedaggi da dividere, cifra da concordare...
```

Helper text:

```text
La board non gestisce pagamenti. Eventuali accordi restano privati tra persone.
```

---

### 9.8 Preferenza contatto

Tipo campo: multiple choice.  
Obbligatorio: sì.

Label:

```text
Come preferisci essere contattato se troviamo persone compatibili?
```

Opzioni:

```text
Telegram diretto
Mini gruppo Telegram per la tratta
Prima messaggio admin / BlaBlaParty
Da valutare
```

---

## 10. Sezione: Sto valutando

Mostrare se utente seleziona: `Sto valutando, voglio capire se ci sono persone dalla mia zona`.

### 10.1 Interesse

Tipo campo: multiple choice.  
Obbligatorio: sì.

Label:

```text
Cosa ti aiuterebbe a decidere?
```

Opzioni:

```text
Sapere se parte qualcuno dalla mia città
Trovare passaggio
Offrire posto solo se trovo persone affidabili
Capire rientro e logistica
Altro
```

### 10.2 Note

Tipo campo: long answer.  
Obbligatorio: no.

Label:

```text
Spiega meglio cosa stai valutando
```

---

## 11. Consenso contatto manuale

Tipo campo: checkbox obbligatoria.

Label:

```text
Accetto di essere contattato manualmente via Telegram/Instagram solo se ci sono compatibilità utili per il car sharing.
```

Opzioni:

```text
Sì, accetto
```

---

## 12. Consenso privacy base V0

Tipo campo: checkbox obbligatoria.

Label:

```text
Accetto che i dati inseriti vengano usati solo per ordinare manualmente richieste/offerte di car sharing verso WAO Festival e per eventuali contatti compatibili.
```

Opzioni:

```text
Sì, accetto
```

Nota:

```text
Per V0 manuale, evitare raccolta dati non necessari. Non chiedere documento, patente, indirizzo, telefono obbligatorio o informazioni sensibili.
```

---

## 13. Disclaimer finale prima dell'invio

Testo prima del bottone submit:

```text
Ricorda: WAO Car Sharing Board è una board non ufficiale. Non organizza viaggi, non gestisce pagamenti, non verifica driver o passeggeri e non garantisce passaggi. Serve solo a raccogliere e ordinare richieste/offerte. Usa buon senso, verifica sempre con chi ti accordi e non condividere dati sensibili pubblicamente.
```

Bottone submit:

```text
Invia richiesta car sharing
```

---

## 14. Thank you page

Titolo:

```text
Richiesta ricevuta ✅
```

Testo:

```text
Grazie. La tua richiesta/offerta verrà revisionata manualmente e ordinata per città, tratta e data.

Se troviamo compatibilità utili, potresti essere contattato via Telegram/Instagram o inserito in un mini gruppo dedicato alla tratta.

La board non garantisce passaggi e non organizza viaggi: serve solo a mettere ordine tra persone che cercano o offrono car sharing.
```

CTA opzionale:

```text
Torna alla board
```

Oppure:

```text
Segui aggiornamenti BlaBlaParty
```

---

## 15. Campi da NON chiedere nella V0

Non chiedere:

```text
cognome obbligatorio
numero documento
patente
indirizzo di casa
telefono obbligatorio
dati sanitari
foto documento
pagamento
IBAN
carta di credito
screen ticket
informazioni troppo personali
```

Motivo:

```text
La V0 deve essere leggera, manuale e prudente. Più dati sensibili raccogliamo, più aumentano responsabilità e complessità privacy/safety.
```

---

## 16. Output CSV / tabella manuale consigliata

Quando arrivano risposte, esportare o leggere i dati in una tabella con colonne:

```text
Timestamp
Nickname
Telegram
Instagram
18+
Tipo richiesta
Città partenza
Zona partenza
Data andata
Data ritorno
Flessibilità
Bagagli
Vibe
Numero persone
Posti disponibili
Tratta
Tappe
Spazio bagagli
Contributo spese
Note
Stato review
Cluster città/zona
Compatibilità suggerita
Azione admin
```

Stati review:

```text
Nuova
Da chiarire
Compatibilità possibile
Contattato
Mini gruppo creato
Archiviata
Scartata per safety/spam
```

---

## 17. Criteri manuali di compatibilità

Per la V0 non serve algoritmo.

Matching manuale basato su:

```text
1. stessa città o zona vicina;
2. stessa data andata;
3. stessa data ritorno o ritorno compatibile;
4. numero posti vs numero persone;
5. spazio bagagli/tenda;
6. tappe possibili;
7. flessibilità oraria;
8. vibe viaggio compatibile;
9. disponibilità a contributo spese;
10. contatti chiari e non sospetti.
```

---

## 18. Safety flags manuali

Segnalare o non usare risposte con:

```text
utente minorenne o 18+ non confermato;
contatto mancante o ambiguo;
richiesta di pagamento anticipato;
vendita biglietti;
linguaggio aggressivo o molesto;
richieste fuori tema;
dati troppo sensibili condivisi;
spam;
promozione servizio transfer/NCC/taxi;
claim ufficiali non verificati;
```

---

## 19. Prossimo step singolo

Creare:

```text
WAO_CAR_SHARING_BOARD_PREVIEW_DATA_V0.md
```

Obiettivo:

```text
Definire i dati statici/mock della board preview da mostrare nella landing V0, senza fingere utenti reali e senza usare dati personali reali.
```

Modello consigliato:

```text
GPT-5.5 Thinking qui in chat
```

Quando si passerà ad Antigravity:

```text
Gemini Flash Medium
```

Perché:

```text
La build sarà una landing React/Vite semplice, statica, senza backend e senza Supabase.
```
