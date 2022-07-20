import { Player } from "../models/app.models";


export const fetchPlayersAsync = async () => {
    try{
      const response = await fetch(`${process.env.API_URL}/leaderboard`);
      if(response.ok){
          return await response.json();
      }
    }catch(err){
      console.error(err);
    }
  }

  export const createNewPlayersAsync = async (player:Player) => {
    try{
        const response = await fetch(`${process.env.API_URL}/players`, {
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