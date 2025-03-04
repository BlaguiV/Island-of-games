
import HomePage from "./HomePage/HomePage"
import GuessTheNumber from "./games/GuessTheNumber/GuessTheNumber"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import RockPaperScissors from "./games/RockPaperScissors/RockPaperScissors"
import TicTacToe from './games/TicTacToe/TicTacToe'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guessTheNumber" element={<GuessTheNumber />} />
          <Route path="/rockPaperScissors" element={<RockPaperScissors />} />
          <Route path="/ticTacToe" element={<TicTacToe />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


