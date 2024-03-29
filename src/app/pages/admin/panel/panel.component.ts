import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  public chart: any;
  public subs = [{
    name : 'Suscripción Premium',
    number : '#2345',
    date : 'Septiembre 23 202',
    amount : '$000'
   },
   {
    name : 'Suscripción Premium',
    number : '#2345',
    date : 'Septiembre 23 202',
    amount : '$000'
   },
   {
    name : 'Suscripción Premium',
    number : '#2345',
    date : 'Septiembre 23 202',
    amount : '$000'
   },
   {
    name : 'Suscripción Premium',
    number : '#2345',
    date : 'Septiembre 23 202',
    amount : '$000'
   },

   ];

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: "Clientes",
            data: [13, 16, 21, 28, 32, 34, 32, 31, 30, 26, 20, 14],
            borderColor: 'rgb(24, 25, 55)',
            backgroundColor: 'rgba(24, 25, 55)',
            borderWidth: 2,
            //pointBackgroundColor: 'rgb(255, 99, 132)',
          },
          {
            label: "Abogados",
            data: [26, 29, 31, 24, 10, 3, 14, 16, 4, 5, 14, 23],
            borderColor: 'rgb(195, 174, 53)',
            backgroundColor: 'rgba(195, 174, 53)',
            borderWidth: 2,
            //pointBackgroundColor: 'rgb(54, 162, 235)',
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
          title: {
            display: true,
            text: 'Crecimiento'
          }
        ,
        }
      }
    });
  }



}
