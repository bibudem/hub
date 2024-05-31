---
icon : material/check-network-outline
search:
  boost: 2

personnes : 
    - eric
    - thierry
    - wassif
---
# Configurer le serveur mandataire (*proxy*)

Le serveur mandataire agit comme un canal facilitant l'accès aux ressources électroniques des bibliothèques, permettant ainsi la consultation de bases de données, de revues électroniques et de livres numériques, indépendamment du lieu de connexion.

## Configuration

=== "macOS"

    !!! Warning "Il est recommandé d'utiliser le navigateur Chrome ou Firefox."

    1. Cliquer sur l'icône Wi-Fi en haut à droite de l'écran.
    2. Cliquer **Réglages Wi-Fi** (ou **Préférences réseau**). Si un cadenas fermé s’affiche en bas à gauche, cliquer pour le débarrer avec le mot de passe du compte administrateur de votre ordinateur.

    3. Cliquer sur **Détails** (ou **Avancé**).
    4. Sélectionner l'onglet **Serveurs mandataires**.
    5. Activer **Configuration de serveur mandataire automatique**.
    6. Dans la case URL, taper au complet et sans espace `http://proxy.umontreal.ca` ![Fenêtre macOS pour activer le serveur mandataire](../../assets/images/informatique/proxy-macos.png)
    7. Cliquer sur **OK** ensuite **Appliquer**.

    Pour désinstaller le Proxy, refaire les étapes précédentes puis à l'étape 5, désactiver **Configuration de serveur mandataire automatique**, ensuite **OK** et **Appliquer**.

    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/D5VeqdvUNdM?si=B9KGpraq8qG1N-y6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

=== "Windows"

    === "Windows 10"
        1. Cliquer sur le bouton **Démarrer**, puis sur **Paramètres**
        2. Cliquer sur **Réseau et internet**
        3. Cliquer sur **Proxy**
        4. Activer seulement **Utiliser un script d'installation**
        ![Fenêtre Windows 10 pour activer le serveur mandataire](../../assets/images/informatique/proxy-win10-adresse.png)
        5. Dans **Adresse du script**, taper sans espace `http://proxy.umontreal.ca`
        6. Cliquer sur **Enregistrer**

        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/dk1oUdLo84Y?si=YmrEseW783rcbQNI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    === "Windows 11"
        7. Cliquer sur le bouton **Démarrer**, puis sur **Paramètres**
        8.  Cliquer sur **Réseau & Internet**
        9.  Cliquer sur **Proxy**
        10. Dans **Utiliser un script d'installation**, cliquer **Configurer**
        11. Activer **Utiliser un script de configuration**
        12. Dans **Adresse du script**, taper sans espace `http://proxy.umontreal.ca`
        ![Fenêtre Windows 11 pour activer le serveur mandataire](../../assets/images/informatique/proxy-w11-utiliser-script.jpg)
        13. Cliquer sur **Enregistrer**

        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IApth7W-yzw?si=hL5dUYtCGjHqpRrn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

=== "iOS"
    !!! Warning "la configuration du Proxy sur iOS est disponible pour les connexions Wi-Fi seulement, pas cellulaire"
    1. Sélectionner **Réglages** → **Wi-Fi** → cliquer sur le **i** à côté du réseau sans-fil.
    2. Dans la section du bas **Serveur mendataire HTTP**, sélectionner **Configurer le serveur mandataire**
    3. Sélectionner **Automatique** et entrer cet URL sans espace : `http://proxy.umontreal.ca` 
    4. Appuyer sur **Enregistrer**

=== "Android"



------------------

## Tester la configuration

