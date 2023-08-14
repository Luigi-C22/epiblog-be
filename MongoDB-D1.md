MongoDB M6-D1
IL NOSTRO PRIMO API
Compito di inizio settimana

Strive Blog

. Sei responsabile della creazione di una serie di WebAPI per l'applicazione Strive Blog

. (Ti abbiamo fornito un frontend in React per semplificare il lavoro.) => Non servirà a meno che non eseguirai gli esercizi EXTRA (facoltativi)

. Oggi ti occuperai di creare e visualizzare gli autori dei blog

. Nelle prossime slide troverai come strutturare i tuoi documenti mongo e quali creare



Strive Blog - Struttura

_id //generato da mongo
nome //stringa
cognome //stringa
email //stringa
data di nascita //stringa
avatar //stringa



Strive Blog - Rotte

. GET /authors => ritorna la lista degli autori
. GET /authors/123 => ritorna il singolo autore
. POST /authors => crea un nuovo autore



Strive Blog - EXTRA (facoltativi, per ora)

. PUT /authors/123 => modifica l'autore con l'id associato

. DELETE /authors/123 => cancella l'autore con l'id associato

. Connessione del backend al frontend
   . Nota: Se vuoi connettere il backend e frontend oggi dovrai installare il pacchetto 'cors'
     con il comando 'npm i cors'
   . Dovrai quindi importarlo con un input statement
   . Puoi usare cors col seguente comando 'server.use(cors())'
   . Impareremo cos'è CORS prossimamente ;)
