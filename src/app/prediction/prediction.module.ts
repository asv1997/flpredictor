import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PredictionRoutingModule } from './prediction-routing.module';
import { ChooseLeagueComponent } from './choose-league/choose-league.component';
import { FormsModule } from '@angular/forms';
import { PredictTableComponent } from './predict-table/predict-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DownloadComponent } from './download/download.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [ChooseLeagueComponent, PredictTableComponent, DownloadComponent],
  imports: [
    CommonModule,
    PredictionRoutingModule,
    FormsModule,
    DragDropModule,
    SharedModuleModule
  ]
})
export class PredictionModule { }
