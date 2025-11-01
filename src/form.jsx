import React  from 'react';
import axios from 'axios';
export default function () {
    let [data,setData]= React.useState()  
    console.log("form default")

    function show(e) {
        let qarr =null
        e.preventDefault()
        console.log("loading stoped")
        axios.get('http://localhost:3000/questions/page/1').then(function (response) {
    //console.log(response.data.questions)
    qarr= response.data.questions.map((qst)=>{
        //console.log(qst)
        return(
        /* <Question1 questions={qarr}/> */
        <h1>{qst.question}</h1>
        )
    })
        //console.log(qarr)
        return qarr
    }).then(
        function (response) {
            console.log(response)
            console.log("second then")
            
            {setData(response)}
            
        }
    ).catch(
        function (response) {
            console.log(response)
            
        }
    )
        //{setData(axreq())}
        //{setData([<h1>1</h1>,<h1>2</h1>])}
        
    }

    return(
        <div>
            <form action="" method="post" onClick={show}>
                <input type="text" name="" id=""/>
                <button type="submit">Submit</button>
            </form>
            <h1></h1>
            {data}
            
        </div>
        
        
    )
}



function axreq() {
    let qarr =null
    axios.get('http://localhost:3000/questions/page/1').then(function (response) {
    //console.log(response.data.questions)
    qarr= response.data.questions.map((qst)=>{
        console.log(qst)
        return(
        /* <Question1 questions={qarr}/> */
        <h1>{qst.question}</h1>
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