# Project organization

In this project I will separate each type of data following like in the following graph:
```
src
├── index.js (app entrypoint)
|
├── components
├─────── ExempleComponent
├─────────── ExampleComponent.js
├─────────── ExampleComponent.scss
├─────────── ExampleComponent.test.js
| 
├── i18n
├─────── locales
├─────────── en.json
├─────────── fr.json
├─────── messages
├─────────── messages.json
|
├── pages
├─────── Home
├─────────── Home.js
├─────────── Home.scss
├─────────── Home.test.js
| 
├── images
├── sass
└── readme.md
```
If components or pages need a component that will not be reusable, they must be put in the `/page(or component)/components` folder.


