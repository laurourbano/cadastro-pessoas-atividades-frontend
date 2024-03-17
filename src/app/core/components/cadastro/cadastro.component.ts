import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCardModule,
    RouterModule,
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  validateForm: FormGroup<{
    name: FormControl<string>;
    telefone: FormControl<string>;
    email: FormControl<string>;
    endereco: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    name: ['', [Validators.required]],
    telefone: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    endereco: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: NonNullableFormBuilder,
  ) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loginService
        .register(
          this.validateForm.controls.name.value,
          this.validateForm.controls.telefone.value,
          this.validateForm.controls.email.value,
          this.validateForm.controls.endereco.value,
          this.validateForm.controls.password.value,
        )
        .subscribe((res) => {
          if (res) {
            this.router.navigate(['/login']);
          } else {
            this.validateForm.controls.password.setErrors({ invalid: true });
          }
        });
    }
  }
}
