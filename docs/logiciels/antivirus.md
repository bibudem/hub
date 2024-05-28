https://bib.umontreal.ca/public/bib/soutien-informatique/ANT1-antivirus.pdf

# Antivirus Microsoft Defender

## Téléchargement et installation

### Windows 10 et 11

!!! Note
    Microsoft Defender est déjà intégré au système d’exploitation Windows 10 et 11. Cette procédure désinstalle McAfee, si présent, et s’assure que Windows Defender est activé.

1. Désinstaller tout autre antivirus, autre que McAfee, et redémarrer l’ordinateur. Si présent, l’ancien antivirus institutionnel McAfee sera automatiquement désinstallé.
2. Accéder la logithèque : logitheque.ti.umontreal.ca
3. S’authentifier avec vos informations d'authentification.
4. Lire la directive de téléchargement des logiciels,
cocher la case **J’accepte les termes de la directive** et **Valider**.
5. Dans la liste déroulante, sélectionner **Defender-UDEM (Windows)**
6. Corriger la langue du logiciel si nécessaire et cliquer sur **Suivant**
7. Lire les informations à l’écran et cliquer sur **Installation du logiciel**
8. Exécuter le fichier d'installation
9. Redémarrer l’ordinateur

### macOS

!!! Note
    L’université fournit gratuitement l'antivirus à tous les membres de sa communauté. L’installation requiert vos informations d'authentification. Le logiciel peut être installé sur vos appareils personnels.

Désinstaller tout autre antivirus et redémarrer l’ordinateur*.
*Si présent, l’ancien antivirus institutionnel McAfee sera automatiquement désinstallé
2. Accéder la logithèque : logitheque.ti.umontreal.ca
3. S’authentifier en utilisant le code d'accès et son mot de passe
4. Lire la directive de téléchargement des logiciels,
cocher la case J’accepte les termes de la directive et Valider
5. Dans la liste déroulante, sélectionner Microsoft Defender (macOS) et Valider
6. Corriger la langue du logiciel si nécessaire et cliquer sur Suivant
7. Lire les informations à l’écran et cliquer sur Installation du logiciel
8. Enregistrer puis ouvrir le fichier d'installation et ouvrir Defender-UdeM.pkg.
*Si la mention « Impossible d’ouvrir » s’affiche, cliquer OK, ensuite Pomme, Préférence système, Sécurité et confidentialité,
Onglet général et cliquer sur « Ouvrir quand même ».
9. Cliquer Ouvrir et Continuer
10. Cliquer Installer et entrer le mot de passe administrateur de l’ordinateur
11. Dans la fenêtre Extension système bloquée, cliquer OK chaque fois qu’on vous le demande.
12. Cliquer Redémarrer, OK, Placer dans la corbeille
13. Après avoir redémarré l’ordinateur ouvrir Pomme → Préférences système → Sécurité et confidentialité
14. Déverrouiller le cadenas (au besoin, entrer votre nom d'utilisateur et mot de passe de votre Mac et cliquer déverrouiller), puis
cliquer sur l’onglet Général, ensuite Détails.
15. Cocher les deux cases Microsoft Defender et cliquer OK.
16. Cliquer Autoriser.
17. Toujours dans la même fenêtre, sélectionner l’onglet Confidentialité, cliquer Accès complet au disque, cocher Microsoft Defender et Microsoft Defender Endpoint Security Extension.

## Mises à jour

### Protection contre les virus et menaces

La mise à jour est automatique, la première peut pendre une dizaine de minutes à s’effectuer.

## Produit

La mise à jour du produit est automatique (si activé)
1. Cliquer l’icône Windows Defender en haut à droite de l’écran
2. Cliquer Ouvrir Windows Defender
3. Cliquer Aide en haut de l’écran et cliquer Rechercher les mises à jour du produit…
4. Cocher Mettre à jour automatiquement les applications Microsoft

## Désinstallation

### Microsoft Defender sur macOS

1. Ouvrir Finder
2. Aller à Applications
3. Clic droit sur Microsoft Defender et supprimer
4. Vider la Corbeille

### McAfee sans installation de Microsoft Defender

1. Ouvrez une fenêtre de terminal Applications → Utilitaires → Terminal
2. Saisissez la commande suivante : sudo /usr/local/McAfee/uninstall EPM
3. Appuyer sur le bouton du clavier Entrer. Patienter jusqu’à sa désinstallation.
4. Lorsque vous y êtes invités, saisissez le mot de passe administrateur de votre ordinateur et taper la touche Retour
5. Saisissez la commande suivante : sudo /Library/McAfee/agent/scripts/uninstall.sh
6. Appuyer sur Retour. Patienter jusqu’à sa désinstallation.
