import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input()
  lineChartData;
  dataCO2;
  dataVOC;
  constructor() {}

  ngOnInit(): void {
    this.dataCO2 = this.buildLineChartDataCo2();
    this.dataVOC = this.buildLineChartDataVOC();
  }

  valuesByHourRange(range1: number, range2: number) {
    const arr = this.lineChartData.filter(
      (e) => e.timestamp.getHours() >= range1 && e.timestamp.getHours() < range2
    );
    if (arr && arr.length > 0) {
      return arr;
    }
    return [];
  }

  avg(arrData, field) {
    if (arrData.length > 0) {
      const arr = [];
      arrData.forEach((element) => {
        arr.push(element[field]);
      });
      const sum = arr.reduce((previous, current) => (current += previous));
      const avg = sum / arr.length;
      return avg;
    }
    return 0;
  }

  buildLineChartDataCo2() {
    const values24_2 = this.valuesByHourRange(0, 2);
    const values2_4 = this.valuesByHourRange(2, 4);
    const values4_6 = this.valuesByHourRange(4, 6);
    const values6_8 = this.valuesByHourRange(6, 8);
    const values8_10 = this.valuesByHourRange(8, 10);
    const values10_12 = this.valuesByHourRange(10, 12);
    const values12_14 = this.valuesByHourRange(12, 14);
    const values14_16 = this.valuesByHourRange(14, 16);
    const values16_18 = this.valuesByHourRange(16, 18);
    const values18_20 = this.valuesByHourRange(18, 20);
    const values20_22 = this.valuesByHourRange(20, 22);
    const values22_24 = this.valuesByHourRange(22, 23);

    const avg24_2 = this.avg(values24_2, 'eco2');
    const avg2_4 = this.avg(values2_4, 'eco2');
    const avg4_6 = this.avg(values4_6, 'eco2');
    const avg6_8 = this.avg(values6_8, 'eco2');
    const avg8_10 = this.avg(values8_10, 'eco2');
    const avg10_12 = this.avg(values10_12, 'eco2');
    const avg12_14 = this.avg(values12_14, 'eco2');
    const avg14_16 = this.avg(values14_16, 'eco2');
    const avg16_18 = this.avg(values16_18, 'eco2');
    const avg18_20 = this.avg(values18_20, 'eco2');
    const avg20_22 = this.avg(values20_22, 'eco2');
    const avg22_24 = this.avg(values22_24, 'eco2');
    return {
      labels: [
        '24 - 2 h',
        '2 - 4 h',
        '4 - 6 h',
        '6 - 8 h',
        '8 - 10 h',
        '10 - 12 h',
        '12 - 14 h',
        '14 - 16 h',
        '16 - 18 h',
        '18 - 20 h',
        '20 - 22 h',
        '22 - 24 h',
      ],
      datasets: [
        {
          label: 'ECO2',
          data: [
            avg24_2,
            avg2_4,
            avg4_6,
            avg6_8,
            avg8_10,
            avg10_12,
            avg12_14,
            avg14_16,
            avg16_18,
            avg18_20,
            avg20_22,
            avg22_24,
          ],
          fill: false,
          borderColor: '#4bc0c0',
        },
      ],
    };
  }
  buildLineChartDataVOC() {
    const values24_2 = this.valuesByHourRange(0, 2);
    const values2_4 = this.valuesByHourRange(2, 4);
    const values4_6 = this.valuesByHourRange(4, 6);
    const values6_8 = this.valuesByHourRange(6, 8);
    const values8_10 = this.valuesByHourRange(8, 10);
    const values10_12 = this.valuesByHourRange(10, 12);
    const values12_14 = this.valuesByHourRange(12, 14);
    const values14_16 = this.valuesByHourRange(14, 16);
    const values16_18 = this.valuesByHourRange(16, 18);
    const values18_20 = this.valuesByHourRange(18, 20);
    const values20_22 = this.valuesByHourRange(20, 22);
    const values22_24 = this.valuesByHourRange(22, 23);

    const avg24_2 = this.avg(values24_2, 'etvoc');
    const avg2_4 = this.avg(values2_4, 'etvoc');
    const avg4_6 = this.avg(values4_6, 'etvoc');
    const avg6_8 = this.avg(values6_8, 'etvoc');
    const avg8_10 = this.avg(values8_10, 'etvoc');
    const avg10_12 = this.avg(values10_12, 'etvoc');
    const avg12_14 = this.avg(values12_14, 'etvoc');
    const avg14_16 = this.avg(values14_16, 'etvoc');
    const avg16_18 = this.avg(values16_18, 'etvoc');
    const avg18_20 = this.avg(values18_20, 'etvoc');
    const avg20_22 = this.avg(values20_22, 'etvoc');
    const avg22_24 = this.avg(values22_24, 'etvoc');
    return {
      labels: [
        '24 - 2 h',
        '2 - 4 h',
        '4 - 6 h',
        '6 - 8 h',
        '8 - 10 h',
        '10 - 12 h',
        '12 - 14 h',
        '14 - 16 h',
        '16 - 18 h',
        '18 - 20 h',
        '20 - 22 h',
        '22 - 24 h',
      ],
      datasets: [
        {
          label: 'ECO2',
          data: [
            avg24_2,
            avg2_4,
            avg4_6,
            avg6_8,
            avg8_10,
            avg10_12,
            avg12_14,
            avg14_16,
            avg16_18,
            avg18_20,
            avg20_22,
            avg22_24,
          ],
          fill: false,
          borderColor: '#000',
        },
      ],
    };
  }
}
