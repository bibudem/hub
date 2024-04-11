---
hide : 
    - toc
icon : material/wifi-cog
glightbox: false
---

# Réseau sans fil

![](images/sans-fil.jpg)

L'université de Montréal offre plusieurs réseaux Wi-Fi à travers les campus pour répondre à vos besoins de connectivité.

!!! Warning "Il n'est pas recommandé d'utiliser le réseau **UdeM non sécurisé**. Ce réseau ne permet pas un accès à nos ressources électroniques et n'offre aucune garantie de confidentialité et de sécurité."

=== "UdeM avec cryptage"

    Le réseau sans fil **UdeM avec cryptage** est à privilégier. En plus de bénéficier d'une sécurité accrue, il permet l'accès aux ressources électroniques des bibliothèques et l'impression. Vous pouvez y accéder grâce à votre code d'accès et votre UNIP / mot de passe.
    === "macOS"
        1. Sélectionner le réseau sans fil : UdeM avec cryptage
        2. Entrer les informations suivantes :
              - Identité : Votre code d’accès
              - Mot de passe : Votre UNIP / mot de passe
  
    === "Windows"
        1. Sélectionner le réseau sans fil : UdeM avec cryptage
        2. Entrer les informations suivantes :
              - Identité : Votre code d’accès
              - Mot de passe : Votre UNIP / mot de passe

    === "iOS"
        1. Dans le menu des applications, sélectionner **Réglages**.
        2. Sélectionner **Wi-Fi**.
        3. Assurez-vous que l’interrupteur soit activé (de couleur VERTE).
        4. Entrer vos informations d'authentification et appuyer sur le bouton **Rejoindre**.
        5. À la fenêtre **Certificat**, appuyer sur le bouton **Se fier**.
   
        Le branchement au réseau sans fil UdeM avec cryptage est complété.

    === "Android"
 
        === "Version 10 ou antérieur"
            |Champ | Information |
            |-----|-----|
            |Méthode EAP | PEAP|
            |Phase 2 authentification | MSCHAPV2|
            | Certificat CA | (non spécifié) ou ne pas valider ou ne pas vérifier|
            |Identité | Votre code d’accès (ex. ab12345 ou p1234567)|
            |Anonyme | le laisser vide|
            |Mot de passe | Votre UNIP / mot de passe|

        === "Version 11 ou ultérieur"
            |Champ | Information |
            |-----|-----|
            |Méthode EAP | PEAP |
            | Phase 2 authentification | MSCHAPV2 |
            | Certificat CA | Utiliser les certificats système ou Use system certificates |
            | Version TLS minimale | TLS v1.0 (si demandé Android 14 seulement)
            | État du certificat en ligne | Demander l’état du certificat ou Request certificate status |
            | Domaine | umontreal.ca |
            | Identité | Votre code d’accès (ex. ab12345 ou p1234567) |
            | Anonyme | le laisser vide |
            | Mot de passe  | Votre UNIP / mot de passe |

    === "Chromebook"
        |Champ | Information |
        |-----|-----|
        |Méthode EAP | PEAP |
        |Phase 2 authentification | MSCHAPV2|
        |CA certificate | (non spécifié) ou ne pas valider ou ne pas vérifier|
        |Identité | Votre code d’accès (ex. ab12345 ou p1234567)|
        |Anonyme | le laisser vide |
        |Mot de passe | Votre UNIP / mot de passe|

=== "Eduroam"

    Le réseau sans fil **eduroam** est disponible pour les visiteurs d’un autre établissement participant qui souhaitent se brancher sur le réseau sans fil de l'UdeM. 

    La communauté UdeM en visite ailleurs peuvent se brancher à ce réseau en utilisant le courriel comme code d'accès et le UNIP / mot de passe.

    === "Visiteurs à l'UdeM"
        | Université | Code d’accès (exemple) | Mot de passe (exemple) |
        |-------|------|------|
        | HEC | prenom.nom@hec.ca | Mot de passe courriel HEC |
        |ETS |dtremblay@etsmtl.ca |Mot de passe|
        |Polytechnique |Code_Usager@polymtl.ca |Mot de passe|
        |Université Laval |IDUL@ulaval.ca |Votre NIP|
        |UQAM Étudiants | CodeMS@ens.uqam.ca|ABC12345|
        |UQAM Employés | nom.prénom@uqam.ca|ABC12345|
        |University of Toronto | utorid@utoronto.ca  | UTORid password|
        |Concordia University |netname@concordia.ca |Password (same as MyConcordia portal)|
        |McGill Étudiants | first.last@mail.mcgill.ca|McGill Password
        |McGill Employés | first.last@mcgill.ca|McGill Password
        |Université de Sherbrooke | votreCIP@usherbrooke.ca |Mot de passe|
        |Université d’Ottawa Étudiants |adressedecourriel@uottawa.ca | Mot de passe uoAccès |
        | Université d’Ottawa Employés | adressedecourriel@uottawa.ca | Mot de passe Exchange |

        !!! Warning " "
            Si vous ne réussissez pas à vous authentifier au réseau Eduroam, veuillez contacter votre établissement pour vérifier vos informations.
    === "Communauté UdeM en visite ailleurs"
        1. Se brancher au réseau sans fil eduroam
        2. S’authentifier avec votre adresse courriel UdeM (ex. prenom.nom@umontreal.ca) et votre UNIP / mot de passe.


