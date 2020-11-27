import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-2',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class Page2ParentComponent implements OnInit {

  parentMessage = "Message from the Parent : Do something awesome with Angular. 😎"
  parentMessageList = ["Al Kindi", "Friedrich Nietzsche", "Pierre de Fermat", "Andrew Wiles"]
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  constructor() { }

  ngOnInit(): void {}

}
