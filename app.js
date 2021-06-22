window.onload = function(){
    
    var stateGame = [
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
    
    /////////TURNO JUGADOR/////////////
    const STATUS_DISPLAY = document.querySelector('.game-notification')
    CURRENT_PLAYER_TURN = () => `Turno del jugador: ${currentPlayer}`
    var currentPlayer = 'Rojo'

    /////////FUNCIONES/////////////
    function main(){
        handleStatusDisplay(CURRENT_PLAYER_TURN())
        listeners()
    }

    main()

    /////////MUESTRA TURNO JUGADOR ACTUAL/////////////
    function handleStatusDisplay(message){
        STATUS_DISPLAY.innerHTML = message
    }
   
    /////////DETECTAR QUE CELDA DIO CLICK/////////////
    function listeners(){
        document.querySelector('.game').addEventListener('click', handleCellClick)
    }

    function handleCellClick(clickedEvent){
        const clickedCell = clickedEvent.target //Almacena el objeto html
        if(clickedCell.classList.contains('piezaBlanca')){
            const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell)
            console.log(clickedCellIndex)
            if(stateGame[clickedCellIndex] !== 3 ){
                alert("No es tu turno")
            }
        }
        console.log(clickedCell)
    }
}

