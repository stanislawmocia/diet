import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { DietsComponent } from './diets/diets.component';
import { SummaryComponent } from './summary/summary.component';
import { ImportExportPanelComponent } from './import-export-panel/import-export-panel.component';

const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'summary', component: SummaryComponent },
  { path: 'import-export', component: ImportExportPanelComponent },
  { path: ':id', component: DietsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
