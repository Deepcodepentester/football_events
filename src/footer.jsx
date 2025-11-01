import axios from 'axios';
import Form  from './form';
import Bet  from './bet';
import React  from 'react';

/* 0
: 
{id: 1, question: "Whose autobiography is entitled 'I Know Why the Caged Bird Sings'?", answer: 'Maya Angelou', difficulty: 2, category: 4}
1
: 
{id: 2, question: "What boxer's original name is Cassius Clay?", answer: 'Muhammad Ali', difficulty: 1, category: 4}
2
: 
{id: 3, question: 'What movie earned Tom Hanks his third straight Oscar nomination, in 1996?', answer: 'Apollo 13', difficulty: 4, category: 5}
3
: 
{id: 4, question: 'What actor did author Anne Rice first denounce, then praise in the role of her beloved Lestat?', answer: 'Tom Cruise', difficulty: 4, category: 5}
4
: 
{id: 5, question: 'What was the title of the 1990 fantasy directed by…n about a young man with multi-bladed appendages?', answer: 'Edward Scissorhands', difficulty: 3, category: 5} */

var gg = {src:"http",alt:"scheme"}
function axreq() {
    let qarr =null
    axios.get('http://localhost:3000/questions/page/1').then(function (response) {
    //console.log(response.data.questions)
    qarr= response.data.questions.map((qst)=>{
        console.log(qst)
        return(
        <Question1 questions={qarr}/>
        
        )
    })
        console.log(qarr)
        return qarr
    }).catch(
        function (response) {
            console.log(response)
            
        }
    )
    console.log(qarr)
    //return qarr="return"
}


function Question(props) {
    return(
        <article>
            <div className="artdv">
                <h3>id</h3>{props.id}
            </div>
            <div className="artdv">
                <h3>question</h3>{props.question}
            </div>
            <div className="artdv">
                <h3>answer</h3>{props.answer}
            </div>
            <div className="artdv">
                <h3>{gg.alt}</h3>{gg.src}
            </div>
        </article>
    )
}

function Question1(props) {
    return(
        <article>
            <div className="artdv">
                <h3>id</h3>{props.questions.id}
            </div>
            <div className="artdv">
                <h3>question</h3>{props.questions.question}
            </div>
            <div className="artdv">
                <h3>answer</h3>{props.questions.answer}
            </div>
            <div className="artdv">
                <h3>{gg.alt}</h3>{gg.src}
            </div>
        </article>
    )
}


export default function footer() {
    //console.log(axreq())
    
    return (
        <>
            <Bet />
            <h1>footer component</h1>
            <Question id="1" question="hose autobiography is entitled 'I Know Why the Caged Bird Sings'?"
             answer="Maya Angelou"/>
            <Question id="2" question="What boxer's original name is Cassius Clay?" 
            answer="Muhammad Ali"/>
            <Question id="3" question="What movie earned Tom Hanks his third straight Oscar nomination, in 1996?" answer="Apollo 13"/>
            {[<Question id="1" question="hose autobiography is entitled 'I Know Why the Caged Bird Sings'?"
             answer="Maya Angelou"/>,
             <Question id="1" question="hose autobiography is entitled 'I Know Why the Caged Bird Sings'?"
             answer="Maya Angelou"/>]}
             <Form />
             
             
            
        </>
   )
}