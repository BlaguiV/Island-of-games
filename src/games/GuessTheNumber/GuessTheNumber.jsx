import "./GuessTheNumber.css"
import { Link } from "react-router-dom"
import { useState } from "react"
function GuessTheNumber() {
    const maxAttempts = 10
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber())
    const [attempts, setAttempts] = useState(0)
    const [userNumber, setUserNumber] = useState("")
    const [text, setText] = useState('')
    const [endGame, setEndGame] = useState(false)

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1
    }

    const checkNumber = () => {
        if (attempts >= maxAttempts) {
            setText("You use all attempts")
            return
        }

        if (isNaN(Number(userNumber)) || Number(userNumber) < 1 || Number(userNumber) > 100) {
            setText("Type correct number (1 - 100)")
            return
        }

        if (randomNumber < userNumber) {
            setText("Too high")
        }

        if (randomNumber > userNumber) {
            setText("Too low")
        }

        if (Number(userNumber) == randomNumber) {
            setText(`You guessed the number in ${attempts} attempts `)
            setEndGame(true)
        } else {
            setAttempts(attempts + 1)
        }
    }

    const restartGame = () => {
        setRandomNumber(generateRandomNumber())
        setUserNumber("")
        setAttempts(0)
        setText('')
        setEndGame(false)
    }

    return (
        <>
            <div className="container">
                <Link to="/">
                    <button className="homeButton">Home</button>
                </Link>
                <input
                    className="inputForNumber"
                    type="number"
                    value={userNumber}
                    onChange={(e) => setUserNumber(e.target.value)}
                />
                <button className="checkButton" onClick={checkNumber} disabled={endGame}>Check</button>
                <h3 className="text">{text}</h3>
                <p className="attempts">Attempts: {attempts}</p>
                <button className="newGameButton" onClick={restartGame}>New game</button>
            </div>
        </>
    )
}

export default GuessTheNumber