import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Diet, Ingredient, Meal, WeekDay } from 'src/model/model';
import { DietService } from 'src/service/diet.service';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.scss']
})
export class DietsComponent {
  public WeekDay: typeof WeekDay = WeekDay;
  constructor(private dietService: DietService, private activatedRoute: ActivatedRoute, private router: Router) { }

  get diets(): Diet[] {
    let personId = this.activatedRoute.snapshot.paramMap.get('id');
    const dietList = personId ? this.dietService.getPersonDiet(personId) : [];
    if (!dietList.length) {
      this.router.navigateByUrl('');
    }
    return dietList;
  }

  public addMeal(diet: Diet) {
    if (diet) {
      let meal = {
        name: 'New meal',
        order: diet.meal.length + 1,
        ingredients: [],
        selected: false
      } as Meal;
      this.addIngredient(meal);
      diet.meal.push(meal);
    }
  }

  public deleteMeal(diet: Diet, mealOrder: number) {
    if (diet?.meal) {
      diet.meal.splice(diet.meal.findIndex(m => m.order === mealOrder), 1);
      diet.meal.forEach((m, i) => m.order = i + 1);
    }
  }

  public addIngredient(meal: Meal) {
    const newIngredient: Ingredient = {
      name: '',
      quantity: 0,
      unit: '',
      numberOf: 0,
      unitOf: ''
    } as Ingredient;
    meal.ingredients.push(newIngredient);
  }

  public deleteIngredient(meal: Meal, ingredientIndex: number) {
    meal.ingredients.splice(ingredientIndex, 1);
  }

  public parseTextToIngredient(input: Ingredient): Ingredient {
    const ingredient = this.dietService.parseTextToIngredient(input);
    input.name = ingredient.name;
    input.quantity = ingredient.quantity;
    input.unit = ingredient.unit;
    input.numberOf = ingredient.numberOf;
    input.unitOf = ingredient.unitOf;
    return input;
  }
}
