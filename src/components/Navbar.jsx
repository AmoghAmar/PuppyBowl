import React, { useState, useEffect } from "react";
import { render } from "react-dom";
// try {
//   const response = await fetch(
//     'https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-ET-WEB-FT/players'
//   );
//   const result = await response.json();
//   console.log(result);
// } catch (err) {
//   console.error(err);
// }



const Navbar = () => {
  return (
    <div id="navbar">
    <form >
      <span>Name: </span><input type='text' id='Name' name='Name' placeholder='Name'></input>
      <span>Breed: </span><input type='text' id='Breed' name='Breed' placeholder='Breed'></input>
      <input type='button' id='submit' name='submit' value='submit'></input>
    </form>
  </div>
  );
};

export default Navbar;
