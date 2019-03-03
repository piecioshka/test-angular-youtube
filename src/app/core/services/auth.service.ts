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
        }
        return status;
    }

    isUserLogged(): boolean {
        const data = this.localStorageService.read('user-logged');
        return Boolean(data);
    }

    destroyUserSession(): any {
        return this.localStorageService.delete('user-logged');
    }

    // Rejestracja użytkownika
    register(userModel: UserModel) {

    }

}
