import { Component,Input } from '@angular/core'
import { Person } from './person'
@Component({
selector : 'person-details',
template : `  <div *ngIf="selectPerson"> 
              <h1>Hello {{selectPerson.name}} {{selectPerson.lastName}} </h1>
             <div>Id : {{selectPerson.id}}</div> 
			<div>Grade : {{selectPerson.grade}}</div>
			<div>Notes : {{selectPerson.notes}}</div>
			<div>Please add Notes : <input [(ngModel)]="selectPerson.notes" placeholder="notes"></div>
			</div>`
})

export class PersonDetails{
	@Input() selectPerson : Person;
}