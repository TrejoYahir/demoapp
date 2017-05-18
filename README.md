# Demo counter app
Demo app con Ionic 2

## Principales Herramientas:
  - Ionic 2
  - Angular 2 & Typescript

## Requerimientos para el entorno de desarrollo:
  - [Ionic](http://ionicframework.com/docs/intro/installation/)
  - [npm](https://nodejs.org/es/)
  - [bower](https://bower.io/)

## Pasos de instalación
Una vez instaladas las dependencias mencionadas anteriormente, correr en terminal los siguientes comandos:
```sh
$ cd carpeta/donde/se/quiera/guardar
$ git clone https://github.com/TrejoYahir/demoapp.git
$ npm install
$ ionic serve
$ ionic state restore
```

Para correr en entorno local:
```sh
$ ionic serve
```
Posteriormente acceder a [localhost:8100]()

Para añadir plataformas: 
```sh
$ ionic platform add android
$ ionic platform add ios
```

Para crear ejecutable: 
```sh
$ ionic build android
$ ionic build ios
```