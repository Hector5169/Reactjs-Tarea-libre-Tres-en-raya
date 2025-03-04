1. Introducción
Este documento detalla el proceso de desarrollo del juego Tic-Tac-Toe utilizando React.js, desde la configuración inicial hasta la solución de problemas técnicos que surgieron durante la implementación.

2. Objetivo
Mi objetivo con este proyecto fue desarrollar un juego funcional de Tres en Raya (Tic-Tac-Toe) en React.js, utilizando estados y componentes para gestionar la lógica del juego y la interfaz de usuario.

3. Configuración del Proyecto
Inicié el proyecto creando una aplicación de React con el siguiente comando:

npx create-react-app tic-tac-toe
cd tic-tac-toe
npm start

Verifiqué el archivo package.json para confirmar la presencia de react-scripts y otros paquetes necesarios.

4. Desarrollo de la Aplicación

Creé un componente TicTacToe para manejar el tablero y la lógica del juego.

Implementé la gestión del estado con useState para almacenar los movimientos de los jugadores.

Agregué una función para determinar el ganador basándose en combinaciones de victoria predefinidas.

Diseñé la interfaz utilizando CSS-in-JS dentro del mismo componente.

Incorporé un botón de reinicio para permitir jugar múltiples partidas.

5. Problemas y Soluciones

Error "Missing script: 'start'": Resolví este problema verificando la ubicación del directorio y asegurando la correcta instalación de las dependencias.

Archivos no encontrados o estructura incorrecta: Revisé la carpeta del proyecto y reinstalé los paquetes necesarios con npm install.

6. Resultados
El juego funciona correctamente, permitiendo turnos alternos entre "X" y "O" y determinando el ganador. La interfaz es sencilla pero funcional, con una opción para reiniciar el juego.

7. Conclusión
El desarrollo del juego Tic-Tac-Toe en React.js me permitió afianzar conocimientos sobre el uso de estados, eventos y estructuras de componentes en React. 

CAPTURAS DE PANTALLA:

![1](https://github.com/user-attachments/assets/a1d5818b-d771-43d0-90aa-9534318a57cc)

![2](https://github.com/user-attachments/assets/6ae7e1dc-3f4e-49b5-88c4-4ac59f4c30c4)

![3](https://github.com/user-attachments/assets/302741b4-804f-4b50-a081-cd2ba9bc9412)



