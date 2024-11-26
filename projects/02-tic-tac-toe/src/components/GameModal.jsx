import { Square } from "./Square"

export function GameModal ({board, updateBoard}) {
    return(
    board.map((_, index) => {
      return (
        <Square 
          key={index} 
          index={index}
          updateBoard={updateBoard}
        >
          {board[index]}
        </Square>
      )
    })
    )
}