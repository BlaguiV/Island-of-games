import './Board.css'
import Square from './Square'

function Board() {
    return (
        <div className="board-wrapper">
            <div className="board">
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    )
}

export default Board
