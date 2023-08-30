Strive Blog API
Compito di fine settimana

Compito - Gestione degli accessi:

. Aggiungi la Token Based Authentication al tuo progetto precedente

. Tutti gli endpoint (tranne /login) devono essere accessibili solo tramite token

. Collega il tuo API al frontend (allegato):
    ¤ crea le pagine di registrazione&login per il progetto
       Ɵ Dopo un login effettuato con successo, memorizza il token di accesso nel localStorage e
         redireziona l'utente alla homepage
       Ɵ Usa il token ovunque sia necessario

. Inserisci gli endpoint che troverai nella prossima slide:
   Compito - ENDPOINT
   . GET /login  =>  restituisce token di accesso
   . GET /me     =>  restituisce l'utente collegato al token di accesso
   . modifica POST /authors  =>  deve creare un nuovo utente valido
