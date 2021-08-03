import { Injectable } from '@angular/core';
import Teams from './teams'

@Injectable({
  providedIn: 'root'
})
export class PredictionService {

  private name:string; //name of the user
  private leagueId:number; // league id is used to uniquely indentify a league
  private leagues:Object[] = []; // details of all the leagues
  private teams:Object[] = []; // all the teams that are used in this app
  private predictedTable:Object[] = []; //this variable will hold the final predicted league table that the user will use

  constructor() {
    this.leagues = [
      {
        leagueName: "English League",
        leagueId: 1
      },
      {
        leagueName: "Spanish League",
        leagueId: 2
      },
      {
        leagueName: "Italian League",
        leagueId: 3
      },
      {
        leagueName: "German League",
        leagueId: 4
      },
      {
        leagueName: "French League",
        leagueId: 5
      }
      ,
      {
        leagueName: "English League - Div 2",
        leagueId: 6
      }
     ]

    this.name = "";
    this.leagueId = 1; //english league is set as default league
    this.teams = [...Teams];
    this.predictedTable = [...Teams[this.leagueId-1]] // inital english league table is set by default
  }

  getName(){
    return this.name;
  }

  getLeagueId(){
    return this.leagueId;
  }

  getLeagues(){
    return this.leagues;
  }

  getLeague(id){
    return this.leagues[id]
  }

  setLeagueId(id:number){
    this.leagueId = id;
    this.predictedTable = [];
    this.predictedTable = [...Teams[this.leagueId-1]];
  }

  setName(name:string){
    this.name = name;
  }

  getTeams(){
     return [...Teams[this.leagueId-1]]
  }

  setPredictedTable(table){
    this.predictedTable = [];
    this.predictedTable = [...table]
  }

  getPredictedTable(){
    return [...this.predictedTable]
  }

  resetEverything(){
    this.name = "";
    this.leagueId = 1;
    this.teams = [...Teams];
    this.predictedTable = [...Teams[this.leagueId-1]]
  }


}
