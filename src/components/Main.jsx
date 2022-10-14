import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import PuppyRoster from "./PuppyRoster"
// import PuppyDetails from "./PuppyDetails";


const Main = () => {
  const [players, setPlayers] = useState([])
  useEffect(() =>{
    const fetchData = async () => {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players') 
      const data = await response.json()
      const puppies = data.data.players
      setPlayers(puppies)
      console.log('puppies', puppies)
      
    } 
    fetchData(players)
  }, [])
console.log('players', players)
  return (
    <div id="main">
      <Navbar/>
      <h1>I am main</h1>
      <PuppyRoster/>
  </div>
  );
};

export default Main;
