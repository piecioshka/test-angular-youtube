import { Injectable } from '@angular/core';
import { UserCredentials } from '../interfaces/user-credentials.interface';

@Injectable({
    providedIn: 'root'
})
export class UsersStoreService {

    users = [
        { email: 'piecioshka@gmail.com', password: '123komputer' },
        { email: 'kontakt@youtube.com', password: '123komputer' },
    ];

    check(userCredentials: UserCredentials): boolean {
        return this.users.find((user) => {
            return user.email === userCredentials.email
                && user.password === userCredentials.password;
        }) !== undefined;
    }

}
