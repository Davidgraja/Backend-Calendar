
# Backend Calendar  🗓️

Backend Calendar  es un servició que permite el manejo basico y lógico de autenticación y  eventos en un calendario.

## Uso del servicio:
Este backend se encuentra actualmente desplegado y listo para usar , Puedes encontrar toda su documentación aqui 👉 [ Doc Backend Calendar](https://documenter.getpostman.com/view/23520684/2s93eSYa3P)

Ahora , si desea tomar el codigo de este servicio , implementar nuevas Funcionalidades y desplegarlo en otro hosting  solo es necesario ejecutar los siguientes pasos :

## Instalación
El sercivio esta construido con [Node js](https://nodejs.org/es) , por lo cual es necesario tenerlo instalado de manera local en nuestra maquina de desarrollo 

- con Node js  instalado , podremos realizar la clonacion de este repositorio :

  HTTPS:

  ```bash
    git clone https://github.com/Davidgraja/Backend-Calendar.git 

  ```

  SSH :
  ```bash
    git clone git@github.com:Davidgraja/Backend-Calendar.git 

  ```

  Github CLI :
  ```bash
    git clone gh repo clone Davidgraja/Backend-Calendar 

  ```

- Navega hacia la carpeta Backend Calendar y instala sus dependencias:

  ```bash
  cd Backend-Calendar
  npm install 

  ```
- configura tus variables de entorno dentro de un archivo __.env__ : 

  `PORT` : puerto en cual quieres que corra de manera local tu servicio 

  `MONGO_CNN` : cadena de conexion a MongoDB

  `PRIVATE_KEY` :una llave privada para la firma de tokens en el servicio 


- Levanta tu servicio :

  ```bash
    npm start   
  ```
  Si haces uso de  [nodemon](https://www.npmjs.com/package/nodemon) puedes ejecutar el comando 
  ```bash
    npm run dev   
  ```
  
  o puedes ejecutar el archivo `index.js` :
  ```bash
    node index.js   
  ```

Con estos pasos ya deberías de tener tu servicio funcionando 😊

## Herramientas usadas:
- [Node js](https://nodejs.org/es) 
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [express](https://expressjs.com/es/)
- [cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-validator](https://express-validator.github.io/docs)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Moment](https://momentjs.com/)
- [mongoose](https://mongoosejs.com/)


## información adicional:
Se ha creado un frontend el cual trabaja de la mano con este backend  , en este puedes ver funcionando su  servicio  de autenticación y manejo de eventos.

link hacia : [calendar app ](https://marvelous-medovik-7dc29f.netlify.app)  
link hacia el codigo en  Github : [ Frontend-Calendar](https://github.com/Davidgraja/Frontend-Calendar)