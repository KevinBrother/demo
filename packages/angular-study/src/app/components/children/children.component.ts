import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.less']
})
export class ChildrenComponent implements OnInit {

  @Input() item = ''
  @Output() newItemEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: any) {
    this.newItemEvent.emit(value)
  }

  callPhone(value: any) {
    console.log('#photos', value);

  }

}
