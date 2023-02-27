import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/model/model';
import { DietService } from 'src/service/diet.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  public ingrediens: Ingredient[] = [];
  constructor(private dietService: DietService) { }

  ngOnInit(): void {
    this.getIngredients();
  }

  private getIngredients(): void {
    this.dietService.getPersons().forEach(p => {
      p.diet.forEach(d => {
        d.meal.forEach(m => {
          m.ingredients.forEach(i => {
            let ingredien = this.ingrediens.find(ing => ing.name === i.name);
            if (!ingredien) {
              this.ingrediens.push(i);
            } else {
              ingredien.quantity += i.quantity;
            }
          });
        });
      });
    });
  }
}
