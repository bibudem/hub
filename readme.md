# Le Hub Numérique



Le site utilise le SSG Mkdocs avec le thème [Material for Mkdocs](https://github.com/squidfunk/mkdocs-material). Le texte est rédigé en Markdown. La version *Insiders* est utilisée ici pour avoir plus de fonctionnalités. [En savoir plus](https://squidfunk.github.io/mkdocs-material/insiders/).

## Installation 

Pour cloner le projet : 
``` sh
git clone https://github.com/bibudem/hub.git
```

Créer un environnement virtuel : 
``` sh
python3 -m venv venv
```

et l'activer :
``` sh
. venv/bin/activate 
```

Installer les paquets requis avec pip : 
``` sh
pip install -r requirements.txt
```

et enfin Material for Mkdocs :
``` sh
pip install mkdocs-material
```

## Aperçu local

Si vous voulez lancer un aperçu en local, il faut désactiver certains plugins de la version *Insiders* dans les fichiers de configuration. Certaines caractéristiques ne peuvent pas se générer en local sans la version *Insiders*, comme le *Card grids*, le *Anchor links*, *Navigation path*, etc. et peuvent être désactiver en les mettant en commentaires dans le fichier mkdocs.yml :

``` yaml
# - blog
```

Pour lancer un aperçu en local : 
``` sh
mkdocs serve
```