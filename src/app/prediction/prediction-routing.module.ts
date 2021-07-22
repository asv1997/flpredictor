import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseLeagueComponent } from './choose-league/choose-league.component';
import { DownloadComponent } from './download/download.component';
import { PredictTableComponent } from './predict-table/predict-table.component';

const routes: Routes = [
  {
    path: 'chooseLeague',
    component: ChooseLeagueComponent
  },
  {
    path: 'predict',
    component: PredictTableComponent
  },
  {
    path: 'download',
    component: DownloadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PredictionRoutingModule { }
