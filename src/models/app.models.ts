
export enum GameStatus {
    Started = 1,
    NotStarted,
    Finished,
  }

export interface Player{
    id?:string;
    score:number;
    name:string;
}