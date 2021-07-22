import { Component, OnInit } from '@angular/core';
import { PredictionService } from '../prediction/prediction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private predictionService:PredictionService) {
    //resetting all the details related to the prediction module
    predictionService.resetEverything();
  }

  ngOnInit(): void {
  }

}
