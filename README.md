# TRABAJO PRACTICO 3
## PIEDRA, PAPEL O TIJERA CON REACT JS
### Instrucciones del juego

Al iniciar la pagina, se podrá apreciar un cuadro estilo formulario, que solicitará al usuario que ingrese su nombre:

![1](https://github.com/Uciel22/practico3/assets/134022263/a5c5af54-8b1c-4173-9eba-42766f612d0e)

Si el usuario no tipea su nombre e intenta ingresar al juego, le saldrá un mensaje advirtiendo que el campo no puede estar vacío:

![2](https://github.com/Uciel22/practico3/assets/134022263/f476c603-2e03-4548-8774-356e95e9b5fe)

Una vez que el usuario haya ingresado su nombre, se iniciará el juego, y se mostrará un mensaje de bienvenida:

![3](https://github.com/Uciel22/practico3/assets/134022263/5bb55825-41e4-434f-bcdf-287463516196)

El usuario tendrá la opcion de seleccionar la jugada a realizar (piedra, papel o tijera). El juego termina cuando el usuario o la PC consiguen llegar a tres puntos:

![4](https://github.com/Uciel22/practico3/assets/134022263/c37cd811-62dd-4172-b3e4-9b34ecb89124)

Cuando alguno de los dos jugadores llegue a tres puntos, finaliza el juego y se bloquean los botones (piedra, papel o tijera), quedando disponible únicamente la opcion de repetir juego, ademas se mostrara un mensaje indicando quien fue el ganador:

![5](https://github.com/Uciel22/practico3/assets/134022263/3ef8f7ed-47ec-4cf5-b037-3452a9406251)

Para volver a jugar, se hace click en el boton 'Repetir juego'. Se reiniciara el marcador y el puntaje, asimismo se habilitaran nuevamente los botones (piedra, papel y tijera):

![6](https://github.com/Uciel22/practico3/assets/134022263/a79758ba-7612-4c05-882d-98dfc84d9850)

También es de destacar que el usuario tiene la opcion de presionar en cualquier momento el botón "Haz clic si deseas salir del juego":

![7](https://github.com/Uciel22/practico3/assets/134022263/68d03544-3751-4f94-817b-3477d6368f03)

Si el usuario presiona dicho botón, saldrá del juego y cambiará la pantalla, solicitando que ingrese nuevamente su nombre de usuario:

![8](https://github.com/Uciel22/practico3/assets/134022263/ca28ba0d-496e-4a90-b3fc-4d2f35931bf6)

## Sobre el proyecto piedra, papel o tijera
### El proyecto en React
<p>Para poder iniciar el proyecto se necesita contar principalmente con una computadora y conexion a internet. Se necesita tener instalado un editor de código (de preferencia Visual Studio Code) y tener instalados todos los pluggins necesarios para poder trabajar con un entorno más cómodo, con códigos más legibles e intuitivos.</p>
<p>Para poder iniciar un proyecto react, se debe abrir el terminal en Visual Studio Code, y ejecutar el siguiente código: "npx create-react-app ." y se descargará la app de react, para que lo podamos editar a gusto y crear la aplicación en una carpeta que debe crearse previamente en la computadora, en el lugar que uno desee.</p>
<p>React genera varias carpetas, una de ellas es "public" donde el archivo más importante es el index.html que generalmente tiene un elemento div con la id "root" dentro de la etiqueta body, el cual es un documento html en donde se verá reflejada la aplicación. No es aconcejable tocar nada de dicha carpeta.</p>
<p>Para comenzar a trabajar en el proyecto se necesita reconocer los archivos Index.js, App.js en donde se van a poder editar los códigos jsx para luego renderizarlos. En estos archivos se pueden escribir funciones de javascript, etiquetas de html y se pueden aplicar estilos css, los cuales deben estar en el formato jsx.</p>
<p>Se deben crear componentes y subcomponentes que contengar las funcionalidades de la aplicación, que se podrán importar y exportar para ser reutilizados en el archivo App.js, y renderizados en el archivo index.js</p>
<p>Una vez creada la aplicación, con todos sus archivos, se ejecuta el proyecto tipeando en la terminal el comando "npm start". Esto hace que el juego se vea en el navegador, mediante el localhost: 3000.</p>

### Comandos básicos de git en la terminal
<p>Para poder subir el proyecto a github, es necesario introducir en la terminal determinados comandos. Y es de destacar que el proyecto piedra, papel o tijera se subio a un repositorio público con dos ramas (gh-pages y main).</p>
<p>Para poder iniciar un repositorio con la rama main, se debe crear el repositorio en github y en la terminal local, ingresar los siguientes comandos:</p>

- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin git@github.com:(usuario)/(nombre-repositorio).git
- git push -u origin main
<p>Luego para ir subiendo los cambios a github, solo quedarían ingresar:</p>
<ul>
<li>git add . </li>
<li>git commit -m "(nombre del commit)"</li>
<li>git push -u origin main</li>
</ul>
<p>Sin embargo, para poder subir el proyecto en la rama gh-pages en github, se deben ingresar los siguientes pasos y comandos:</p>
<p> Para añadir el repositorio como remoto a nuestro proyecto, en la terminal debemos hacer:

```sh
$ git remote add origin https://github.com/{nombre_usuario}/practico3.git
```

Modificar el  ```package.json```: 

   * Ahora tenemos 3 opciones:
       * O añadir la ruta a nuestro proyecto
            ```json
                "homepage": "https://myusername.github.io/practico3",
            ```
        * O la ruta a la Github page
            ```json
                "homepage": "https://myusername.github.io",
            ```
            > (previamente hay que crear desde github la page y tomar esa dirección para esto. Sin la s en https y sin la barra final /).
        * O usar un domino personalizado [¹] (no usaremos esta opción)
            ```json
                "homepage": "https://misitio.com",
            ```
    > La ruta ```homepage``` define la url base donde se construirá el archivo html.

Instalar gh-pages:

```sh
npm install gh-pages --save-dev
```

Luego en el archivo ```package.json``` en la sección ```scripts``` añadir las siguientes lineas ```predeploy``` e ```deploy```:

```json
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```
> El predeploy se ejecutará automaticamente después del deploy.

> Si quisieramos hacer el deploy en la rama 'deploy', cambiar el deploy anterior por el siguiente:
```json
  "scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b deploy -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

Ahora el despliegue del sitio:

```sh
$ npm run deploy
```

Chequear en las configuraciones de nuestra GitHubPages que tome el código desde la rama ```gh-pages```.


[¹] Podemos configurar el dominio añadiendo un archivo ```CANME``` dentro de la carpeta ```public```, y dentro del archivo agregar:

```sh
misitio.com
```
> Pero para eso leer sobre dominios. (No usaremos nada de esto por ahora)


# ¡Mi código no está en la rama deploy!
Hasta acá sólo desplegamos, no pusheamos nuestro código, debemos subir nuestros cambios a nuestra rama ```main```

<p>Listo, ahora remotamente tenemos dos ramas:</p>
   <ol> <li>Main</li>
    <li>Deploy</li></ol>
<p>Donde en la primera tendremos nuestro código que vamos trabajando diariamente y en la segunda, nuestro despliegue de la app.</p>

<p><u>Material de consulta para la creación de la rama gh-pages: archivo Deploy.md utilizadas en clases.</u></p>

### Concluciones
<p>Crear la aplicación de juego piedra, papel o tijeras, con react, ha sido todo un desafío, cuesta lidiar con los errores, sobre todo al momento de utilizar los props y los estados. Es una herramienta sin dudas útil, pero no hay que tomarla muy a la ligera, ya que un mínimo descuido, como por ejemplo olvidarte de poner (), no cerrar {}, etc. más allá de generar errores, nos puede hacer perder mucho tiempo, hasta que nos demos cuenta de ese detalle, por eso es importante, programar en React con tiempo y dedicación, y así evitaremos muchos dolores de cabeza.</p>
<p>Sin lugar a dudas este práctico ha sido el más intenso de este tramo formativo, en donde se ha tenido que aplicar mucho conocimiento en poco tiempo, haciendo del mismo todo un desafío; y con respecto al juego, sin lugar a dudas, tiene errores y líneas de códigos que se pueden ir mejorando.</p>