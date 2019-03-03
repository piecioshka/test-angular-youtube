import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

    userIsLogged = false;
    userName: string = null;

    constructor(
        private router: Router,
        private auth: AuthService,
    ) { }

    ngOnInit() {
        this.updateUserLoggedStatus();
    }

    updateUserLoggedStatus() {
        this.router.events
            .pipe(
                filter((evt) => evt instanceof NavigationEnd)
            )
            .subscribe(() => {
                this.userIsLogged = this.auth.isUserLogged();
                this.userName = this.auth.getUserName();
            });
    }

}
