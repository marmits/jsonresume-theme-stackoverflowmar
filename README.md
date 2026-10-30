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
