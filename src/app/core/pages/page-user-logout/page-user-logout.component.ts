import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-page-user-logout',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageUserLogoutComponent implements OnInit {

    constructor(
        private auth: AuthService,
        private router: Router,
    ) { }

    ngOnInit() {
        this.auth.destroyUserSession();
        this.backToHome();
    }

    backToHome() {
        this.router.navigateByUrl('/');
    }

}
