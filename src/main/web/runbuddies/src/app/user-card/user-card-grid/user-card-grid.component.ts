import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card-grid',
  templateUrl: './user-card-grid.component.html',
  styleUrls: ['./user-card-grid.component.sass']
})
export class UserCardGridComponent implements OnInit {

  @Input()
  profiles: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
