import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit {
  @Input()
  doughnutData;
  public chartData;
  public chartVOCData;
  constructor() {}

  ngOnInit(): void {
    this.chartData = this.buildDoughnutChart();
    this.chartVOCData = this.buildDoughnutChartVOC();
  }

  buildDoughnutChart() {
    const between400_500 = this.doughnutData.filter(
      (e) => e.eco2 >= 400 && e.eco2 < 500
    ).length;
    const between500_600 = this.doughnutData.filter(
      (e) => e.eco2 >= 500 && e.eco2 < 600
    ).length;
    const between600_700 = this.doughnutData.filter(
      (e) => e.eco2 >= 600 && e.eco2 < 700
    ).length;
    const moreThan700 = this.doughnutData.filter((e) => e.eco2 >= 700).length;

    return {
      labels: ['Entre 400-500', 'Entre 500-600', 'Entre 600-700', 'Más de 700'],
      datasets: [
        {
          data: [between400_500, between500_600, between600_700, moreThan700],
          backgroundColor: ['#ffb35c', '#ffb0c1', '#00c2d9', '#f14545'],
          hoverBackgroundColor: ['#ffb35c', '#ffb0c1', '#00c2d9', '#f14545'],
        },
      ],
    };
  }

  buildDoughnutChartVOC() {
    const between0_20 = this.doughnutData.filter(
      (e) => e.etvoc >= 0 && e.etvoc < 20
    ).length;
    const between20_40 = this.doughnutData.filter(
      (e) => e.etvoc >= 20 && e.etvoc < 40
    ).length;
    const between40_60 = this.doughnutData.filter(
      (e) => e.etvoc >= 40 && e.etvoc < 60
    ).length;
    const moreThan60 = this.doughnutData.filter((e) => e.etvoc >= 60).length;

    return {
      labels: ['Entre 0-20', 'Entre 20-40', 'Entre 40-60', 'Más de 60'],
      datasets: [
        {
          data: [between0_20, between20_40, between40_60, moreThan60],
          backgroundColor: ['#FF6382', '#36A2EC', '#FFCE57', '#333444'],
          hoverBackgroundColor: ['#FF6382', '#36A2EC', '#FFCE57', '#333444'],
        },
      ],
    };
  }
}
