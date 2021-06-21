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
}

