
import HomePage from "./HomePage/HomePage"
import GuessTheNumber from "./games/GuessTheNumber/GuessTheNumber"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guessTheNumber" element={<GuessTheNumber />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


