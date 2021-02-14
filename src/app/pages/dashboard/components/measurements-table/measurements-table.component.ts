import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-measurements-table',
  templateUrl: './measurements-table.component.html',
  styleUrls: ['./measurements-table.component.scss'],
})
export class MeasurementsTableComponent implements OnInit {
  @Input()
  tableData;
  constructor() {}

  ngOnInit(): void {}
}
