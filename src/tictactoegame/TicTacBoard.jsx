import React, { useState } from 'react'
import "./TicTacBoard.css"
import {BsTrophyFill} from 'react-icons/bs'

const TicTacBoard = () => {
    const [state,setState]=useState(Array(9).fill(null))
    const [isXturn, setXturn]=useState(false)   
    const[player,setPlayer]=useState(true)
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
    for(let logic in  winnerLogic)
    {
        const [a,b,c]=winnerLogic[logic]
        if(state[a]!==null &&state[a]==state[b] && state[b]==state[c] &&state[c]==state[a]){
        return state[a]}
        
    } 
    return false;  
    }

    const isWinner=checkWinner();

    const handleTurn=(index)=>{
     
    if(state[index]!==null){
    return}

  const copyarray = [...state]
  copyarray[index] = isXturn?"X":"O";
  setPlayer((prevState)=>!prevState)
  console.log(player)
  setState(copyarray);
  setXturn(!isXturn);


    }
    const handleRestart=()=>{
        setPlayer(true)
        setState(Array(9).fill(null))
    }
 
  
  return (

    <div className='main__container'>
        {isWinner?(<div className='isWinner'><BsTrophyFill style={{color:'#FFD700', marginRight:'1rem'}}/> Player {player?'2':'1'} Won the game <BsTrophyFill style={{color:'#FFD700', marginLeft:'1rem'}}/></div>):
        (<div className='game__box'>
         <div className='main-box'>
          <div className='box1' onClick={()=>handleTurn(0)}>
           <h1>{state[0]}</h1>
           </div>
           <div className='box1'onClick={()=>handleTurn(1)}>
           <h1>{state[1]}</h1>
           </div>
           <div className='box1'onClick={()=>handleTurn(2)}>
           <h1>{state[2]}</h1>
           </div>
           </div>
           <div className='main-box'>
          <div className='box1' onClick={()=>handleTurn(3)}>
           <h1>{state[3]}</h1>
           </div>
           <div className='box1'onClick={()=>handleTurn(4)}>
           <h1>{state[4]}</h1>
           </div>
           <div className='box1' onClick={()=>handleTurn(5)}>
           <h1>{state[5]}</h1>
           </div>
           </div>
           <div className='main-box'>
          <div className='box1'onClick={()=>handleTurn(6)}>
           <h1>{state[6]}</h1>
           </div>
           <div className='box1'onClick={()=>handleTurn(7)}>
           <h1>{state[7]}</h1>
           </div>
           <div className='box1'onClick={()=>handleTurn(8)}>
           <h1>{state[8]}</h1>
           </div>
           </div>
           
        </div>)}
        
       
       
        <div className='game_button'>
             <div className='buttons'>
                <button  onClick={handleRestart}>
                    
                    {isWinner?'Play Again':'Restart'}</button>

             {!isWinner &&  <h1 style={{color:'white', fontFamily:'open sans'}}>
                 Player {player?'1':'2'} Turn</h1>}
             </div>
        </div>
    </div>
  )
}

export default TicTacBoard