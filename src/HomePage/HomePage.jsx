import "./HomePage.css";
import { Link } from "react-router-dom";
import GameGuessNumber from "../assets/guessTheNumber.jpg";
import RPS from '../assets/RPS.jpg'
function HomePage() {
    return (
        <div className="container">
            <div className="gamesList">
                <Link to="/guessTheNumber" className="gameCard">
                    <img src={GameGuessNumber} alt="" className="gameImg" />
                </Link>
                <Link to="/rockPaperScissors" className="gameCard">
                    <img src={RPS} alt="" className="gameImg" />
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
