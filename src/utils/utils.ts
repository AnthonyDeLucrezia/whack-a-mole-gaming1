import { MoleProps } from "../components/mole/Mole";

export const genrateRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + min; 
}

export const getRandomMoleId = (nbrOfRows : number, nbrOfColumns:number): string => {
    const randomCol = genrateRandomNumber(0,nbrOfColumns - 1);
    const randomRow = genrateRandomNumber(0,nbrOfRows - 1);
    return  `${randomRow}-${randomCol}`;
  };

export const generateMoles = (nbrOfRows : number, nbrOfColumns:number, activeMoleId?:string): MoleProps[][] => {
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

