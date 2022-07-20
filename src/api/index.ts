import { Player } from "../modules/player/Player.models";

export const fetchPlayersAsync = async () => {
    try{
      const response = await fetch(`http://localhost:8080/api/leaderboard`);
      if(response.ok){
          return await response.json();
      }
      
    }catch(err){
      console.error(err);
    }
  }

  export const createNewPlayersAsync = async (player:Player) => {
    try{
        const response = await fetch('http://localhost:8080/api/players', {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({player:player})});

      if(response.ok){
          return await response.json();
      }
      
    }catch(err){
      console.error(err);
    }
  }