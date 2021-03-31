import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  date = new FormControl();
  dateTransform = new FormControl();
  transform;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void { 
    this.date.valueChanges.subscribe(ans => {
      this.dateTransform.setValue(ans);
      console.log('Envié esta fecha al input -> ', ans);
    });
  }

  show() {
    this.transform = this.datePipe.transform(this.dateField, 'yyyy-MM-ddT14:mm');
    this.dateTransform.setValue(this.transform);
  }

  get dateField() { return this.date.value; }
}
