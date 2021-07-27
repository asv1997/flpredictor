import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PredictionService } from '../prediction.service';

@Component({
  selector: 'app-predict-table',
  templateUrl: './predict-table.component.html',
  styleUrls: ['./predict-table.component.css']
})
export class PredictTableComponent implements OnInit {

  leagueId:number;
  league:any
  table:Object[]=[];

  constructor(private predictionService: PredictionService, private router : Router) {
    let nameCheck = this.predictionService.getName();

    //to ensure that the user cant directly access the page without choosing the name and a league
    if(nameCheck==="" || nameCheck.length ==0){

      if(localStorage.length == 0){
        router.navigateByUrl("/")
      }
      else{

         //retrieving info from browser local storage


        this.predictionService.setLeagueId(parseInt(localStorage.getItem("leagueId")));
        this.predictionService.setName(localStorage.getItem("name"));

        this.leagueId = this.predictionService.getLeagueId();
        this.league = this.predictionService.getLeague(this.leagueId-1);

        if(localStorage.getItem("table")){
          this.table = JSON.parse(localStorage.getItem("table"))
        }
        else{
          this.table = this.predictionService.getPredictedTable();
        }

      }

    }

    else{
      this.leagueId = this.predictionService.getLeagueId();
      this.league = this.predictionService.getLeague(this.leagueId-1);
      this.table = this.predictionService.getPredictedTable();
     }


  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any[]>){
    moveItemInArray(this.table,event.previousIndex,event.currentIndex);
    localStorage.setItem("table",JSON.stringify(this.table))
    }

  submit(){
    this.predictionService.setPredictedTable(this.table);
    this.router.navigateByUrl("/prediction/download")
  }

}
