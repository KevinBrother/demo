import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-module',
  templateUrl: './form-module.component.html',
  styleUrls: ['./form-module.component.less']
})
export class FormModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contactForm: FormGroup = new FormGroup({
    name: new FormControl("默认1"),
    phone: new FormControl("morf2"),
  })

  onsubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
    console.log(form.valid)
  }

  onSubmitControl() {
    console.log(this.contactForm);
    console.log(this.contactForm.value);
    console.log(this.contactForm.valid);
  }
}
