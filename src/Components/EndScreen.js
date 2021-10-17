import React,{useContext} from 'react';
import {QuizContext} from '../Helpers/Context';
import { Questions } from '../Helpers/QuestionBank';

function EndScreen() {
    const {score}=useContext(QuizContext);
    return (
        <div className="endscreen">
            <h2>Your Score is   {score}/{Questions.length}</h2>
        </div>
    )
}

export default EndScreen
