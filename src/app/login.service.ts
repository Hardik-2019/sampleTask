import { Injectable } from '@angular/core';
import { Login } from './store/models/login.models';
import LoginJson from '../assets/db/login.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username: any="";
  logins:any;
  check:boolean=false;
  // logins: Login[]=;

  constructor() { }

  validateLogin(checkData:any): Observable<any> {
    // if(checkData.email==="hg@wer.com" && checkData.password==="Test@123"){
    //   this.username = 'Hardik'
    //   return { loginStatus:true, username:'Hardik', role:'user' }
    // }
    // else if(checkData.email==="admin@admin.com" && checkData.password==="Admin@123"){
    //   this.username = 'Admin'
    //   return { loginStatus:true, username:'Administrator', role:'admin' }
    // }
    // else{
    //   return { loginStatus:false }
    // }
    const myObservable = new Observable((observer)=>{
      let data = LoginJson.filter((ele:Login)=>{
        if(checkData.email===ele.email && checkData.password===ele.password && checkData.role===ele.role){
            this.username = ele.username
            this.check = true;
            return true;
          }
      })
      // console.log(data.length);
      if(data.length===0){
        observer.error({ loginStatus:false });
      }
      else{
        observer.next(data);
      }

    })

    return myObservable;
    // console.log(this.logins);
    // return this.logins;
  }
}
