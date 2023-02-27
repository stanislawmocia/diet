import { Component } from '@angular/core';
import { DietService } from 'src/service/diet.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'diet';

  constructor(private dietService: DietService) {
    const json = localStorage.getItem('dietPersons');
    if (json) {
      this.dietService.importPersonFromJson(json);
    }
  }
}
