import { WINNER_COMBOS } from "../constantes"

export const CheckWinner = (boardToCheck) => {
    //Revisamos todas las combinaciones ganadoras 
    //para ver si x u o gano
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if (
        boardToCheck[a] && boardToCheck[a] === boardToCheck[b]
        && boardToCheck[a] === boardToCheck[c]
      )
      {
        return boardToCheck[a]
      }
    }
    return null
  }

  export const CheckEndGame = (newBoard) => {
    //Revisamos si hay un empate si no hay mas espacios vacios en el tablero
    return newBoard.every((square) => square != null)
  }

  