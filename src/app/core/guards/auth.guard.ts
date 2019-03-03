import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import * as debug from 'debug';

import { AuthService } from '../services/auth.service';

const console = {
    log: debug('youtube:auth-guard')
};

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private auth: AuthService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const status = this.auth.isUserLogged();
        console.log(`status=${status}`);
        return status;
    }
}
