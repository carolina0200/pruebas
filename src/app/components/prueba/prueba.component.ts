import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  a = new FormControl('', Validators.required);
  formu: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formu = this.formBuilder.group({
      c: ['', Validators.required],
      d: ['', Validators.required]
    })
  }

  save() {
    console.log(this.formu.valid, this.formu.value);
  }
}
