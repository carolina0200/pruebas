import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuider: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuider.group({
      a: ['', Validators.required],
      b: ['']
    });
  }

}
