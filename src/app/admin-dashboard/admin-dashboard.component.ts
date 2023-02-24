import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
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
