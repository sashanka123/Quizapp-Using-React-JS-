import React,{useState,useContext} from 'react'
import { QuizContext } from '../Helpers/Context';
import {Questions} from '../Helpers/QuestionBank';

function Quiz() {
    const [currQuestion,setcurrQuestion]=useState(0);
    const [option,setOption]=useState("");
    const {score,setScore,gameState,setGameState}=useContext(QuizContext);
    const nextquestion=()=>{
        if(option==Questions[currQuestion].answer)
        {
            setScore(score+1)
            console.log(score)
        }
        setcurrQuestion(currQuestion+1)
    }
    return (
        <div className="quiz">
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="btn">
                <button onClick={()=>{setOption("A")}}>{Questions[currQuestion].optionA}</button>
                <button onClick={()=>{setOption("B")}}>{Questions[currQuestion].optionB}</button>
                <button onClick={()=>{setOption("C")}}>{Questions[currQuestion].optionC}</button>
                <button onClick={()=>{setOption("D")}}>{Questions[currQuestion].optionD}</button>
                {currQuestion==Questions.length-1?<button onClick={setGameState("endScreen")}>Finish Quiz</button>:<button onClick={nextquestion}>Next Question</button>}
            </div>
                       
        </div>
    )
}

export default Quiz;
