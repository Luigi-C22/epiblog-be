Strive Blog API
Compito di inizio settimana

Compito - Upload di immagini

.Il backend dovrebbe includere queste nuove routes:

. -PATCH/authors/:authorId/avatar, carica un'immagine per l'autore specificato e
   salva URL creata da cloudinary nel batabase.

. -PATCH/blogPosts/:blogPostId/cover, carica un'immagine per il post specificato dall'id.
  Salva l'URL creato da cloudinary nel post corrispondente.

. EXTRA (facoltativo!): Invia un'email all'autore quando pubblica un nuovo blog post
  e quando un nuovo autore si registra sulla piattaforma.
