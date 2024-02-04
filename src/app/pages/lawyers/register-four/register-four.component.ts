import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-four',
  templateUrl: './register-four.component.html',
  styleUrls: ['./register-four.component.scss']
})
export class RegisterFourComponent implements OnInit {
  public step: any =6;

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
    if (this.step >= 8){
      return;
    }else{
      this.step = parseInt(this.step);
      this.step += 1;
    }
  }

}
