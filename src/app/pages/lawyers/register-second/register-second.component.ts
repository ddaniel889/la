import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-second',
  templateUrl: './register-second.component.html',
  styleUrls: ['./register-second.component.scss']
})
export class RegisterSecondComponent implements OnInit {
  public pageIndex :any = 2;

  constructor(private readonly router: Router,private  actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.pageIndex = this.actRoute.snapshot.paramMap.get('id');
    console.log('Valor pageIndex')
    console.log(this.pageIndex)
  }

  nextStep() {
    console.log('valor de step')
    console.log(this.pageIndex)
    if (this.pageIndex >= 3){
      return;
    }else{
      this.pageIndex = parseInt(this.pageIndex);
      this.pageIndex += 1;
    }
  }

  goNextSteps(index:any): void {
    let i = index +1;
    this.router.navigate([`/register-step/${i}`]);
  }

}
