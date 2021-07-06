function cargar_tableroNuevo() {
    

    ArrayInicial = [
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [2,0,2,0,2,0,2,0],
        [0,2,0,2,0,2,0,2],
        [2,0,2,0,2,0,2,0],
    ];
    puntosJugador1 = 0;
    puntosJugador2 = 0;
    turnoJugador = 1;
    dibujar_fichas(ArrayInicial, puntosJugador1, puntosJugador2, turnoJugador);
}

function cargar_tablero() {
    ArrayInicial = [
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [2,0,2,0,2,0,2,0],
        [0,2,0,2,0,2,0,2],
        [2,0,2,0,2,0,2,0],
    ];

    puntosJugador1 = 0;
    puntosJugador2 = 0;
    turnoJugador = 1;

    dibujar_tablero();
    dibujar_fichas(ArrayInicial, puntosJugador1, puntosJugador2, turnoJugador);

}

function dibujar_tablero() {
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < 8; i++) {
        var hilera = document.createElement("tr");

        for (var j = 0; j < 8; j++) {
            var celda = document.createElement("td");
            celda.id = i + "-" + j;
            indice = i + j;
            if (indice%2 == 0) {               
                celda.className = 'casilla-blanca';   
            } else {
                celda.className = 'casilla-negra';      
            }
 
            hilera.appendChild(celda);
        }

        tblBody.appendChild(hilera);
    }
    tabla.appendChild(tblBody);
    marcoTablero.appendChild(tabla);


}

function dibujar_fichas(ArrayJuega, puntosJuega1, puntosJuega2, turnoJuega) {
    
    document.getElementById('puntos1').value = puntosJuega1;

    document.getElementById('puntos2').value = puntosJuega2;

    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var nombreCelda = i + "-" + j;
            var celda = document.getElementById(nombreCelda);
            celda.id = i + "-" + j;
            indice = i + j;
            if (indice%2 == 0) {               
                celda.className = 'casilla-blanca';        
                
            } else {
                celda.className = 'casilla-negra';           
            }
            celda.classList.remove("ficha-blanca");
            celda.classList.remove("ficha-negra");

            if ( ArrayJuega[i][j] == 1 ) {
                celda.classList.add("ficha-blanca");                
            }
            else if( ArrayJuega[i][j] == 2 ) {
                celda.classList.add("ficha-negra");
            }
        }   
    }    
}

function casillaValida(colorFichas, posicionAnterior, posicionNueva){
    var filaAnterior = parseInt(posicionAnterior.substring(0,1));
    var columnaAnterior = parseInt(posicionAnterior.substring(2));
    var filaNueva = parseInt(posicionNueva.substring(0,1));
    var columnaNueva = parseInt(posicionNueva.substring(2));
    if (colorFichas == 'blancas'){       
        if(filaAnterior < 8 
            && filaNueva == (filaAnterior+1) 
            && Math.abs(columnaAnterior-columnaNueva) == 1){
        
            return true;
        }
        else if(filaAnterior < 7 
            && filaNueva == (filaAnterior+2) 
            && Math.abs(columnaAnterior-columnaNueva) == 2){
            
            var posicionPosibleFicha = (filaAnterior+1) + "-" + (columnaAnterior + ((columnaNueva-columnaAnterior)/2));
            console.log(posicionPosibleFicha);
            var casillaVerificar = document.getElementById(posicionPosibleFicha);
            if (casillaVerificar.classList.contains('ficha-negra')){ 
                casillaVerificar.classList.remove("ficha-negra");
                return true;
            }
        }
    }   
    else if (colorFichas == 'negras') {

        if(filaAnterior > 1 
            && filaNueva == (filaAnterior-1) 
            && Math.abs(columnaAnterior-columnaNueva) == 1){
            if (columnaAnterior > 1){
                console.log('se mueve desde la columna mayor a 1, hay celda libre avance columna anterior')
            }
            else if (columnaAnterior < 8){
                console.log('se mueve desde la columna menor a 8, hay celda libre avance columna siguiente')
            }
            return true;
        }
        else if(filaAnterior > 2 
            && filaNueva == (filaAnterior-2) 
            && Math.abs(columnaAnterior-columnaNueva) == 2){
            var posicionPosibleFicha = (filaAnterior-1) + "-" + (columnaAnterior + ((columnaNueva-columnaAnterior)/2));
            console.log(posicionPosibleFicha);

            var casillaVerificar = document.getElementById(posicionPosibleFicha);
            if (casillaVerificar.classList.contains('ficha-blanca')){ 
                casillaVerificar.classList.remove("ficha-blanca");
                return true;
            }
        }
    }
    return false;
}
