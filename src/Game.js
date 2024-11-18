import React, { useState } from "react";
import GameGrid from "./GameGrid.js";

// TODO: Import useState() hook

function Game() {

   // TODO: Replace variables with state variables
   const [moves, setMoves] =  useState(["","","","","","","","",""]);
   const [turn, setTurn] = useState("X");
  
   function gridClick(whichSquare) {
      // TODO: Replace with code to set the move and turn
      let m=moves;
      if(moves[whichSquare]==""){
         if (turn=="X"){
            m[whichSquare]="X";
            setMoves(m);
            setTurn("O");
         }
         else{
            m[whichSquare]="O"
            setMoves(m)
            setTurn("X");
         }
      }
   }

   // TODO: Add newGame() function here
   function newGame(){
      let m=["","","","","","","","",""];
      setMoves(m);
      setTurn("X");
   }
  
   // TODO: Make New Game button to call newGame() when clicked
   return (
      <>
         <h1>Tic-Tac-Toe</h1>        
         <GameGrid moves={moves} click={gridClick} />
         <p>
            Turn: <strong className={turn}>{turn}</strong>
         </p>
         <p>
            <button onClick={newGame}>New Game</button>
         </p>
      </>
   );
}

export default Game;