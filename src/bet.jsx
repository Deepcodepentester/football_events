import axios from "axios"
import React from "react"
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Table from './table.jsx'

export default function home(params) {

    React.useEffect(()=>{
        axios.get('https://www.thesportsdb.com/api/v1/json/123/all_leagues.php').then(function (response) {
    
    var qarr= response.data.leagues.map((qst)=>{
        //console.log(qst)
        return(
            <h2>{qst.strLeague}</h2>
        )
        
        
    })
    console.log(qarr)
        console.log(response.data.leagues)
        return qarr
    }).then(function (response) {
        console.log(response)
        getleague(response)
            
            
        }).catch(function (response) {
        console.log(response)
    })

    },[])
    let [leagues,getleague] = React.useState()
    
    return(
        
            
            <div className="bet-con">
            <div className="lft-sdb">
                <ul>
                    <li>Soccer</li>
                    <li>Basketball</li>
                    <li>Boxing</li>
                </ul>
            </div>
            <div className="md-sdb">
                <div><Match /></div>
            </div>
            <div className="rt-sdb">{leagues}</div>
        </div>
    
        
        
    )
}


function Match(params) {
    axios.get('https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=4328').then(function (response) {
    
    /* var qarr= response.data.leagues.map((qst)=>{
        //console.log(qst)
        
        
        
    }) */
    /* console.log(qarr)
        console.log(response.data.leagues)
        return qar */
        console.log(response)
    }).catch(function (response) {
        console.log(response)
    })
    
    console.log("response")
    return(
        <>
        <div className="match-wrapper">
            <span>65</span>
            <div className="match-tm">
                <span>chelsea</span>
                <span>man u</span>
            </div>
            <div className="match-scr">
                <span>2</span>
                <span>2</span>
            </div>
            <div className="odd-wrapper">
                <Odd />
                <Odd />
                <Odd />
            </div>
            <div className="odd-wrapper">
                <Odd />
                <Odd />
                <Odd />
            </div>

        </div>
        </>
    )
}

function Odd(params) {
    return(
        <div className="odd">
            11.00

        </div>
    )
}


function OddWrapper(params) {
    return(
        <div className="odd-wrapper">
            <div className="match-tm">
                <span>chelsea</span>
                <span>man u</span>
            </div>
            <Odd />

        </div>
    )
}

export function Home(params) {
    return <h1>Home</h1>
}

 export function About(params) {
    return <h1>About</h1>
}