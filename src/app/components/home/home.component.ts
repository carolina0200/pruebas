import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/services/general.service';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  questionForm: FormGroup;
  questionList = [];

  constructor(private generalService: GeneralService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.generalService.getAllData().valueChanges().subscribe(answer => {
      this.questionList = answer;
      this.buildForm();
      this.refreshSelect();
    });
  }

  buildForm(): void {
    this.questionForm = this.formBuilder.group({
      idUser: ['', Validators.required],
      questions: this.formBuilder.array([])
    });
    this.createItem();
  }

  createItem(): void {
    this.questionList.forEach(quest => {
      const form: FormGroup = this.formBuilder.group({
        idEvent: [quest.idEvent],
        idUser: [''],
        idQuestion: [quest.idQuestion],
        answer: ['', Validators.required],
        info: quest
      });
      this.questionsArray.push(form);
    });
  }

  save(): void {
    if (this.questionForm.valid) {
      this.questionsArray.value.forEach(quest => {
        quest.idUser = this.idUserField.value;
        delete quest.info;
      });
      console.log(this.questionForm.value, 'listo', );
    } else { this.questionForm.markAllAsTouched(); }
  }

  refreshSelect(): void { setTimeout(() => { $('.selectpicker').selectpicker('refresh'); }, 0); }

  get idUserField(): any { return this.questionForm.get('idUser'); }
  get questionsArray(): FormArray { return this.questionForm.get('questions') as FormArray; }
}
