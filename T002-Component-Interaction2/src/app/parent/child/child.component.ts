import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

 /*
 Using @Input() is the most common way of sharing data between components :
 @Input decorator which used to pass data from the parent to the child component.
 This simply means "hey, I am expecting data being sent to me. 
 I will receive it and store it into my childMessage property as a type of string"
 Take a look at the html. 
*/
@Input() childMessage: string;

// Using an alias
/*
By using an alias, the DOM property in the template can use different name.
To give alias, we can give an argument in Input decorator such as @Input('my-alias-name').
*/

@Input('msg') childMessageList : []
  constructor() { }

  ngOnInit(): void {
  }

}
