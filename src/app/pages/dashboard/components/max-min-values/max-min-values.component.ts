import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-max-min-values',
  templateUrl: './max-min-values.component.html',
  styleUrls: ['./max-min-values.component.scss'],
})
export class MaxMinValuesComponent implements OnInit {
  @Input()
  data;

  public maxCO2;
  public minCO2;

  public maxVOC;
  public minVOC;
  constructor() {}

  ngOnInit(): void {
    this.maxCO2 = Math.max.apply(Math, this.data.map(function(o) { return o.eco2; }));
    this.minCO2 = Math.min.apply(Math, this.data.map(function(o) { return o.eco2; }));

    this.maxVOC = Math.max.apply(Math, this.data.map(function(o) { return o.etvoc; }));
    this.minVOC = Math.min.apply(Math, this.data.map(function(o) { return o.etvoc; }));
  }
}
