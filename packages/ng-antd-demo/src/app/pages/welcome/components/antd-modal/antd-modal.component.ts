import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-antd-modal',
  templateUrl: './antd-modal.component.html',
  styleUrls: ['./antd-modal.component.less']
})
export class AntdModalComponent implements OnInit {
  @Input() isEdit = false;

  constructor() { }

  ngOnInit(): void {
    console.log("-----------ngOnInit-----------", this.isEdit);
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
