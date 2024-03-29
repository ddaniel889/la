import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-step',
  templateUrl: './register-step.component.html',
  styleUrls: ['./register-step.component.scss']
})
export class RegisterStepComponent implements OnInit {
  public step: any =4;

  constructor(private readonly router: Router,private  actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.step = this.actRoute.snapshot.paramMap.get('id');

  }


  goTerms(): void {
    this.router.navigate(['/terms']);
  }

  goProfile(): void {
    this.router.navigate(['/benefits']);
  }

  nextStep() {
    if (this.step >= 5){
      return;
    }else{
      this.step = parseInt(this.step);
      this.step += 1;
    }
  }

  goNextSteps(index:any): void {
    let i = index +1;
    this.router.navigate([`/register-four/${i}`]);
  }



}
