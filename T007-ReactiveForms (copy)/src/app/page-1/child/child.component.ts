
import { Output, EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-1-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class Page1ChildComponent implements OnInit {

 /*
 Using @Input() is the most common way of sharing data between components :
 @Input decorator which used to pass data from the parent to the child component.
 This simply means "hey, I am expecting data being sent to me. 
 I will receive it and store it into my childMessage property as a type of string"
 Take a look at the html. 
*/
@Output() newItemEvent = new EventEmitter<string>();

returnNewItem(value: string) {
  this.newItemEvent.emit(value);
}
  
constructor() { }

ngOnInit(): void { }

}
