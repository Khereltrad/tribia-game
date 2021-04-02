
//* bloque para preguntas random

// <% for (var pregunta in preguntas) { %>
   // <div id="divop1" class="list-group-item list-group-item-action px-4">
   //    <div class="d-flex w-100 justify-content-between pb-3"><h5 class="mb-1" id="" name="ask1">Pregunta A </h5></div>
   //       <ul class="input-group-prepend list-group p-1">
   //          <li><input type="radio" class="d-inline-flex" name="answ1" value="Opcion A random A"><h6 class="ml-2 mb-0">Opcion A random A</h6></li>
   //          <li><input type="radio" class="d-inline-flex" name="answ1" value="Opcion A random B"><h6 class="ml-2 mb-0">Opcion A random B</h6></li>
   //          <li><input type="radio" class="d-inline-flex" name="answ1" value="Opcion A random C"><h6 class="ml-2 mb-0">Opcion A random C</h6></li>
   //       </ul>
   //    </div>
{/* <% } %>  */}


//* esquema de random 1  

let maxid = num; /* maximo de preguntas */
         for (i = 0; i < 3; i++) {
            let idrandom = Math.floor(Math.random() * maxid) + 1;
            preguntas[idrandom];
         }

//* video de Pablo Monteserin

var indice_aleatorio =Math.floor(Math.random()*preguntas.length);
var respuestas_posibles=respuestas[indice_aleatorio];
