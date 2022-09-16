import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router, 
    private http: HttpClient,
    private login: LoginService
  ) { }

  reactiveForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    password: new FormControl('', [Validators.required]),
  })
  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigate(['/dashboard'])
    // if(this.reactiveForm.status=='INVALID') return
    // this.login.Login_data(this.reactiveForm.controls['email'].value,this.reactiveForm.controls['password'].value).subscribe((res:any)=>{
    //   if(res){
    //     if(res.status) this.router.navigate(['/dashboard'])
    //   }
    // })

    
  }

}
