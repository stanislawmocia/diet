import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { PersonsComponent } from './persons/persons.component';
import { DietsComponent } from './diets/diets.component';
import { FormsModule } from '@angular/forms';
import { ImportExportPanelComponent } from './import-export-panel/import-export-panel.component';
import { SortPipePipe } from '../service/sort-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    PersonsComponent,
    DietsComponent,
    ImportExportPanelComponent,
    SortPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
