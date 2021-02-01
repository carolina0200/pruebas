import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {
  a = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit(): void {
  }

  ab() {
    console.log(this.a.value);
  }
}
