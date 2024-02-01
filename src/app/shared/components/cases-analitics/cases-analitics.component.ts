import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'cases-analitics',
  templateUrl: './cases-analitics.component.html',
  styleUrls: ['./cases-analitics.component.scss']
})
export class CasesAnaliticsComponent implements OnInit {
  public cases: any;

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }


  createChart() {
    this.cases = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: "Casos nuevos",
            data: [26, 29, 31, 24, 10, 3, 14, 16, 4, 5, 14, 23],
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
