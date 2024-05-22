---
hide : toc
---

# Mettre en pause une impression 3D

!!! Note "Contribution de la communauté"
    Merci à Maude Auberson-Lavoie d'avoir contribuer à la rédaction de ce tutoriel. Si vous aussi, vous avez des astuces ou des tutoriels à partager, n'hésitez pas à [consulter la section Contribuer](../contribuer.md).

## PrusaSlicer

Régler le Slicer comme d’habitude selon les réglages voulus pour votre modèle, et découper. Avec le slider à droite, inspecter les couches d’impression et trouver la couche précédant la fermeture de la cavité où vous voulez insérer l’objet. Cliquer sur le petit + à côté du curseur avec le clic droit de la souris : ceci permet de sélectionner **Ajouter une pause d’impression**.

![](../../assets/images/creatives/prusa-pause-3.jpeg)
![](../../assets/images/creatives/prusa-pause-2.png)

Sur les captures d’écran, on voit que j’avais simplement cliqué avec le clic gauche, ce qui indique un changement de couleur. Ça fonctionne aussi, mais la machine nous fera alors sortir le filament actuel et il faudra le réinsérer.

Lors de l’impression, l’imprimante se mettra en pause à la couche souhaitée. On peut alors déposer un objet dans l’impression ou changer de filament! 

![](../../assets/images/creatives/prusa-pause-1.jpeg)

## Ultimaker Cura

Comme dans PrusaSlicer, commencer par faire les réglages comme d’habitude et découper. Ensuite, en prévisualisant les couches, trouver le numéro de la couche où on voudrait pauser l’impression. Aller dans **Extensions** > **Post Processing** > **Modify G-Code** . 

![](../../assets/images/creatives/ultimaker-pause-1.png)

Cliquer sur **Add a script** et sélectionner **Pause at Height**. Dans **Pause at**, sélectionner **Layer Number** et en-dessous indiquer le numéro de couche où l’impression doit s’arrêter. Il faudra de nouveau découper le modèle avant de l’enregistrer dans la clé USB.

![](../../assets/images/creatives/ultimaker-pause-1.png)

