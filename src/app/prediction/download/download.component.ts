import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PredictionService } from '../prediction.service';
import domtoimage from 'dom-to-image'
import {saveAs} from 'file-saver'



@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  name:string;
  leagueId:number;
  league:any
  table:Object[]=[];
  date:Date;
  isDownloading:number;

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

        this.name = this.predictionService.getName();
        this.leagueId = this.predictionService.getLeagueId();
        this.league = this.predictionService.getLeague(this.leagueId-1);

        if(localStorage.getItem("table")){
          this.table = JSON.parse(localStorage.getItem("table"));
          this.predictionService.setPredictedTable([...this.table])
        }
        else{
          this.table = this.predictionService.getPredictedTable();
        }

      }

    }

    else{
      this.name = this.predictionService.getName();
      this.leagueId = this.predictionService.getLeagueId();
      this.league = this.predictionService.getLeague(this.leagueId-1);
      this.table = this.predictionService.getPredictedTable();
     }

    this.isDownloading = 0;
    this.date = new Date();
  }

 async download(){
    this.isDownloading = 1;
    await domtoimage.toBlob(document.getElementById('table-container'))
    .then(function(blob) {
      saveAs(blob, 'prediction.png');

    });
    this.isDownloading = 2;

    setTimeout(() => {
      this.isDownloading = 0;
    }, 1000);
  }



  ngOnInit(): void {

  }

}
