import React from 'react'
import Answer from './Answer';

function AnswerList(props) {

    const option = [];
    for( let i =0 ;i < props.dataSet.options.length; i++){
        option.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.options[i]}/>)
    }
    return (
        <div className="answerlist">
            {option}
        </div>
    )
}

export default AnswerList;
