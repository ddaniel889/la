import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  public pageIndex = 0;

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  nextStep() {
    console.log('valor de step')
    console.log(this.pageIndex)
    if (this.pageIndex >= 1){
      return;
    }else{
      this.pageIndex += 1;
    }
  }

  goNextSteps(index:any): void {
    let i = index +1;
    this.router.navigate([`/register-two/${i}`]);
  }

}
