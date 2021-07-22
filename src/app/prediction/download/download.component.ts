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

  constructor(private predictionService: PredictionService, private router : Router) {

   //to ensure that the user cant directly access the page without using the choose-league component
   this.name = this.predictionService.getName();
    if(this.name==="" || this.name.length ==0){
      router.navigateByUrl("/")
    }

    this.date = new Date();
    this.leagueId = this.predictionService.getLeagueId();
    this.league = this.predictionService.getLeague(this.leagueId-1);
    this.table = this.predictionService.getPredictedTable();
  }

  download(){
    domtoimage.toBlob(document.getElementById('table-container'))
    .then(function(blob) {
      saveAs(blob, 'prediction.png');
    });
  }



  ngOnInit(): void {
  }

}
