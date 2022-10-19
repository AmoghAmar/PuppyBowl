import React, {useEffect, useState} from "react";
import {getPuppies} from '../API'

const PuppyRoster = () => {
       const [players, setPlayers] = useState([])
   useEffect(() =>{
     async function fetchData() {
        const getPuppies = await getPuppies()
       setPlayers(getPuppies)
      
     } 
     fetchData()
 }, [])
console.log(players)
    return (
        <h2>this is puppy roster</h2>
        // <div id="Roster">
        //     <div id="Puppy" name="Puppy"></div>
        //     <div id="Puppy" name="Puppy"></div>
        //     <div id="Puppy" name="Puppy"></div>
        // </div>

    )
}






export default PuppyRoster;