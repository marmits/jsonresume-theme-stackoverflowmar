### FORK FROM
[jsonresume-theme-stackoverflow](https://github.com/phoinixi/jsonresume-theme-stackoverflow)

### FONCTIONS
- Version FR  
- Schema.org
- Correction bug HTML `<p><p>` `</p></p>`
- Javascript calcul Nombre d'années depuis une date
- Custom css

### Utilisation Local / VCS
Pour utiliser ce thème **en local** et modifier le thème pendant le développement, la configuration suivante peut être est mise en place :
- Le thème est intégré dans le workspace `app/cvmarmits/jsonresume-theme-stackoverflowmar/`
- Il est référencé dans l’app `app/cvmarmits/jsonresume/package.json` en dépendance locale via `workspace:*`
- Le workspace pnpm `app/cvmarmits/pnpm-workspace.yaml` déclare les deux paquets `jsonresume` et `jsonresume-theme-stackoverflowmar`
- En dev, l’override dans le `package.json` du workspace force l’usage du thème local.
- En prod/CI, tu peux retirer cet override pour utiliser la version VCS           
    
[(voir Intégration et DOC)](https://github.com/marmits/nodetools/tree/dev/app/cvmarmits)
