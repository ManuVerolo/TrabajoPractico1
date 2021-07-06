var turnoJugador = 0;
var posicionMarcada = "ninguna";
var mensaje = "";
var ArrayInicial = [
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [2,0,2,0,2,0,2,0],
    [0,2,0,2,0,2,0,2],
    [2,0,2,0,2,0,2,0],
];

var puntosJugador1 = 0;
var puntosJugador2 = 0;

//Parametro proximo turno Jugador
var turnoJugador = 1;

var marcoTablero = document.getElementById('tablero-marco');
//listener en casilla del tablero
marcoTablero.addEventListener('click', e => { seleccionCelda(e)})

var seleccionCelda = e => {
    //Selecciona una ficha blanca
    if (e.target.classList.contains('ficha-blanca')){          
        if (turnoJugador == 1) {
            if(e.target.classList.contains('casilla-seleccionada') !== true){
                e.target.classList.add("casilla-seleccionada");
                if (posicionMarcada !== "ninguna") {
                    var casillaDesmarca = document.getElementById(posicionMarcada);
                    casillaDesmarca.classList.remove("casilla-seleccionada");
                }
            }
            posicionMarcada = e.target.id;                       
        } else if (turnoJugador == 2) {                          
            mensaje = "No es tu turno";
            window.alert(mensaje);
        }

    } else if (e.target.classList.contains('ficha-negra')){    
        if (turnoJugador == 2) {
            if(e.target.classList.contains('casilla-seleccionada') !== true){
                e.target.classList.add("casilla-seleccionada");
                if (posicionMarcada !== "ninguna") {
                    var casillaDesmarca = document.getElementById(posicionMarcada);
                    casillaDesmarca.classList.remove("casilla-seleccionada");
                }
            }
            posicionMarcada = e.target.id;    
            //Si no es el turno correspondiente                   
        } else if (turnoJugador == 1) {                          
            mensaje = "No es tu turno";
            window.alert(mensaje);
        }
    } else {                                            
        if (posicionMarcada !== "ninguna") {            
            var casillaDesmarca = document.getElementById(posicionMarcada);
            if ( casillaDesmarca.classList.contains('ficha-blanca') 
                    && turnoJugador == 1 
                    && casillaValida('blancas', posicionMarcada, e.target.id)) { 
                e.target.classList.add("ficha-blanca");     
                casillaDesmarca.classList.remove("ficha-blanca");  
                casillaDesmarca.classList.remove("casilla-seleccionada"); 
                posicionMarcada = e.target.id;                    
                turnoJugador = 2;
                handlePlayerChange()
                //Seleccion ficha roja       
            }else if(casillaDesmarca.classList.contains('ficha-negra') 
                    && turnoJugador == 2 
                    && casillaValida('negras', posicionMarcada, e.target.id) ) {
                e.target.classList.add("ficha-negra"); 
                casillaDesmarca.classList.remove("ficha-negra");  
                casillaDesmarca.classList.remove("casilla-seleccionada"); 
                turnoJugador = 1; 
                posicionMarcada = e.target.id; 
               handlePlayerChange()                     
            }
        }
    }
}
    
    const STATUS_DISPLAY = document.querySelector('.game-notification')
    CURRENT_PLAYER_TURN = () => `Turno del jugador: ${turnoJugador}`


    function main(){
        handleStatusDisplay(CURRENT_PLAYER_TURN())
    }

    main()

    ///////MUESTRA TURNO JUGADOR ACTUAL EN EL DISPLAY/////////////
    function handleStatusDisplay(message){
        STATUS_DISPLAY.innerHTML = message
    }

    function handlePlayerChange() {
        turnoJugador = turnoJugador === 2 ? 2 : 1
        handleStatusDisplay(CURRENT_PLAYER_TURN())
    }

    /*var stateGame = [
        [0, 2, 0, 2, 0, 2, 0, 2],
        [2, 0, 2, 0, 2, 0, 2, 0],
        [0, 2, 0, 2, 0, 2, 0, 2],
        [1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1],
        [3, 0, 3, 0, 3, 0, 3, 0],
        [0, 3, 0, 3, 0, 3, 0, 3],
        [3, 0, 3, 0, 3, 0, 3, 0],
    ]
    var board = document.getElementById("board")

    stateGame.forEach(function(row, j){
        row.forEach(function(cell, i){
            if(cell == 0){
                var cuadroBlanco = document.createElement('div')
                cuadroBlanco.className = "cuadrado blanco"
                board.appendChild(cuadroBlanco)     
            }else if (cell == 1){
                var cuadroNegro = document.createElement('div')
                cuadroNegro.className = "cuadrado negro"
                board.appendChild(cuadroNegro) 
            }else if (cell == 2){
                var piezaBlanca = document.createElement('div')
                piezaBlanca.className = "cuadrado negro piezaBlanca"
                board.appendChild(piezaBlanca) 
            }else if (cell == 3){
                var piezaRoja = document.createElement('div')
                piezaRoja.className = "cuadrado negro piezaRoja"
                board.appendChild(piezaRoja) 
            }
        })  
    })
    



   
    ///////DETECTAR QUE CELDA DIO CLICK/////////////
    function listeners(){
        document.querySelector('.game').addEventListener('click', handleCellClick)
    }

    function handleCellClick(clickedEvent){
        const clickedCell = clickedEvent.target //Almacena el objeto html
        if(clickedCell.classList.contains('piezaBlanca') && currentPlayer === 'Blanco'){
            const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell)
            console.log(clickedCellIndex)
            handlePlayerChange()
        }else if(clickedCell.classList.contains('piezaRoja') && currentPlayer === 'Rojo'){
            const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell)
            console.log(clickedCellIndex)
            handlePlayerChange()
        }else if (clickedCell.classList.contains('piezaRoja') && currentPlayer === 'Blanco'){
            alert('No es tu turno')
        }else if(clickedCell.classList.contains('piezaBlanca') && currentPlayer === 'Rojo'){
            alert('No es tu turno')
        }else{
        }
    }


*/




    
