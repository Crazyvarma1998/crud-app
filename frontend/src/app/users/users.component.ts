import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
users:any;
userService = inject(UserService)
  result: any;
constructor(private http:HttpClient,private router:Router){

}
ngOnInit(): void {
  var link = this.userService.apiurl + "/users";
  this.http.get(link).subscribe(async (response) => {
  this.result = response
  console.log(this.result,'resrrrrrrrrrrrrrrrrrrr')
})
}
user(){
  this.router.navigate(['/user-form'])
}

deleteUser(result: any) {
  console.log(result,'testtttttttttttttt')
  const userId = result;
  console.log(result._id,'testtttttttttttttt')

  const link = `${this.userService.apiurl}/users/${userId}`; // Correct URL

  this.http.delete(link).subscribe({
    next: (response) => {
      console.log('User deleted successfully:', response);
      this.router.navigate([""]); // Refresh the user list
    },
    error: (error) => {
      console.error('Error deleting user:', error);
      // Handle the error appropriately, e.g., display an error message to the user
    }
  });
}


}
