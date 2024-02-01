import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'active-analitics',
  templateUrl: './active-analitics.component.html',
  styleUrls: ['./active-analitics.component.scss']
})
export class ActiveAnaliticsComponent implements OnInit {
  public actives: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.actives = new Chart("activeChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: "Usuarios activos",
            data: [18, 25, 29, 32, 45, 50, 53, 59,67, 72, 85, 89],
            borderColor: 'rgb(195, 174, 53)',
            backgroundColor: 'rgba(195, 174, 53)',
            borderWidth: 2,
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            }
          },
          x: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            }
          }
        },
        plugins: {
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            bodyFont: {
              size: 14,
            },
            titleFont: {
              size: 16,
              weight: 'bold',
            }
          },
          legend: {
            labels: {
              font: {
                size: 14,
              }
            }
          },
         /* title: {
            display: true,
            text: 'Casos nuevos'
          }
        ,*/
        }
      }
    });
  }

}
