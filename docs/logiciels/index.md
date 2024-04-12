---
icon : material/list-box-outline
hide : 
  - toc
search:
  exclude: true
glightbox: false
cover : logiciels.jpg
---

# Logiciels 

L'offre logicielle disponible sur les ordinateurs des bibliothèques de l'Université de Montréal va des navigateurs Internet les plus populaires, à la suite bureautique Microsoft Office, en passant par plusieurs logiciels spécialisés. Ici-bas, la liste non-exhaustive des logiciels offerts à la communauté de l'Université de Montréal.

Description des icônes :

- :simple-opensourceinitiative: : Logiciel libre.
- :green_circle: : Disponible en téléchargement.
- :material-network: : Accessible à distance.

<div style="display:flex">
  <input class="input-search"
    id="search"
    type="text"
    placeholder="Rechercher un logiciel"
    _="on keyup
      if the event's key is 'Escape'
        set my value to ''
        trigger keyup
      else
        show <tr/> in next <tbody/> when its textContent.toLowerCase() contains my value.toLowerCase()" />

  <button class="btn-clear md-button md-button--primary"
    _="on click set #search.value to '' then trigger keyup on #search">Effacer</button>

  
</div>

Filtrer par catégorie : 
<div style="">

  <a href="#" class=""
  _="on click
    event.preventDefault()
    set #search.value to '' then trigger keyup on #search">Tous les logiciels</a>
-
  <a href="#" class=""
   _="on click
    event.preventDefault()
    set #search.value to 'Accessibilité' then trigger keyup on #search">Accessibilité</a>

-
  <a href="#" class=""
    _="on click
    event.preventDefault()
    set #search.value to 'Analyse statistique' then trigger keyup on #search">Analyse statistique</a>

-
  <a href="#" class=""
   _="on click
    event.preventDefault()
    set #search.value to 'Bureautique' then trigger keyup on #search">Bureautique</a>

-
  <a href="#" class=""
    _="on click
    event.preventDefault()
    set #search.value to 'Création et édition' then trigger keyup on #search">Création et édition</a>

-
  <a href="#" class=""
   _="on click
    event.preventDefault()
    set #search.value to 'Gestion bibliographique' then trigger keyup on #search">Gestion bibliographique</a>

-
  <a href="#" class=""
    _="on click
    event.preventDefault()
    set #search.value to 'Sciences' then trigger keyup on #search">Sciences</a>

-
  <a href="#" class=""
    _="on click
    event.preventDefault()
    set #search.value to 'Système dʼinformation géographique' then trigger keyup on #search">Système d'information géographique</a>

-
  <a href="#" class=""
    _="on click
    event.preventDefault()
    set #search.value to 'Traitement de données' then trigger keyup on #search">Traitement de données</a>





</div>

{{ read_csv('docs/logiciels/logiciels.csv') }}

<script src="https://unpkg.com/tablesort@5.3.0/dist/tablesort.min.js"></script>
<script>
  var tables = document.querySelectorAll("article table")
  new Tablesort(tables.item(tables.length - 1));
</script>