import axios from "axios"
import React from "react"
import {BrowserRouter,Route,Routes,Link, useParams} from 'react-router-dom'
export default function League(props) {
    //const{league} = useParams()
    const currentUrl = window.location.href;
    console.log(currentUrl); // e.g., "https://example.com/path/to/page?param=value#section"
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const param1Value = urlParams.get('soccer');
    React.useEffect(()=>{
        let d= new Date().toISOString().slice(0,10);
        console.log(d)
        axios.get(`https://www.thesportsdb.com/api/v1/json/123/eventsday.php?d=${props.date}&s=Soccer&l=${props.league}`).then(function (response) {
            
    
        console.log(response.data.events)
        console.log(typeof response.data.events)
        if (response.data.events === null) {
            console.log("response.data.events is null")
        }
        return response.data.events
        
        
        
    
    
        
    }).then(function (response) {
        console.log(response)
        var matches= null
        if (response === null) {
            console.log("response.data.events is null")
            matches=[]
        }else{
        
         matches= response.map(function (each) {
            console.log(each.strHomeTeam)
            var strStatus =''
            if(each.strStatus == "Not Started") {
                strStatus=each.strTimeLocal.slice(0,5)   
            }
            else if(each.strStatus == "Match Finished"){
                strStatus='FT'
            }
            else strStatus=each.strStatus.slice(0,5)
            return(
                <div className="each-match-wrapper">
                
                <div style={{paddingRight:'10px'}}><p>{strStatus}</p></div>
            
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
            
        })}
        console.log(matches)
            getmatch(matches)
        
            
            
        }).catch(function (response) {
        console.log(response)
    })

    },[props.date])
    let [match,getmatch] = React.useState([])
    return(
        <div>
            {match.length >0 ? <h1>{props.league}</h1> : <h1></h1>}
        {match}
        </div>
        
    )
}