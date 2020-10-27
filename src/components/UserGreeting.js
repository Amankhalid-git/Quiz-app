import React from 'react'

function UserGreeting(props) {
    if(props.correct >=2){
    return (
        <div>
            <h2 className="greetings">You Passed The Quiz</h2>
        </div>
    )}else{
        return (
            <div>
                <h2 className="greetings">You Failed The Quiz</h2>
            </div>
        )
    }
}

export default UserGreeting;
