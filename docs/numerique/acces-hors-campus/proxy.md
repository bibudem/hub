---
icon : material/check-network-outline
---
# Configurer le serveur mandataire (*proxy*)

Le serveur mandataire agit comme un canal facilitant l'accès aux ressources électroniques des bibliothèques, permettant ainsi la consultation de bases de données, de revues électroniques et de livres numériques, indépendamment du lieu de connexion.

## Configuration

=== "macOS"

    !!! Warning "Recommendation"
        Utilisateur d'une version macOS ultérieur à 13 : il est recommandé d'utiliser le navigateur Chrome ou Firefox.

    1. Cliquer sur l'icône Wi-Fi en haut à droite de l'écran.
    2. Cliquer **Réglages Wi-Fi** (ou **Préférences réseau**). Si un cadenas fermé s’affiche en bas à gauche, cliquer pour le débarrer avec le mot de passe du compte administrateur de votre ordinateur.

    3. Cliquer sur **Détails** (ou **Avancé**).
    4. Sélectionner l'onglet **Serveurs mandataires**.
    5. Activer **Configuration de serveur mandataire automatique**.
    6. Dans la case URL, taper au complet et sans espace `http://proxy.umontreal.ca` ![Fenêtre macOS pour activer le serveur mandataire](../images/proxy-macos.png)
    7. Cliquer sur **OK** ensuite **Appliquer**.
    8. Tester la configuration Proxy avec son navigateur internet à l'adresse [http://testproxy.umontreal.ca](http://testproxy.umontreal.ca)
    9.  Si une fenêtre s'affiche au milieu de l'écran, cliquer **Préférences**.
    10. S'authentifier avec son code d'accès et UNIP / mot de passe.

    Le message `Votre configuration Proxy est fonctionnelle` devrait s'afficher.

    Pour désinstaller le Proxy, refaire les étapes précédentes puis à l'étape 5, désactiver **Configuration de serveur mandataire automatique**, ensuite **OK** et **Appliquer**.

=== "Windows"

    ceci 

=== "iOS"

=== "Android"



------------------

## Dépannage

??? Question "Pour tous les navigateurs"

    - [Vérifier si une panne ou un arrêt de service est signalé par les TI](https://ti.umontreal.ca/etat-des-services/) (Technologies de l'information).
    - Si la fenêtre d'authentification au Proxy réapparaît de façon répétitive, valider les informations d'authentification en se branchant sur le portail à l'adresse MonUdeM.umontreal.ca
    - Pour les navigateurs Edge et Internet Explorer, s'assurer d'inscrire "sim\" devant le code d'accès (exemple : sim\ab12345 ou sim\p1234567)
    - [Effacer la mémoire cache de votre navigateur Internet](../acces-hors-campus/depannage.md#chrome)

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