=== "UdeM-Visiteurs"

    Le réseau sans fil **UdeM-Visiteurs** est destiné aux personnes externes à la communauté UdeM.

    1) Sélectionner le réseau sans fil **UdeM-Visiteurs**
    
    2) Ouvrir votre navigateur

    3) Cliquer **Ou faites une demande d’accès en tant qu’invité**
    
    4) Entrer vos informations et cliquer **Enregistrer**
    
    5) Lire et accepter les conditions générales
    
    6) Cliquer **Ouvrir la session**
    
    7) Cliquer **Accepter**
    
    8) Cliquer **Continuer** pour accéder à Internet

    !!! Note "Si la page d’authentification web ne s’affiche pas, ouvrir votre navigateur web préféré et taper une adresse que vous n’avez pas l’habitude d’utiliser, par exemple : www.google.cz"

---------------------

## Dépannage

En cas de difficultés avec le réseau sans fil UdeM avec cryptage (par exemple, après un changement de UNIP / mot de passe), oublier ou retirer le réseau et s’y brancher à nouveau. Si présent, faire de même pour **eduroam**, **UdeM non securisé** et **UdeM-Visiteurs**.

=== "macOS"

    Icône Wi-Fi :material-wifi: → Préférences Réseau (ou réglages Wi-Fi) → Wi-Fi → bouton **Avancé** (ou **Détails**) → sélectionner **UdeM avec cryptage** → appuyer sur le symbole **-** pour supprimer (ou **Oublier ce réseau**).

    Au besoin, supprimer les informations de branchement du **Trousseau d’accès** : 
    Finder :material-apple-finder: → inscrire `Trousseau` dans la barre de recherche → double-cliquer sur **Trousseau d’accès** → inscrire `umontreal` dans la boite de recherche → supprimer la ligne correspondante au réseau Wi-Fi UdeM avec cryptage.

=== "Windows"
    === "Windows 7"
        Bouton Démarrer :simple-windowsxp: → Panneau de configuration → Centre Réseau et partage (affichage Grandes icônes) → Gérer les réseaux sans fil → sélectionner le réseau sans fil à retirer – bouton Supprimer
    === "Windows 8"
        Bouton Windows :fontawesome-brands-windows: → Paramètres → icône Wi-Fi :material-wifi: → clic droit sur le réseau sans fil à retirer → Oublier ce réseau
    === "Windows 10"
        Bouton Windows :simple-windows10: → Paramètres → Réseau et Internet → Wi-Fi :material-wifi: → Gérer les paramètres Wi-Fi → cliquer sur le réseau sans fil à retirer → Oublier
    === "Windows 11"
        Bouton Windows :simple-windows11: → Paramètres → Réseau et Internet → Wi-Fi :material-wifi: → Gérer les réseaux connus → sélectionner le réseau sans fil à retirer → Oublier

=== "iOS"
    Réglages → Wi-Fi :material-wifi: → appuyer sur l'icône "i" :material-information: correspondant au réseau sans fil à retirer → Oublier ce réseau → Oublier

=== "Android"
    Paramètres → Wi-Fi :material-wifi: → appuyer longuement sur le réseau sans fil à retirer → Retirer le réseau

=== "Chromebook"
    Wi-Fi :material-wifi: (en bas à droite) → bouton Avancé → Dans la section réseau, sélectionner Wi-Fi → sélectionner le réseau sans fil à retirer → Retirer.


