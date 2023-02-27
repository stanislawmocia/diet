import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DietService } from 'src/service/diet.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {
  public name: any;

  constructor(private dietService: DietService) { }

  public get persons() {
    return this.dietService.getPersons();
  }

  public addPerson(name: string) {
    if (name) {
      this.dietService.addPerson(name);
    }
    this.name = '';
  }

  public removePerson(id: string) {
    this.dietService.removePerson(id);
  }
}
