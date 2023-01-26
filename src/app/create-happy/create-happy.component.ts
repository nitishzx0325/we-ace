import { HappyService } from './../happy.service';
import { Happy } from './../happy';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-happy',
  templateUrl: './create-happy.component.html',
  styleUrls: ['./create-happy.component.css'],
})
export class CreateHappyComponent implements OnInit {
  happy: Happy = new Happy();
  gender: string = '';
  rate: string = '';
  options = [
    { value: '1', label: ' 1' },
    { value: '2', label: ' 2' },
    { value: '3', label: ' 3' },
    { value: '4', label: ' 4' },
    { value: '5', label: ' 5' },
  ];
  constructor(private happyService: HappyService, private router: Router) {}
  onSubmit(form: NgForm) {
    console.log(this.happy);
    console.log(form.value);
    this.saveSurvey();
  }
  saveSurvey() {
    this.happyService.createHappyList(this.happy).subscribe(
      (data) => {
        console.log(data);
        this.toTheIndexList();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  toTheIndexList() {
    this.router.navigate(['/happy']);
  }

  ngOnInit(): void {}
}
