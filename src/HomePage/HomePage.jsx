import "./HomePage.css";
import { Link } from "react-router-dom";
import GameGuessNumber from "../assets/guessTheNumber.jpg";

function HomePage() {
    return (
        <div className="container">
            <div className="gamesList">
                <Link to="/guessTheNumber" className="gameCard">
                    <img src={GameGuessNumber} alt="" className="gameImg" />
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
