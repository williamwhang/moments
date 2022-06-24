import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage() {
    this.show = !this.show;
  }

}
