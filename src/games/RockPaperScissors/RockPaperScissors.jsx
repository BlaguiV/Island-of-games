import { Link } from 'react-router-dom'
import './RockPaperScissors.css'
import { useState } from 'react'

function RockPaperScissors() {
    const [playerSelect, setPlayerSelect] = useState(null)
    const [computerSelect, setComputerSelect] = useState(null)
    const [text, setText] = useState("")
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [endGame, setEndGame] = useState(false)
    const choices = ["Rock", "Paper", "Scissors"]

    const game = (playerSelect) => {
        if (endGame) {
            return
        }

        const computerChoice = choices[Math.floor(Math.random() * 3)]
        setComputerSelect(computerChoice)
        setPlayerSelect(playerSelect)
        getWinner(playerSelect, computerChoice)
    }

    const getWinner = (playerSelect, computerSelect) => {
        if (playerSelect === computerSelect) {
            setText("Draw")
        } else if (
            (playerSelect === "Paper" && computerSelect === "Rock") ||
            (playerSelect === "Rock" && computerSelect === "Scissors") ||
            (playerSelect === "Scissors" && computerSelect === "Paper")
        ) {
            setText("You win")
            setPlayerScore(prevScore => {
                const newScore = prevScore + 1
                if (newScore >= 10) {
                    setText("You win the game!")
                    setEndGame(true)
                }
                return newScore
            })
        } else {
            setText("You lose")
            setComputerScore(prevScore => {
                const newScore = prevScore + 1
                if (newScore >= 10) {
                    setText("Computer wins the game!")
                    setEndGame(true)
                }
                return newScore
            })
        }
    }

    const newGame = () => {
        setPlayerSelect(null)
        setComputerSelect(null)
        setPlayerScore(0)
        setComputerScore(0)
        setText('')
        setEndGame(false)
    }

    return (
        <div className='container'>
            <Link to="/">
                <button className='homeButton'>Home</button>
            </Link>
            <div className="buttonContainer">
                {choices.map((choice) => (
                    <button className='gameButton' key={choice} onClick={() => game(choice)} disabled={endGame}>
                        {choice}
                    </button>
                ))}
            </div>
            <h3 className='choices'>Your choice: {playerSelect}</h3>
            <h3 className='choices'>Computer choice: {computerSelect}</h3>
            <h1 className='gameText'>{text}</h1>
            <h3 className='gameScore'>Game score: Player: {playerScore} || Computer: {computerScore} </h3>
            <button className='newGameButton' onClick={newGame}>New game</button>
        </div>
    )
}

export default RockPaperScissors