------------------------

### Sites umontreal.ca non accessibles? 

L'utilisateur ne peut pas accéder aux sites de l'UdeM (Studium, umontreal.ca, etc.) alors qu'il peut se connecter à d'autres sites Web. La cause est probablement des paramètres DNS incorrects. Réinitialiser les paramètres DNS devrait résoudre le problème.



=== "macOS"
    1. Cliquer sur la connexion Wi-Fi :material-wifi: (en haut à droite de l’écran).
    2. Cliquer **Ouvrir les préférences Réseau** (ou **Réglages Wi-Fi**).
    3. Cliquer le bouton **Avancé** (ou **Détails**).
    4. Cliquer **DNS**.
    5. Dans la partie Serveurs DNS, cliquer sur chacune des adresses (ex. 8.8.8.8) et cliquer sur le bouton « - » afin de les supprimer.
    6. Vous obtiendrez automatiquement deux adresses débutant par 10.
    7. Cliquer **OK**.
    8. Cliquer **Appliquer** (en bas à droite).

=== "Windows"
    === "Windows 10"
        1. Cliquer droit sur la connexion Wi-Fi :material-wifi: (en bas à droite de l’écran).
        2. Cliquer **Ouvrir les paramètres réseau et internet**.
        3. Cliquer **Centre Réseau et partage** (en bas de la page).
        4. Cliquer **Wi-Fi (UdeM avec cryptage)** (en haut à droite).
        5. Cliquer **Propriétés**.
        6. Double cliquer **Protocole Internet version 4(TCP/IPv4)**.
        7. Sélectionner **Obtenir les adresses des serveurs DNS automatiquement**.
        8. Cliquer **OK**.
    === "Windows 11"
        9. Cliquer droit sur la connexion Wi-Fi :material-wifi: (en bas à droite de l’écran).
        10. Cliquer **Paramètres du réseau d’internet**.
        11. Cliquer **WI-Fi**.
        12. Cliquer **Propriétés du matériel**.
        13. Cliquer **Propriétés**.
        14. Cliquer **Modifier** (à droite de Attribution du serveur DNS).
        15. Dans **Modifier les paramètres du DNS**, changer pour **Automatique (DHCP)**.
        16. Cliquer **Enregistrer**.

=== "iOS"
    1. Ouvrir les Réglages :octicons-gear-16:.
    2. Toucher le bouton "i" :material-information: à côté du nom du réseau sans fil Ex. UdeM avec Cryptage.
    3. Défiler la page vers le bas jusqu’à Configurer le DNS.
    4. Sélectionner **Automatique**.

=== "Android"
    1. Ouvrez l'application **Paramètres**.
    2. Appuyez **Réseau et Internet et DNS privé**.
    3. Sélectionner **Automatique**.
    4. Appuyez **Enregistrer**.

=== "Chromebook"
    1. Assurez-vous que votre Chromebook est connecté à un réseau Wi-Fi.
    2. Dans l'angle inférieur droit, sélectionner l'heure.
    3. Sélectionner le réseau sans fil Udem avec Cryptage.
    4. Dans le menu déroulant, sélectionner UdeM avec Cryptage.
    5. Sélectionner **Réseau**.
    6. Dans la section Serveurs de noms, sélectionner **Serveurs de noms automatiques**.
    7. Fermer la fenêtre.

-------------------

## Réseau filaire en accès libre

Impossible de se connecter au réseau sans fil? Les bibliothèques proposent des prises réseaux en accès libre. Elles sont représentées par cette icône : ![icône orange de la prise réseau en accès libre](images/prise-reseau.png){ width=40rem }

### Disponibilité

| Bibliothèque | Local |
|-------|------|
| Bibliothèque des lettres et sciences humaines (BLSH) | local 1000 |
|Bibliothèque de la santé| local L-886, L-888, L-890, L-892, L-894 |

### Comment se brancher

1. Localiser une prise réseau en accès libre.
2. Relier votre ordinateur à la prise réseau à l’aide de votre câble réseau.
3. Ouvrir un navigateur Internet et la fenêtre de branchement s’affichera automatiquement.
4. Inscrire vos informations d'authentification et cliquer sur Ouvrir la session.

!!! Warning "Une connexion au [serveur mandataire (*proxy*)](acces-hors-campus/proxy.md) est nécessaire pour accéder aux ressources électroniques des bibliothèques depuis une connexion filaire."
    

-----------

