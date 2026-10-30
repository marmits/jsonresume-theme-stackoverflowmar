# jsonresume-theme-stackoverflowmar

Thème JSON Resume dérivé de [jsonresume-theme-stackoverflow](https://github.com/phoinixi/jsonresume-theme-stackoverflow), adapté en français.

Fonctionnalités principales :

- contenu et libellés en français ;
- métadonnées Schema.org ;
- calcul de l’ancienneté à partir d’une date ;
- CSS personnalisable.

## Développer le thème en local

Le thème ne nécessite pas de compilation. `npm link` permet à une application de charger directement le dossier du thème pendant son développement, sans modifier son `package.json` ni son verrou.

Dans le dossier du thème, installe ses dépendances une fois et crée le lien npm :

```sh
npm install --no-package-lock
npm link
```

Dans le dossier de l’application, installe ses dépendances puis relie le thème local :

```sh
npm ci
npm link jsonresume-theme-stackoverflowmar
npm run build
```

Répète la commande `npm link` dans l’application après chaque `npm ci`, car cette dernière recrée `node_modules`. Les modifications du thème sont alors visibles directement lors de la génération.

### Variante : dépendance locale dans `package.json`

Si tu préfères déclarer le dossier du thème dans le manifeste de l’application, ajoute cette entrée dans `dependencies` :

```json
"jsonresume-theme-stackoverflowmar": "file:../jsonresume-theme-stackoverflowmar"
```

Le chemin est relatif au dossier de l’application : adapte-le si le thème et l’application ne sont pas voisins. Installe d’abord les dépendances du thème avec `npm install --no-package-lock`, puis lance `npm install` dans l’application pour mettre à jour son `package-lock.json`, et enfin `npm run build`.

Cette dépendance `file:` convient au développement local. Pour GitHub Actions, garde une dépendance Git versionnée ou clone le thème dans le chemin attendu par le workflow ; le runner ne possède pas automatiquement le dossier local.

## Pagination PDF

Le thème évite de couper une expérience entre deux pages lorsque sa hauteur le permet. Pour commencer volontairement une expérience sur une nouvelle page, ajoute `"breakBefore": true` à l’objet correspondant dans `work`. Cette option est propre au thème et peut être ignorée par d’autres thèmes JSON Resume.
