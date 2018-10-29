import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { User } from "../models/user.model";


//מאפשר לשירות הנוכחי להשתמש בתוכו בשירותים אחרים
@Injectable()
export class UserService {
    currentUser:User={userName:"Guest", token:undefined};

    constructor(private myHttpClient: HttpClient) {
        
    }

    loginUser(loginUser:User): void {
        let apiUrl:string=`https://jbbookstore.herokuapp.com/api/users`;
        
        this.myHttpClient.get(apiUrl, {
            headers: {
                "xx-auth": `${loginUser.password}${loginUser.userName}`
            }})
            .subscribe((x:any) => {
              if(x.status=="login success"){
                   this.currentUser.userName=loginUser.userName;
               }
            });
    }


    registerUser(newUser:User):void{
        let apiUrl:string=`https://jbbookstore.herokuapp.com/api/users`;
        this.myHttpClient.post(apiUrl,newUser).subscribe(
            (x:User)=>{
                this.currentUser.userName=x.userName;
            }
        );
    }

}