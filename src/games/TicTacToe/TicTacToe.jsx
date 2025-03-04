import Board from './Board'
import Square from './Square'
import './TicTacToe.css'
import { useState } from 'react'



function TicTacToe() {

    const [winner, setWinner] = useState(null)
    const [text, setText] = useState('')

    const getWinner = (squares) => {
        const winCombination = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (i = 0; i < winCombination.length; i++) {
            const [a, b, c] = winCombination[i]
            if (squares[a] && squares[a] == squares[b] && squares[b] && squares[a] == squares[c]) {
                return squares[a]
            }
        }
        return null
    }

    return (
        <div>
            <Board />
        </div>
    )
}

export default TicTacToe