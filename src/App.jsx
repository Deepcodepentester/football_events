import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {About, Home} from './bet'
import './App.css'
import Table from './table.jsx'
import Footer from './footer.jsx'
import Header from './header.jsx'
import Soccer from './soccer'
import League from './league'
import React from "react"
import axios from "axios"
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import { TailSpin } from 'react-loader-spinner';

function App1() {
  const [count, setCount] = useState(0)
  

  return (
    
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
    
  )
  
}
function App() {
  const dateref = useRef(null)
  const h1ref =useRef(null)
  const iref = useRef(null)
  console.log("rendering")
  React.useEffect(()=>{
    //dateref.current="2025-12-31"
    console.log("rendering use effect")
    axios.get('https://www.thesportsdb.com/api/v1/json/123/all_leagues.php').then(function (response) {

var qarr= response.data.leagues.map((qst)=>{
    //console.log(qst)
    return(
      <div>
        <Link to={`soccer/league/${qst.strLeague}`}>{qst.strLeague}</Link>
        {/* <h5 className="lgu"><a href={`soccer/league/${qst.strLeague}?soccer=${qst.strLeague}`}>{qst.strLeague}</a> </h5> */}

      </div>
      
      
    )
    
    
})
console.log(qarr)
    console.log(response.data.leagues)
    return qarr
    
}).then(function (response) {
    console.log(response)
    gettable(response)
        
        
    }).catch(function (response) {
    console.log(response)
    console.log("error occured")
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Server error:', error.response.data);
    } else if (error.request) {
      // Request was made but no response was received
      console.error('No response:', error.request);
    } else {
      // Something else happened in setting up the request
      console.error('Request setup error:', error.message);
    }
})

},[])
let [league,gettable] = React.useState()
let [allleague,getallleague] = React.useState(new Date().toISOString().slice(0,10))//'2025-10-25'
const [inputValue, setInputValue] = useState(new Date().toISOString().slice(0,10));
  

  return (
    <BrowserRouter>
            
            <>
                <Header />
                <div className="main-asvide-wrapper">
                  <div className="asvide-con">
                    {league}
                  </div>
                  <div className="main-con">
                    {/* <h1 ref={h1ref}>testing betting</h1> */}
                    
                    <button onClick={
                      ()=>{console.log('trying ooo')
                        getallleague('2025-10-19')}
                    }></button>
                    <input
  type="date"
  id="start"
  name="trip-start"
  value={inputValue}
   ref={dateref}
  onChange={(e) => {
    console.log(dateref.current.value)
    console.log(e.target.value)
    console.log(h1ref)
    console.log(iref)
    getallleague(e.target.value)
    setInputValue(dateref.current.value)
    console.log("date added")}} />
    <h1>{allleague}</h1>
    

    
                      <Routes>
            
                        <Route path="/about" element={<About />}/>
                        <Route path="/home" element={<Home />}/>
                        <Route path="/table" element={<Table />}/>
                        {/* <Route path="/soccer/*" element={<Soccer />}/> */}
                        {/* <Route path="/" element={<App1 />}/> */}
                        <Route path="/" element={<Leagues date={allleague}/>}/>
                        <Route path="/soccer/league/:league" element={<Soccer date={allleague}/>}/> 
                        <Route path="/leagues" element={<Leagues />}/> 
                      </Routes>
                  </div>
                  
                </div>
              
            </>
    </BrowserRouter>
  )
  
}

function Leagues(props) {
  const leagues = ["English Premier League","French Ligue 1",
"Spanish La Liga"]
console.log(`"English Premier League","French Ligue 1",
"Spanish La Liga"`)
console.log(props.date)

React.useEffect(()=>{
  console.log(`"English Premier League","French Ligue 1",
"Spanish La Liga" useeffect`)
  axios.get('https://www.thesportsdb.com/api/v1/json/123/all_leagues.php').then(function (response) {
    console.log(response.data.leagues)
//var qarr= leagues.map((qst)=>
var qarr= response.data.leagues.map((qst)=>{
  //console.log(qst)
  return(
    <League  league={qst.strLeague} date={props.date}/>
    
  )
  
  
})
console.log(qarr)
  console.log(response.data.leagues)
  return qarr
  
}).then(function (response) {
  console.log(response)
  setLoading(false);
  response.length >0?getmatch(response):getmatch(<h1>No events today</h1>)
  
      
      
  }).catch(function (response) {
  console.log(response)
})

},[props.date])
let [match,getmatch] = React.useState()
const [loading, setLoading] = useState(true);
return(
  <div>
    {match}
    
    
    
  </div>
  
)
  
}



export default App
