import React from 'react'
import TotalCorrect from'./TotalCorrect';
import TotalIncorrect from './TotalIncorrect';
function ScoreArea(props) {
    return (
        <div className="scorearea">
            <h2>Score </h2>
            <div>
          <TotalCorrect correct={props.correct}/>
          <TotalIncorrect incorrect={props.incorrect}/>
          </div>
        </div>
    )
}

export default ScoreArea;
