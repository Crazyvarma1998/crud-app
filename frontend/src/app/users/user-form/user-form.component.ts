import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog-component/success-dialog-component.component';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [MatButtonModule,FormsModule,MatDialogModule,SuccessDialogComponent,MatInputModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  loginForm!: FormGroup;
  submitted = false;
  userService = inject(UserService)

name:any;
email:any;
age:any;
address:any;
password:any
  textUrl: any;
  dialog: any;
  constructor(    private formBuilder: FormBuilder,private router:Router,private http:HttpClient,dialog: MatDialog,
  ){
    
  }
  ngOnInit() {
}
submit(){
    var link = this.userService.apiurl + "/users";
    var check = JSON.stringify({
      "name":this.name,
      "email":this.email,
      "age":this.age,
      "address":this.address,
      "password":this.password,

    });
    console.log(check,'testttttttttt')
    this.http.post(link, check, { headers: { 'Content-Type': 'application/json' } })
    .subscribe(async (response) => { 
        // ... handle response
        this.router.navigate(["/users"])
    });

    
     


  }
}

