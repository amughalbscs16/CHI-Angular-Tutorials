import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parentMessage = "Message from the Parent : Do something awesome with Angular. 😎"
  parentMessageList = ["Al Kindi", "Friedrich Nietzsche", "Pierre de Fermat", "Andrew Wiles"]
 

  
  constructor() { }

  ngOnInit(): void {
  }

}
