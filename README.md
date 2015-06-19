# ECMASCRIPT 6
Lunch & learn réalisé en 2015 sur la sortie de la version 6 d'ECMASCRIPT. 

## Application 
Elle regroupe des exemples de code et de mise en place de traceur/compilers server & client. 
Pour se faire, installer l'application en local et démarrez la avec la liste possible de traceur suivante :
- TRACEUR=client-babel ;
- TRACEUR=server-babel ;
- TRACEUR=client-traceur-simple ;
- TRACEUR=server-traceur-simple ;

```javascript
TRACEUR=server-babel node app.js
```

L'application va compiler les scripts ES6 en ES5.

Pour un traceur client side, rendez-vous à l'adresse :
```javascript
localhost:5001
```
Pour un traceur server, démarrez le fichier d'application compilé :
```javascript
TRACEUR=server-babel node app.js
node server/babel/app.js
```
Consultez le fichier README.md dans les sources de l'app. pour avoir les infos de démarrage et de configuration.

### Exemples
Les exemples de code complétés fonctionnent tous avec le traceur traceur-simple (Google traceur-compiler). 
Pour les consulter, allez dans le dossier /src/apps/traceur-simple-client et ouvrez le fichier app.js. Celui-ci contient à la suite tous les exemples de code fonctionnels. Les modules sont également fonctionnels et utilisés dans le fichier app.js. 
En démarrant votre application comme suit : 
```javascript
TRACEUR=client-traceur-simple node app.js
localhost:5001 //-> Application accessible à partir de cette url
```
Vous pouvez valider via la console toutes les fonctionnalités accéssibles via traceur.
Les autres applications contiennent des exemples de base (mais ne sont pas exaustifs). Vous pouvez faire vos propres tests de compatibilité des différents traceurs via ces fichiers ou en ajoutant un via le gruntfile. 

## Liste de liens ressources
http://www.2ality.com/2015/02/using-es6-today-minsk.html<br>
http://es6-features.org/?utm_source=javascriptweekly&utm_medium=email#SymbolExportImport<br>
http://tagtree.tv/courses/expert-es6<br>
http://www.2ality.com/2015/02/es6-classes-final.html<br>
http://fr.slideshare.net/x00mario/es6-en<br>
http://kangax.github.io/compat-table/es6/<br>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_6_support_in_Mozilla<br>
https://leanpub.com/understandinges6/read<br>
http://www.2ality.com/2014/12/es6-oop.html<br>
https://www.youtube.com/watch?v=s-BwEk-Y4kg<br>
https://www.youtube.com/watch?v=UjkEYsMtpak<br>
https://www.youtube.com/watch?v=tBkA6x0sbuQ<br>
https://www.youtube.com/watch?v=3KqCuYvOO48<br>
https://www.youtube.com/watch?v=_ZG_CrYyh_Q<br>
https://www.youtube.com/watch?v=Z7yS28I5ci4<br>
https://www.youtube.com/watch?v=nPnF4pZ8zOA<br>
https://www.airpair.com/angularjs/posts/preparing-for-the-future-of-angularjs<br>
http://www.2ality.com/2013/08/es6-callables.html<br>
http://odetocode.com/videos<br>
