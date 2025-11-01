import {createElement} from "react"
import React from "react"
import {createRoot} from 'react-dom/client'
const root = createRoot(document.getElementById("root"))
//const axios = require('axios');
/* axios.get('localhost:3000/categories').then(function (response) {
    console.log(response)
    
}).catch(
    function (response) {
        console.log(response)
        
    }
) */
root.render(
    <h1>Hello from react</h1>
)

root.render(
    createElement("h1",null,"Hello from createElement")
)

var reactElement = createElement("h1",null,"Hello from createElement")//an object

root.render(
    //reactElement
    <div>
        <header /></div>
)

export default function Header(){
    return (
        <>
            <header>
                
                <div className="header-lft">
                    <h1>bet</h1>
                    <a href="" className="hd-s">Casino</a>
                    <a href="" className="hd-s">Virtual</a>
                </div>
                <div>
                    <a href="login" className="hd-s">Register</a>
                    <a href="login" className="hd-s">Login</a>
                    <a href="login" className="hd-s">Forgot password</a>
                </div>
                
            </header>
        </>
     ) 
}