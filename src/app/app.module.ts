import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}  from  '@angular/forms';
import { HttpModule }    from '@angular/http';


import { AppComponent }  from './app.component';
import { PersonDetails }  from './person-details.component' 

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent,PersonDetails ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