1. À l'aide d'un navigateur web, aller à l’adresse [testproxy.umontreal.ca](https://testproxy.umontreal.ca)
2. À la fenêtre d'authentification, entrer ses informations d'authentification (code d'accès et mot de passe)
3. Le message `Votre configuration Proxy est fonctionnelle` devrait s’afficher.

------------------

## Dépannage

??? Question "Pour tous les navigateurs"

    - [Vérifier si une panne ou un arrêt de service est signalé par les TI](https://ti.umontreal.ca/etat-des-services/) (Technologies de l'information).
    - Si la fenêtre d'authentification au Proxy réapparaît de façon répétitive, valider les informations d'authentification en se branchant sur le portail à l'adresse MonUdeM.umontreal.ca
    - Pour les navigateurs Edge et Internet Explorer, s'assurer d'inscrire "sim\" devant le code d'accès (exemple : sim\ab12345 ou sim\p1234567)
    - [Effacer la mémoire cache de votre navigateur Internet](#chrome)

    Le temps de tester, désactiver s'il y a lieu :

    - Tout système de sécurité (Antivirus, Pare-feu).
    - Toute connexion telle bureau à distance ou VPN
    - Tout logiciel gestionnaire de mot de passe (ex. : LastPass, 1Password, etc.)
    - Tout bloqueur de fenêtres ou publicités tel AdBlock
    - Utiliser un autre navigateur Internet
    - Tester la configuration à l'adresse [http://testproxy.umontreal.ca](http://testproxy.umontreal.ca)

??? Question "En cas de problème avec Firefox"

    1. En haut à droite de la fenêtre de Firefox, cliquer sur l’icône Menu > Options > Général > Paramètres
    2. Cocher Utiliser les paramètres proxy du système
    3. Tester la configuration à l'adresse [http://testproxy.umontreal.ca](http://testproxy.umontreal.ca)

    Si le problème persiste :

    4. Taper `about:config` dans la barre d’adresse de Firefox et faire Enter
    5. Cliquer sur **Je prends le risque**
    6. Entrer `ntlm` dans la boite Rechercher et faire Enter
    7. Double-cliquer sur `network.automatic-ntlm-auth.allow-proxies` pour changer la valeur à `False`
    8. Tester la configuration à l'adresse [http://testproxy.umontreal.ca](http://testproxy.umontreal.ca)

??? Question "En cas de problème avec Edge"
    Inscrire sim\ lors de l’authentification devant le code d’accès (exemple : sim\ab12345 ou sim\p1234567). S'il n'est pas possible d'éditer le nom d'utilisateur, cliquer sur l'option **Utiliser un autre compte** (ou **Changer de compte**). Il peut être nécessaire de défiler la fenêtre d'authentification vers le bas pour voir cette option.

    !!! Warning "Attention au sens de la barre oblique"

??? Question "Effacer la mémoire cache du navigateur"

    Pour résoudre les problèmes d'accès ou d'affichage sur certains sites web, vous pouvez effacer la mémoire cache de votre navigateur. Voici comment faire selon votre navigateur :

    === "Chrome"

        • PC, Mac et Chromebook : Icône Menu (en haut à droite) → Plus d’outils → Effacer les données de
        navigation → Période : Toutes les périodes → cocher seulement Images et fichiers en cache → Effacer
        les données de navigation. Redémarrer Chrome.

        • Android : Menu → Historique → Effacer les données de navigation → Intervalle de temps : Toutes les
        périodes → cocher seulement Images et fichiers dans la mémoire cache → Effacer les données.
        Redémarrer Chrome.
        
    === "Edge"
        • PC : Icône Menu → Paramètres → Confidentialité, recherche et service → Choisir les éléments à effacer →
        Intervalle de temps : À tout moment → cocher seulement Images et fichiers mis en cache → Effacer maintenant.
        Redémarrer Edge.

    === "Firefox"
        • PC et Mac : Icône Menu → Options (PC) ou Préférences (Mac) → Vie privée et sécurité → à la
        section Cookies et données de sites, cliquer Effacer les données → cocher seulement Contenu web en cache
        → bouton Effacer→ Redémarrer Firefox.
    === "Safari"

        • Mac : Menu Safari → Préférences (ou Réglages) → Avancées → cocher Afficher le menu Développement
        → menu Développement (en haut) → Vider les caches → redémarrer l’ordinateur.

        • iOS (iPhone et iPad) : Réglages → Safari → Effacer l’historique de navigation → Effacer.
        Historique/données. Redémarrer l’appareil

    Tester la configuration à l'adresse [http://testproxy.umontreal.ca](http://testproxy.umontreal.ca)

----------------------------

## Soutien