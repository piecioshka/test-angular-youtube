import { UserProfile } from '../interfaces/user-profile.interface';

export class UserModel implements UserProfile {

    constructor(
        public username: string,
        public email: string,
        public password: string,
        public sex: string,
    ) { }

}
