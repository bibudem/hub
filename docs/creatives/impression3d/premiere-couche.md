# Réparer la première couche d’un modèle 3D

Il arrive que la première couche d’un modèle 3D ne soit pas plate sur le plateau d’impression, ce qui peut compliquer le bon déroulement d’une impression. Voici quelques astuces pour aplatir une face et ainsi avoir une belle première couche.

## Repérer une mauvaise première couche

<div style="position: relative; padding-bottom: 53.02083333333333%; height: 0;"><iframe src="https://www.loom.com/embed/f5844808a82146ad8edd198b0de3cba8?sid=4ab0b3c1-72a3-49a0-9bba-47bb54dc735d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

1. Découper une première fois votre modèle. 
2. Utiliser l’ascenseur à droite pour visualiser les différentes couches et vérifier que la première couche soit bien aplatie sur le plateau. 
3. Dans la vidéo ci-dessus, vous pouvez voir que la première couche pose problème. Seule une petite partie de l’objet est sur le plateau, ce qui signifie que la deuxième couche sera en suspension dans le vide!

## Couper la base du modèle (uniquement disponible dans PrusaSlicer)

<div style="position: relative; padding-bottom: 51.979166666666664%; height: 0;"><iframe src="https://www.loom.com/embed/f7140c9e8bf440a288616bb15698a97e?sid=f6ad2184-f28a-4608-ac96-9e993833650f" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Il est possible d’exporter le modèle pour l’imprimer avec l’Ultimaker : Fichier → Exporter → Exporter le plateau en STL.

## Aligner les vertices à l’aide de Blender

<div style="position: relative; padding-bottom: 53.02083333333333%; height: 0;"><iframe src="https://www.loom.com/embed/9305cabc0e684805bc94e381bc7a2246?sid=f74a8bc8-7a38-4fa2-96e5-910387822f3d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

1. Sélectionner toutes les faces à aligner. 
2. Utiliser l’outil Scale sur l’axe Z et entrer la valeur 0. Ceci va aligner toute la sélection sur le plan XY. 
3. Vous pouvez ensuite déplacer la sélection pour rendre le tout plus esthétique, puis exporter le modèle au format STL.