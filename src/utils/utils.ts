import { MoleProps } from "../components/mole/Mole";
import { Player } from "../modules/player/Player.models";

export const genrateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min; 
}

export const getRandomMoleId = (nbrOfRows : number, nbrOfColumns:number): string => {
    const randomCol = genrateRandomNumber(0,nbrOfColumns - 1);
    const randomRow = genrateRandomNumber(0,nbrOfRows - 1);
    return  `${randomRow}-${randomCol}`;
  };

export const generateMoles = (nbrOfRows : number, nbrOfColumns:number): MoleProps[][] => {
  const activeMoleId = getRandomMoleId(nbrOfRows, nbrOfColumns);
    const arrToReturn: MoleProps[][] = [];
    for (let row = 0; row < nbrOfRows ; row++) {
      const arrRow : MoleProps[] = [];
      for (let col = 0; col < nbrOfColumns; col++) {
        arrRow.push({
          id: `${row}-${col}`,
          isHidden: activeMoleId !== `${row}-${col}` ,
        });
      }
      arrToReturn.push(arrRow);
    }
    return arrToReturn;
  };

  
export const sortPlayer = (player1: Player, player2:Player): number => {
  if (player1.score > player2.score) {
      return 1;
  }

  if (player1.score < player2.score) {
      return -1;
  }

  return 0;
}

