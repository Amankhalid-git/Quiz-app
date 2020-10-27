import React from 'react'

function Question(props) {
    return (
        <div className="question">
           <h1> {props.dataSet.question} </h1> 
        </div>
    )
}

export default Question;
