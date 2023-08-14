Strive Blog API
Compito di fine settimana

. Aggiungiamo al nostro backend la possibilità di aggiungere commenti agli articoli. Il modo migliore per unire i commenti ai post in questo caso è l'embedding.

. Implementa gli endpoint specificati nella prossima slide

Endpoints
. -GET/blogPosts/:id/comments              =>  ritorna tutti i commenti di uno specifico post 
. -GET/blogPosts/:id/comments/:commentId   =>  ritorna un commento specifico di un post specifico
. -POST/blogPosts/:id                      =>  aggiungi un nuovo commento ad un post specifico
. -PUT/blogPosts/:id/comment/:commentId    =>  cambia un commento di un post specifico
. -DELETE/blogPosts/:id/comment/:commentId =>  elimina un commento specifico da un post specifico

