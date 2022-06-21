import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parente-data',
  templateUrl: './parente-data.component.html',
  styleUrls: ['./parente-data.component.scss']
})
export class ParenteDataComponent implements OnInit {
  @Input() name: string = '';
  @Input() userData: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
