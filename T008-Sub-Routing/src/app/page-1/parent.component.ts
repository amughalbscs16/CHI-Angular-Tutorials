import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-1',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class Page1ParentComponent implements OnInit {

  parentMessage = "Message from the Parent : Do something awesome with Angular. 😎"
  parentMessageList = ["Al Kindi", "Friedrich Nietzsche", "Pierre de Fermat", "Andrew Wiles"]
  items = ['Item1', 'Item2'];

  addItemToParent(newItem: string) {
    this.items.push(newItem);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
