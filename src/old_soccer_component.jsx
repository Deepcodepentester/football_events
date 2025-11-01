import axios from "axios"
import React from "react"
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'

export default function Soccer(params) {
    const currentUrl = window.location.href;
    console.log(currentUrl); // e.g., "https://example.com/path/to/page?param=value#section"
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const param1Value = urlParams.get('soccer');
    React.useEffect(()=>{
        let d= new Date().toISOString().slice(0,10);
        console.log(d)
        axios.get(`https://www.thesportsdb.com/api/v1/json/123/eventsday.php?d=${'2025-10-19'}&s=Soccer&l=${param1Value}`).then(function (response) {
            
    
        console.log(response.data.events)
        return response.data.events
        
        
        
    
    
        
    }).then(function (response) {
        console.log(response)
        var matches= response.map(function (each) {
            console.log(each.strHomeTeam)
            return(
                <div className="each-match-wrapper">
            
            <div className="each-match-col-1 each-match-col">
                <img src={each.strHomeTeamBadge} alt="" width="25px" height="25px"/>
                <img src={each.strAwayTeamBadge} alt="" width="25px" height="25px"/>
                
                
            </div>
            <div className="each-match-col each-match-col-2">
            

                <h3>{each.strHomeTeam}</h3>
                <h3>{each.strAwayTeam}</h3>
                
            </div>
            <div className="each-match-col">
                <h3>{each.intHomeScore}</h3>
                <h3>{each.intAwayScore}</h3>
            </div>
        </div>
            )
            
        })
        console.log(matches)
            getmatch(matches)
        
            
            
        }).catch(function (response) {
        console.log(response)
    })

    },[])
    let [match,getmatch] = React.useState()
    return(
        <div>
            <h1>{param1Value}</h1>
        {match}
        </div>
        
    )
}