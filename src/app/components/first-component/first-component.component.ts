import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Will';
  hobbies = [ 'correr', 'jogar', 'estudar'];
  car = {
    name: 'Golf',
    year: 2022,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
