import React from 'react'
import Question from './Question';
import AnswerList from './AnswerList';
import UserGreeting from './UserGreeting';


function QuizArea(props) {
    if(props.isFinished ){
        return  <UserGreeting  correct={props.correct}/>

    }
    return (
        <div className="questionarea" >
            
            <Question dataSet={props.dataSet}/>
            <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
        </div>
    )
}

export default QuizArea;
