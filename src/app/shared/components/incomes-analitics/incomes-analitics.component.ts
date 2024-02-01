import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'incomes-analitics',
  templateUrl: './incomes-analitics.component.html',
  styleUrls: ['./incomes-analitics.component.scss']
})
export class IncomesAnaliticsComponent implements OnInit {
  public incomes: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.incomes = new Chart("MyIncomes", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: "Ingresos",
            data: [15, 22, 31, 38, 45, 49, 52, 58, 65, 75, 79, 82],
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
