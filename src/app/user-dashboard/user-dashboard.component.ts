import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router'
import { LoginService } from '../login.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  username:any;
  constructor(private router:Router,private route: ActivatedRoute, private logService: LoginService){}
  ngOnInit(){
    // console.log("Something")
    this.username = this.logService.username;
  }
  logout(){
    this.router.navigate([''])
  }
}
