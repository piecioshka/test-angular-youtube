import { Injectable } from '@angular/core';

import { UserCredentials } from '../interfaces/user-credentials.interface';
import { UsersStoreService } from '../stores/users-store.service';
import { UserModel } from '../models/user-model';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(
        private usersStore: UsersStoreService,
        private localStorageService: LocalStorageService,
    ) { }

    // Uwierzytelnienie
    authenticate(userCredentials: UserCredentials) {
        const status = this.usersStore.check(userCredentials);
        if (status) {
            this.localStorageService.create('user-logged', true);
            this.localStorageService.create('user', { login: userCredentials.email });
        }
        return status;
    }

    getUserName(): string {
        const user = this.localStorageService.read('user');
        if (typeof user === 'object' && user != null && user.hasOwnProperty('login')) {
            return user.login;
        }
    }

    isUserLogged(): boolean {
        const data = this.localStorageService.read('user-logged');
        return Boolean(data);
    }

    destroyUserSession(): any {
        this.localStorageService.delete('user-logged');
        this.localStorageService.delete('user');
        return true;
    }

    // Rejestracja użytkownika
    register(userModel: UserModel) {

    }

}
