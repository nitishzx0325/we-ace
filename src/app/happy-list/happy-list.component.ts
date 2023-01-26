// import { CreateHappyComponent } from './../create-happy/create-happy.component';
import { Component, OnInit } from '@angular/core';
import { Happy } from '../happy';
import { HappyService } from '../happy.service';
@Component({
  selector: 'app-happy-list',
  templateUrl: './happy-list.component.html',
  styleUrls: ['./happy-list.component.css'],
})
export class HappyListComponent implements OnInit {
  index: Happy[] = [];
  // gender: any = CreateHappyComponent;
  constructor(private happyService: HappyService) {}

  ngOnInit(): void {
    this.getHappy();
  }
  private getHappy() {
    this.happyService.getHappyList().subscribe((data) => {
      this.index = data;
    });
  }
}
