import axios from "axios"
import React from "react"
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'

export default function Table(props) {
    console.log("table stat")
    React.useEffect(()=>{
        axios.get('https://www.thesportsdb.com/api/v1/json/123/lookuptable.php?l=4328').then(function (response) {
    
    var qarr= response.data.table.map((qst)=>{
        //console.log(qst)
        return(
            <tr>
                    <td>{qst.intRank}</td>
                    <td className="standing-tm"> <img src={qst.strBadge} alt="" width="25px" height="25px"/> {qst.strTeam}</td>
                    <td>{qst.intPlayed}</td>
                    <td>{qst.intGoalDifference}</td>
                    <td>{qst.intPoints}</td>
                    
            </tr>
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
    })

    },[])
    let [table,gettable] = React.useState()
    return(
        <>
            <h1>Standings</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th>P</th>
                        <th>GD</th>
                        <th>PTS</th>
                    </tr>
                </thead>
                <tbody>
                    {[<tr>
                        <td>obi</td>
                        <td>obi</td>
                        <td>obi</td>
                        <td>obi</td>
                        <td>obi</td>
                        
                </tr>,<tr>
                        <td>ada</td>
                        <td>oada</td>
                        <td>obi</td>
                        <td>obi</td>
                        <td>obi</td>
                        
                </tr>]}
                {table}
                </tbody>
                
            </table>
            <Matches />
            
        </>
    )
}


export function Matches() {
    React.useEffect(()=>{
        let d= new Date().toISOString().slice(0,10);
        console.log(d)
        axios.get(`https://www.thesportsdb.com/api/v1/json/123/eventsday.php?d=${'2025-10-19'}&s=Soccer&l=English Premier League`).then(function (response) {
            
    
        console.log(response.data.events)
        return response.data.events
        
        
        
    
    
        
    }).then(function (response) {
        console.log(response)
        var matches= response.map(function (each) {
            console.log(each.strHomeTeam)
            return(
                <div className="each-match-wrapper">
            
            <div className="each-match-tm">
                <img src={each.strHomeTeamBadge} alt="" width="25px" height="25px"/>
                <h3>{each.strHomeTeam}</h3>
                <h3>{each.intHomeScore}</h3>
            </div>
            <div className="each-match-tm">
            

                <img src={each.strAwayTeamBadge} alt="" width="25px" height="25px"/>
                <h3>{each.strAwayTeam}</h3>
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
        /* strLeagueBadge
        
intAwayScore
: 
"2"
intHomeScore
: 
"1"
intRound
: 
"8"
intScore
: 
null
intScoreVotes
: 
null
intSpectators
: 
null
strAwayTeam
: 
"Manchester United"
strAwayTeamBadge
: 
"https://r2.thesportsdb.com/images/media/team/badge/xzqdr11517660252.png"
strBanner
: 
"https://r2.thesportsdb.com/images/media/event/banner/1ufkot1750328540.jpg"
strCity
: 
""
strCountry
: 
"England"
strDescriptionEN
: 
""
strEvent
: 
"Liverpool vs Manchester United"
strEventAlternate
: 
"Manchester United @ Liverpool"
strFanart
: 
null
strFilename
: 
"English Premier League 2025-10-19 Liverpool vs Manchester United"
strGroup
: 
""
strHomeTeam
: 
"Liverpool"
strHomeTeamBadge
: 
"https://r2.thesportsdb.com/images/media/team/badge/kfaher1737969724.png"
strLeague
: 
"English Premier League"
strLeagueBadge
: 
"https://r2.thesportsdb.com/images/media/league/badge/gasy9d1737743125.png" */
        
        <div className="each-match-con">
            <h1>Matches</h1>
            {match}
        </div>
    )
}