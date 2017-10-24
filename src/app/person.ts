export class Person {
	name :string;
	lastName : string;
	grade: number;
	id : number;
	notes : string;
} 

export class Person2 {
	constructor(
    public id:number,
    public name:string,
  ){}
}

export class quoteExpiry{
constructor(
    public smeDays:number,
    public corporateDays:number,
  ){}
}

export class connectSettings{
constructor(public quoteExpiry:quoteExpiry){}
}
export class SmeDirectDriverGradeModel{
constructor(public connectSettings:connectSettings){}
} 

export class Roles {
  roles?: string;

}