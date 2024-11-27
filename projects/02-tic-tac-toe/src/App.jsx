import { useState, useEffect } from "react"
import confetti from "canvas-confetti"
import { Square } from "./components/Square"
import { TURNS } from "./constantes"
import {CheckWinner, CheckEndGame} from './logic/board'
import { WinnerModal } from "./components/WinnerModal"
import { GameModal } from "./components/GameModal"
import { TurnModal } from "./components/TurnModal"
import { saveGameToStorage, resetGameStorage } from "./logic/Storage"



function App() {

  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
    // null es que no hay ganador y false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()

  }

  const updateBoard = (index) => {

    //Si ya tiene algo no utilizamos esta posicion
    if (board[index] || winner) return
    //Actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn 
    setBoard(newBoard)
    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X 
    setTurn(newTurn)
    //Guardar aqui partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    //Revisar si hay un ganador
    const newWinner = CheckWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (CheckEndGame(newBoard)){
      setWinner(false) // empate
    }
  }

  useEffect(() => {
    //Como minimo se ejecuta una vez
    console.log('useEffect')
  }, [winner])

  return (

    <main className="board">
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Reiniciar juego</button>

      <section className="game">
        <GameModal board={board} updateBoard={updateBoard}/>
      </section>

      <section>
        <TurnModal turn={turn} TURNS={TURNS}/>
      </section>

        <WinnerModal winner={winner} resetGame={resetGame} Square={Square}/>

    </main>

  )
}

export default App
