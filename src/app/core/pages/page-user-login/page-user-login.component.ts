import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import { UserCredentials } from '../../interfaces/user-credentials.interface';
import { Router } from '@angular/router';
import { forbiddenEmail } from '../../validators/forbiddenEmail.validator';

@Component({
    selector: 'app-page-user-login',
    templateUrl: './page-user-login.component.html',
    styleUrls: ['./page-user-login.component.css']
})
export class PageUserLoginComponent implements OnInit {

    get email() {
        return this.loginFormGroup.get('email');
    }

    get password() {
        return this.loginFormGroup.get('password');
    }

    // loginFormGroup = new FormGroup({
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(3),
    //     forbiddenEmail
    //   ]),
    //   password: new FormControl('', Validators.required),
    // });
    loginFormGroup = this.fb.group({
        email: ['', [
            Validators.required,
            Validators.minLength(3),
            forbiddenEmail
        ]],
        password: ['', [
            Validators.required,
            Validators.minLength(1),
        ]],
    });

    authError: string = null;

    constructor(
        private fb: FormBuilder,
        private auth: AuthService,
        private router: Router,
    ) { }

    ngOnInit() {
        setTimeout(() => {
            // this.email.setValue('piecioshka@gmail.com');
            // this.password.setValue('123komputer');
            this.loginFormGroup.setValue({
                email: 'piecioshka@gmail.com',
                password: '123komputer'
            });
            // this.loginFormGroup.patchValue({
            //   email: 'piecioshka@gmail.com',
            // });
        }, 1000);
    }

    validateField(fieldName: string) {
        const field = this.loginFormGroup.get(fieldName);
        return field.errors && field.touched;
    }

    onSubmit() {
        const data: UserCredentials = this.loginFormGroup.getRawValue();
        const status = this.auth.authenticate(data);

        if (status) {
            this.router.navigate(['/movies']);
        } else {
            this.authError = 'Login was failed. Unauthorized';
        }
    }

}
