
# Comment utiliser un multimètre

Les trois principales utilisations d'un multimètres :

## Ohmmètre

Sert à mesurer la résistance (en ohm) d’un élément. Il peut être utilisé pour vérifier si un câble dupont est brisé, ou indiquer si un circuit est ouvert ou fermé.

1. Brancher un câble sur l’entrée avec le symbole omega (symbole de l’unité ohm). Et l’autre sur COM. L’utilisation des câbles/pinces croco rend la mesure plus facile.
2. Tourner le bouton pour aligner avec le symbole omega.
3. Mettre en contact un câble avec une patte de la résistance, et l’autre câble, avec l’autre patte. Le sens de branchement n’a pas d’importance, car les résistances ne sont pas polarisé.
4. Si l’écran affiche **OL,** cela signifie résistance infini, donc qu’il n’y a aucune conductivité d’électricité. 
5. Porter attention à l’unité de mesure sur l’écran, k = kilo ; M = Mega.

Exemple avec une résistance de 200 ohm. Note : La résistance peut varier légèrement selon la qualité de la composante et la température.
![Ohmmètre](../../assets/images/creatives/multimetre1.webp)

Exemple avec un interrupteur ouvert (le courant ne passe pas).
![Ohmmètre](../../assets/images/creatives/multimetre2.webp)

Exemple avec un interrupteur fermé (le courant passe).
![Ohmmètre](../../assets/images/creatives/multimetre3.webp)

Schéma : 
![Ohmmètre](../../assets/images/creatives/multimetre4.webp)
![Ohmmètre](../../assets/images/creatives/multimetre5.webp)

## Voltmètre

Sert à mesurer la tension (en volt) au borne d’un élément. Utile pour vérifier si une pile 9V est déchargé, ou si une prise USB fourni bien 5V.

1. Brancher un câble sur l’entrée avec le symbole V. Et l’autre sur COM.
2. Tourner le bouton pour aligner avec le symbole V avec une barre au dessus, symbolisant le courant continue.
3. Mettre en contact un câble d’un côté d’un élément, l’autre câble de l’autre côté.

Exemple des PIN 5V et GND d’un arduino.
![Voltmètre](../../assets/images/creatives/multimetre6.webp)

Exemple de la tension aux bornes d’une résistance.
![Voltmètre](../../assets/images/creatives/multimetre7.webp)

Schéma :
![Voltmètre](../../assets/images/creatives/multimetre8.webp)
![Voltmètre](../../assets/images/creatives/multimetre9.webp)

## Ampèremètre

Sert à mesurer l’intensité (en ampère) d’un circuit. Utile pour connaitre l’intensité (la consommation) de courant. 

1. Brancher un câble sur l’entrée avec le symbole mA et l’autre sur COM.
2. Tourner le bouton pour aligner avec le symbole mA.
3. L’ampèremètre doit être brancher en série dans le circuit, pour mesurer le courant qui le traverse. C’est à dire, l’entrée dans le multimètre doit être branché à la sortie d’un élément, et la sortie du multimètre doit être branché à l’entrée de l’élément suivant.

!!! Warnin " "
  Il est important de ne pas dépasser la limite de 600mA. Si l’intensité est supérieur, brancher le câble sur le symbole A et aligner le bouton avec le symbole A.

Exemple de l’intensité dans un circuit.
![Ampèremètre](../../assets/images/creatives/multimetre10.webp)

Schéma :
![Ampèremètre](../../assets/images/creatives/multimetre11.webp)
![Ampèremètre](../../assets/images/creatives/multimetre12.webp)
