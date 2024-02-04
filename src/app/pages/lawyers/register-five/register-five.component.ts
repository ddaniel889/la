import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-five',
  templateUrl: './register-five.component.html',
  styleUrls: ['./register-five.component.scss']
})
export class RegisterFiveComponent implements OnInit {
  public step: any = 8;


  constructor(private readonly router: Router,private  actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.step = this.actRoute.snapshot.paramMap.get('id');
    console.log('valor de steps')
    console.log(this.step)

  }


  goTerms(): void {
    this.router.navigate(['/terms']);
  }

  goProfile(): void {
    this.router.navigate(['/benefits']);
  }

  nextStep() {
    if (this.step >= 8){
      return;
    }else{
      this.step = parseInt(this.step);
      this.step += 1;
    }
  }

}
