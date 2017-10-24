import { Component } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Person,Person2,quoteExpiry,connectSettings,SmeDirectDriverGradeModel,Roles} from './person'

const 	PEOPLE : Person[] =[
{name : "Sushma", lastName :"Rao",id:11,grade :5,notes:""},
{name : "Archana", lastName :"Ghatole",id:12,grade :5,notes:""},
{name : "Amita", lastName :"Gadade",id:13,grade :5,notes:""},
{name : "Seema", lastName :"Rao",id:16,grade :5,notes:""},
{name : "Priya", lastName :"Takalkar",id:17,grade :5,notes:""},
{name : "Deepak", lastName :"Thakur",id:19,grade :5,notes:""}
];

@Component({
  selector: 'my-app',
  template: `
                <h1>People List </h1>
                
                <ul class="heroes">
                <li *ngFor="let person of ppl" (click)="onSelect(person)">
                 {{person.name}}
               
				</li>
                </ul>
           <person-details [selectPerson]="selectPerson"></person-details>
               `,
               styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]

})


@Injectable()
export class AppComponent  { 
	selectPerson : Person;
	ppl=PEOPLE;
	people2:Person2;
	smeDirect:SmeDirectDriverGradeModel;
    roles: Roles[];

	constructor(private http: Http) {
    this.people2=new Person2(0,"");
    this.roles=[{roles:'ADMIN'},{roles:'USER'}];
	}
	onSelect(p:Person):void {
		this.selectPerson=p;
		//one way
		let allowed=this.roles.find(p=>p.roles==='ADMIN')!=undefined;
		console.log('hi',allowed);

       let allowed2=this.roles.some(p=>p.roles==='ADMIN');
		console.log('hi',allowed2);

		//this.getJSON();
		//this.getJSON2();
	}
   getJSON(): void {
         this.http.get('assets/file.json')
                         .map((res) => res.json())
                         .subscribe( data => this.people2 = data,
        err => console.log('foo'),
        () => console.log('Got response from API', this.people2)
      );

     }
     getJSON2(): void {
         this.http.get('assets/file2.json')
                         .map((res) => res.json())
                         .subscribe( data => this.smeDirect = data,
        err => console.log('foo'),
        () => console.log('Got response from API', this.smeDirect)
      );

     }
   getHeroes(): Promise<Person2> {
  return this.http.get('assets/file.json')
             .toPromise()
             .then(response => response.json().data as Person2)
             .catch(this.handleError);
}
 
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

 }

