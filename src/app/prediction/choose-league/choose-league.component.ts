import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PredictionService} from '../prediction.service'

@Component({
  selector: 'app-choose-league',
  templateUrl: './choose-league.component.html',
  styleUrls: ['./choose-league.component.css']
})
export class ChooseLeagueComponent implements OnInit {

  name:string = "";
  league:number;
  leagues:Object[];
  displayErrorText:boolean;

  constructor(private predictionService:PredictionService, private router:Router) {
     this.league = predictionService.getLeagueId();
     this.name = predictionService.getName();
     this.leagues = predictionService.getLeagues();
     this.displayErrorText = false;
   }

  ngOnInit(): void {
  }


  setLeague(id:number){
    console.log("Setting the league with id",id)
    this.league = id;
  }
  onProceedClick(){
    let temp = this.name.replace(/\s/g,'');
    if(temp.length!==0){
      this.predictionService.setName(this.name);
      this.predictionService.setLeagueId(this.league);
      this.router.navigateByUrl("/prediction/predict")
    }
    else{
      this.name=""
      this.displayErrorText = true;
    }

  }



}
