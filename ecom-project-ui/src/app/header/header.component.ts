<<<<<<< HEAD


=======
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../_services/user-auth.service';
import { UserService } from '../_services/user.service';
<<<<<<< HEAD
=======
import { ChangeDetectorRef } from '@angular/core';

>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private userAuthService: UserAuthService,
    private router: Router,
    public userService: UserService
  ) {}

  ngOnInit(): void {}

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logout() {
    this.userAuthService.clear();
    this.router.navigate(['/']);
  }
  public isAdmin()
<<<<<<< HEAD
  {
    return this.userAuthService.isAdmin();
  }
  public isUser(){
    return this.userAuthService.isUser();
  }

}
=======
{
 return this.userAuthService.isAdmin();
}
public isUser(){
  return this.userAuthService.isUser();
}

}
>>>>>>> a29fbf2af32365587a00f8a9621b31e159795cc9
