# Proyecto del Curso-platzi-react-avanzado⚛️

## Platzi Petgram

Instruido por:

Miguel Ángel Durán

Descripción:

Crea una aplicación para subir y compartir fotos de mascotas usando Webpack, GraphQL, React Hooks, React Router, SEO y PWAs.

(https://www.youtube.com/watch?v=n93KbO-1-kY)

Puede ver el proyecto aquí: (https://petgram-jorge-vicuna-jorge-vicuna.vercel.app/)

[![PETGRAM](https://i.imgur.com/isirPdt.png)](https://www.youtube.com/watch?v=n93KbO-1-kY)

## Nota 🏁:

inicializamos:

`npm init -y`

### Comandos:

-   `npm install --save-dev webpack webpack-cli`
-   `npm i --save-dev html-webpack-plugin`
-   `npm install webpack-dev-server --save-dev`
-   `npm install react react-dom`
-   `npm i @babel/core @babel/preset-env babel-loader @babel/preset-react --save-dev`
-   `npm i standard --save-dev`
-   `npm install styled-components`
-   `npm install react-icons`
-   `npm install intersection-observer`
-   `npm install @apollo/client graphql`
-   `npm install react-router-dom`
-   `npm install react-helmet`
-   `npm install prop-types`
-   `npm install --save-dev webpack-pwa-manifest`
-   `npm install workbox-webpack-plugin -D`
-   `npm install --save-dev cypress`
-   `npm install @material-ui/core@next @emotion/react @emotion/styled`
-   `npm install @mui/material`
-   `npm install react-loading-icons`
-   `npm install react-spinners`

### Modificaciones en scripts del archivo package.json :

```
  "scripts": {
    "build": "webpack --mode=development",
    "lint": "standard",
    "dev": "webpack serve --mode=development",
    "serve:dev": "webpack --mode=development && npx serve dist -s",
    "test": "cypress open"
  },
    .
    .
    .
  "standard": {
    "ignore": [
      "/api/**"
    ]
  },
  "eslintConfig": {
    "extends": [
      "./node_modules/standard/eslintrc.json"
    ]
  }
```

### Crear archivo webpack.config.js :

```
const HtmlWebpackPlugin =require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const path = require('path');

module.exports = {
    entry: { //Punto de entrada
        main: path.resolve(__dirname,'./src/index.js'),
    },
    output: { //Punto de salida
        path: path.resolve(__dirname, './dist'),
        filename: 'app.bundle.js',
        publicPath: '/'

    },
    plugins:[
        new HtmlWebpackPlugin(
            { template: './src/index.html' }
        ),
        new WebpackPwaManifestPlugin(
            {
                name: 'Petgram -Tu app de fotos de mascotas',
                short_name: 'Petgram 🐶',
                description: 'Con Petgram puedes encontrar fotos de animales domesticos',
                background_color: '#fff',
                theme_color:'#b1a',
                icons: [
                    {
                        src: path.resolve('./src/assets/icon.png'),
                        sizes: [96, 128,144,192, 256, 384, 512],
                        purpose: 'any maskable'
                    }
                ]
            }
            ),
        new WorkboxWebpackPlugin.GenerateSW({
            maximumFileSizeToCacheInBytes: 5000000,
            runtimeCaching: [
                {
                    urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'images'
                    },
                },
                {
                    urlPattern: new RegExp('https://petgram-serve-jorge-vicuna.vercel.app'),
                    handler: 'NetworkFirst',
                    options: {
                        cacheName: 'api'
                    }
                }
            ]
        })
    ],
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env'],
                        [
                        '@babel/preset-react',
                            {
                                runtime: 'automatic'
                            }
                        ]
                    ],
                    plugins: ["@emotion"]
                }

            }
        ]
    }
}

```

## Para usar Vercel App (DEPLOY A VERCEL Actualización) 🚩:

(https://petgram-jorge-vicuna-jorge-vicuna.vercel.app/) App

(https://petgram-serve-jorge-vicuna.vercel.app/) Api

Ahora ya no se llama now es vercel (vercel.com)

#### 1.-Intro

-   1.1.- Instalar de forma global vercel:
    -   `npm install -g vercel`
-   1.2.- Necesitamos registrarnos en vercel.com
-   1.3.- Debemos loguearnos desde nuestra consola, con:

    -   `vercel login`

    Escogen loguearse con su email(o su cuenta de github,gitlab,etc) y enter

####

#### 2.- Deploy en /api:

-   2.1.- Ingresamos a la carpeta API desde la terminal `cd api`
-   2.2.- Cambiamos el nombre del archivo de: now.json a vercel.json.
-   2.3.- Cambiamos el contenido del este archivo por el siguiente:

    ```
    {
        "version": 2,
        "name": "petgram-server-tunombre",
        "alias": ["petgram-api-tunombre"],
        "builds": [{ "src": "index.js", "use": "@vercel/node" }],
        "routes": [{
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept"
            },
            "src": "/.*", "dest": "index.js" }
        ]
    }

    ```

-   2.4.- y luego ejecutamos en la terminal `vercel` para el deploy con la siguiente configuración:

    ```
    ? Set up and deploy “~/projects/curso-platzi-react-avanzado/api”? [Y/n] (Seleccionamos Y, y enter).
    ? Which scope do you want to deploy to? escogemos nuestra única opcion.(debe aparecer el email con el que nos registramos, y enter).
    ? Link to existing project? [y/N] n (Seleccionamos n, y enter).
    ? What’s your project’s name? petgram-TU_NOMBRE (introducimos nuestro nombre de proyecto y enter).
    ? In which directory is your code located? ./ (aqui solo enter).
    (Como salida en la términal deberia Aparecer el link de nuestro deploy)

    Ejemplo de salida:

    🔗  Linked to jorge-vicuna/petgram-serve-jorge-vicuna (created .vercel and added it to .gitignore)
    🔍 Inspect: https://vercel.com/jorge-vicuna/petgram-serve-jorge-vicuna/5MhzSgBUfxapAav7S7dm5fuZqgTG [2s]
    ✅ Production: https://petgram-serve-jorge-vicuna.vercel.app [copied to clipboard] [35s]
    📝 Deployed to production. Run `vercel --prod` to overwrite later (https://vercel.link/2F).
    💡 To change the domain or build command, go to https://vercel.com/jorge-vicuna/petgram-serve-jorge-vicuna/settings
    ```

####

#### 3.- Deploy de nuestro proyecto principal:

-   3.1.- Salimos de api `cd ..`
-   3.2.- Creamos el archivo vercel.json en la raiz del proyecto.
-   3.3.- copiamos la siguiente informacion a vercel.json reemplazando los valores:
    ```
    {
        "version": 2,
        "name": "petgram-tunombre",
        "builds": [
            { "use": "@vercel/static-build", "src": "package.json"}
        ],
        "routes": [
            {
                "src": "(.*).js",
                "dest": "/$1.js"
            },
            {
                "src": "(.*).json",
                "dest": "/$1.json"
            },
            {
                "src": "/.*",
                "dest": "index.html"
            }
        ]
    }
    ```
-   3.4.- ejecutamos `vercel` en la términal y seguimos los pasos de igual forma como lo hicimos con /api.

#### Esta documentación me ayudo:

-   (https://platzi.com/tutoriales/1601-react-avanzado/11554-deploy-a-vercel-2021/)

## Configuraciones para iniciar con ApolloClient y Graphql(Actualización) 🚩:

-   Instalar : `npm install @apollo/client graphql`

-   En index.js, primero importemos los símbolos que necesitamos de @apollo/client:
    ```
    import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
    } from "@apollo/client";
    ```
-   A continuación, inicializaremos ApolloClient, pasando a su constructor un objeto de configuración con campos uriy cache:
    ```
    const client = new ApolloClient({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    cache: new InMemoryCache()
    });
    ```
-   uri especifica la URL de nuestro servidor GraphQL.
-   cache es una instancia de InMemoryCache, que Apollo Client utiliza para almacenar en caché los resultados de las consultas después de obtenerlos.

## Instalar React Router en lugar de Reach Router(Actualización) 🚩:

Contexto:

Nota 1:

-   Reach Router y su proyecto hermano React Router se fusionan como React Router v6

Nota 2:

-   La version actual de React es @17.x y no es compatible con la version de @reach/react por eso no deja instalar la dependencia a menos que lo forcemos con : - `npm install @reach/router --legacy-peer-deps` (no recomendable hacerlo), esto nos permite instalar la dependencia aunque tenga advertencias, para luego actualizar la version de @reach/router

### Es por ello que lo recomendable es intalar React Router para este proyecto:

-   Instalar : `npm install react-router-dom`

### Importamos de la siguiente manera:

```
    import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
    } from "react-router-dom";
```

### Configuraciones en webpack.config.js:

```
output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.bundle.js',
    publicPath: '/'

},

devServer: {
    historyApiFallback: true,
},

```

# Sección de Mejores Prácticas (Actualización) 🚩:

Instalar:

-   `npm install --save-dev webpack-pwa-manifest`
-   `npm install workbox-webpack-plugin -D`

### Modificación para la clase de performance:

### Modificación en package.json :

```
"serve:dev": "webpack --mode=development && npx serve dist -s",
```

## Modificación para las clases de PWA:

### Modificación en index.html:

```
    <head>
        //
        <link rel="apple-touch-icon" href="/src/assets/icon.png">
    </head>

    <body>
        <div id='app'></div>
        <noscript>
            <h3>Esta App neceista Javascrip para funcionar</h3>
        </noscript>
        <script>
            if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                    navigator.serviceWorker.register('./service-worker.js')// AQUI!!
                        .then(registration => {
                            console.log('SW registrado')
                        })
                        .catch(registrationError => {
                            console.log('SW error ' + registrationError);
                        })
                })
            }
        </script>
    </body>
```

### Modificación en webpack.config.js:

```
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
//
    plugins: [
    //
    new WebpackPwaManifestPlugin(
      {
        name: 'Petgram -Tu app de fotos de mascotas',
        short_name: 'Petgram 🐶',
        description: 'Con Petgram puedes encontrar fotos de animales domesticos',
        background_color: '#fff',
        theme_color:'#b1a',
        icons: [
          {
            src: path.resolve('./src/assets/icon.png'),
            sizes: [96, 128,144,192, 256, 384, 512],
            purpose: 'any maskable'
          }
        ]
      }
    ),
    new WorkboxWebpackPlugin.GenerateSW({
      maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images'
          },
        },
        {
          urlPattern: new RegExp('https://petgram-serve-jorge-vicuna.vercel.app'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api'
          }
        }
      ]
    })

    ],
```

-   No olvidar tener una imagen en png con el nombre png.icon dentro '.src/assets/icon.png'

### Modificación en vercel.json:

Para subir imagenes png a Vercel, debemos de realizar la siguiente modificacion:

```

    "routes": [
        //
        {
            "src": "(.*).png",
            "dest": "/$1.png"
        },
        //
    ]
```

## Modificación para las clases de Cypress:

### Modificación en package.json :

```
    "test": "cypress open"
```

Corremos con - `npm run test`

Se nos crea la carpeta cypress y el archivo cypress.json.

### Colocamos en cypress.json :

```
{
   "baseUrl": "https://petgram-jorge-vicuna-jorge-vicuna.vercel.app/",
   "chromeWebSecurity": false,
   "viewportWidth": 500,
   "viewportHeight": 800
}
```

# Sección Optimizaciones (Propias) 🚩:

Instalar:

-   `npm install @material-ui/core@next @emotion/react @emotion/styled`
-   `npm install @mui/material`
-   `npm install react-loading-icons`
-   `npm install react-spinners`

### Modificación en webpack.config.js:

por indicaciones del paquete `react-spinners` añadimos:

```
        options: {
          presets: [
            ['@babel/preset-env'],
            [
              '@babel/preset-react',
              {
                runtime: 'automatic' // por defecto es classic, con esto no seria necesario usar: import React from "react";
              }
            ]
          ],
          plugins: ["@emotion"]
        }
```

si se presenta inconvenientos a pesar del cambio, instalar:

-   `npm install @emotion/react @emotion/styled`
    (ya esta dentro de una instalación anterior)
