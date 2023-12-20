import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthResponseDTO } from '../../interfaces/auth-response-dto';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  loginForm: FormGroup;
  private authSub: Subscription | undefined;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }



  onSubmit() {
    if (this.loginForm.valid) {
      const authenticationRequest = this.loginForm.value;

      this.authSub = this.authService.authenticateUser(authenticationRequest).subscribe(
        (authResponse: AuthResponseDTO) => {
          localStorage.setItem('accessToken', authResponse.accessToken as string);
          this.router.navigate(['/home']);

        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    }
  }
}
