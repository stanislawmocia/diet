import { Injectable } from '@angular/core';
import { Diet, Ingredient, Person, WeekDay } from 'src/model/model';
import { v4 } from 'uuid'; '@types/uuid';

@Injectable({
  providedIn: 'root'
})
export class DietService {
  private persons: Person[] = [];

  constructor() { }

  getPersons(): Person[] {
    return this.persons;
  }

  addPerson(name: string) {
    const id = v4();
    this.persons.push({
      id: id,
      name: name,
      diet: []
    });
    this.createDiets(id);
  }

  removePerson(id: string) {
    this.persons = this.persons.filter(person => person.id !== id);
  }

  getPersonDiet(id: string): Diet[] {
    return this.persons.find(person => person.id === id)?.diet || [];
  }

  addDiet(id: string, diet: Diet) {
    let person = this.persons.find(person => person.id === id);
    if (person) {
      person.diet.push(diet);
    }
  }

  createDiets(id: string) {
    Object.values(WeekDay).forEach((value: string) => {
      this.addDiet(id, {
        weekDay: value,
        meal: []
      });
    });
  }

  exportPersonToJson(): string {
    let json = JSON.stringify(this.persons);
    return json;
  }

  importPersonFromJson(json: string) {
    this.persons = JSON.parse(json);
    this.persons.forEach(person => {
      person.diet.forEach(diet => {
        diet.meal.forEach(meal => {
          meal.ingredients.forEach(ingredient => {
            const parsedIngredient = this.parseTextToIngredient(ingredient);
            ingredient.name = parsedIngredient.name;
            ingredient.quantity = parsedIngredient.quantity;
            ingredient.unit = parsedIngredient.unit;
            ingredient.numberOf = parsedIngredient.numberOf;
            ingredient.unitOf = parsedIngredient.unitOf;
          });
        });
      });
    });
    localStorage.setItem('dietPersons', this.exportPersonToJson());
  }

  parseTextToIngredient(ingredient: Ingredient): Ingredient {
    const regex = /^(.+)\s+-\s+(\d+|\d+\.\d+)\s+(\w+)\s+\((\d+|\d+\.\d+)\s+x\s+(.+)\)$/;
    const match = ingredient.fullText.match(regex);

    if (!match) {
      throw new Error('Invalid input format');
    }

    return {
      fullText: ingredient.fullText,
      name: match[1].trim(),
      quantity: parseFloat(match[2]),
      unit: match[3],
      numberOf: parseFloat(match[4]),
      unitOf: match[5]
    } as Ingredient;
  }
}
