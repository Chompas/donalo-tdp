# donalo-tdp

Proyecto de donaciones para Taller de Desarrollo de Proyectos

## Instalación de dependencias

- Instalar [mongodb](http://docs.mongodb.org/manual/installation/)
- Instalar [NodeJS](http://nodejs.org/download/)

NodeJS trae npm para instalar dependencias.

Instalar yo y bower.

```
$ npm install -g yo bower
```

Instalar [AngularJS Full-Stack generator](https://github.com/DaftMonk/generator-angular-fullstack)

```
$ npm install -g generator-angular-fullstack
```

El proyecto esta creado con
- Javascript
- Jade
- CSS
- ngRoute
- MongoDB con Mongoose
- Bootstrap
- Boilerplate Authentication (Facebook)

## Instalación del proyecto

Dado que las dependencias que usa el proyecto estan en el .gitignore luego de clonarlo hacer

```
$ bower install
$ npm install
```

## Correr servidor y proyecto

Para correr el proyecto local se necesita tener corriendo mongo y grunt.

En una terminal dejar corriendo primero

```
mongod
```

En otra
```
grunt serve
```

Si grunt da error hacer
```
npm install -g grunt-cli
```
Y volver a correr grunt serve

## Ejemplos

- [Crear un Endpoint](https://github.com/DaftMonk/generator-angular-fullstack#endpoint)
- [Crear un Route](https://github.com/DaftMonk/generator-angular-fullstack#route)
- [Crear un Controller](https://github.com/DaftMonk/generator-angular-fullstack#controller)
