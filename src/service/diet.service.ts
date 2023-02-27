import { Injectable } from '@angular/core';
import { Diet, Person, WeekDay } from 'src/model/model';
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
    console.log(this.persons);
    console.log(json);
  }
}
