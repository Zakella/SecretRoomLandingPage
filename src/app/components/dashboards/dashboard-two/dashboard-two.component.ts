import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-two',
    templateUrl: './dashboard-two.component.html',

})
export class DashboardTwoComponent {

    lineData: any;

    lineOptions: any;

    fileChart: any;

    fileChartOptions: any;

    chartPlugins: any;

    constructor() { }


    ngOnInit() {

    this.lineData = {
      labels: ['MON', 'TUE', 'WED', 'THU', 'SUN'],
      datasets: [
        {
          label: 'First Dataset',
          data: [10, 25, 48, 35, 54, 70],
          fill: true,
          backgroundColor: '#2738E61A',
          borderColor: '#2738E61A',
          tension: .4,
          categoryPercentage: 1.0,
                    barPercentage: 1.0
        },
        {
          label: 'Second Dataset',
          data: [18, 35, 23, 30, 59, 65],
          fill: true,
          backgroundColor: '#F3229F26',
          borderColor: '#F3229F26',
          tension: .4
        },
        {
          label: 'Third Dataset',
          data: [20, 47, 46, 46, 61, 70],
          fill: true,
          backgroundColor: '#3BF4B21A',
          borderColor: '#3BF4B21A',
          tension: .4,

        }
      ]
    };

    this.lineOptions = {
      plugins: {
        legend: {
          labels: {
            fontColor: '#A0A7B5',
            usePointStyle: true,
            font: {
              weight: 700,
            },
            padding: 30
          },
          position: 'bottom'
        },
        tooltip: {
          backgroundColor: '#F3229F26',
          titleFont: {
            weight: 'bold'
          },
          bodyFont: {
            weight: 'bold'
          },
          displayColors: false,
          padding: {
            left: 40,
            right: 40,
            top: 10,
            bottom: 10
          },
          callbacks: {
            label: function (tooltipItem) {
              return `$ ${tooltipItem.raw}`
            }
          }
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              weight: 500
            }
          },
          grid: {
            display: false,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            borderDash: [3, 6],
            color: '#E4EAFF',
            drawBorder: false,
            drawTicks: false
          }
        },
        z: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            drawBorder: false
          }
        }
      }
    };

    this.fileChart = {
      labels: ['Computer', 'Tablet', 'Mobile'],
      datasets: [
        {
          data: [200, 200, 50],
          backgroundColor: [
            '#2738E61A',
            '#F3229F26',
            '#3BF4B21A',
          ],
          hoverBackgroundColor: [
            '#2738E61A',
            '#F3229F26',
            '#3BF4B21A',
          ],
          borderColor: 'transparent',

          fill: true
        }
      ]
    };

    this.fileChartOptions = {
      cutout: '70%',
      plugins: {

        legend: {
          labels: {
            fontColor: '#A0A7B5',
            usePointStyle: true,
            font: {
              weight: 700,
            },
            padding: 30
          },
          position: 'bottom'
        },
      }
    }
  }
};





