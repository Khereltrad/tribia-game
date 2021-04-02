EJERCICIO FINAL: Trivia Game
Crea una aplicación donde se pueda jugar a responder trivias
Use las librerías jquery, bootstrap u otras para el frontend, y express con mysql para la persistencia de datos y la autentificación de usuarios.

Link a Imagen en Mejor Calidad
 

Requisitos:
-              Crear pantalla de registro de usuario y de login o ingreso al sistema (pueden estar juntas o separadas)
LOGRADO        donde se pueda registrar con un nombre de usuario, correo electrónico y contraseña.   El formulario del login debe ser con el correo y contraseña.
 
-              La pantalla principal debe tener un botón para ingresar nuevas preguntas y una lista con los usuarios que han respondido la trivia,
               ordenados por su porcentaje de logro (debe almacenar cada Juego en una colección, con sus respectivos Nombre, puntaje y fecha del Juego), 
               además de un botón para poder jugar.
 
-              La página del Juego, debe permitir jugar a la trivia, respondiendo 3 preguntas al azar. 
LOGRADO        Una vez confirmadas las 3 respuestas, se debe informar al usuario cuantas fueron correctas, y posteriormente redireccionar a la pantalla principal.

-              Se debe validar que todas las preguntas sean respondidas.
 
LOGRADO        La pantalla de Crear Pregunta debe permitir crear una pregunta y agregar 3 respuestas, siendo una de ellas la correcta y las otras 2 respuestas incorrectas.
-              Se debe validar que la pregunta tenga al menos 15 caracteres de largo y las respuestas no estén en blanco.
 

Requisitos para cinturón Amarillo, Negro y Rojo:

Amarillo: Cumplir todo en 24 horas. 

Rojo: Cumplir con lo anterior en 5 horas. 

Negro: Cumplir con lo anterior en 5 horas y agregar la siguiente funcionalidad:
- FALTA     El campo input SEARCH debe funcionar. Es decir, al momento de escribir un nombre de usuario debería filtrar los usuarios de esa tabla.  (solo el nombre del usuario)
-           Si no existen 3 preguntas como mínimo en la base de datos, debería alertar o redireccionar a la pantalla de agregar preguntas. 
- LOGRADO   El diseño debe cumplir con al menos un 60% de similitud al bosquejo. 
