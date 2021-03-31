import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  form: FormGroup;
  message: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      secondSurname: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['']
    })
  }

  save() {
    if (this.form.valid) {
      console.log(this.form.value, 'OK');
      this.message = 'OK';
      $('#modal').modal('show');
    } else {
      console.log(this.form.value, 'FAIL');
      this.message = 'FALLÉ';
      $('#modal').modal('show');
    }
  }
}
