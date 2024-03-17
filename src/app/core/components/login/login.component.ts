import { Component, Input } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { AtividadesService } from '../../../services/atividades.service';
@Component({
  selector: 'app-login',
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
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  idUsuario!: number;

  validateForm: FormGroup<{
    email: FormControl<string>;
    password: FormControl<string>;
  }> = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  constructor(
    private loginService: LoginService,
    private atividadesService: AtividadesService,
    private router: Router,
    private fb: NonNullableFormBuilder,
  ) {}

  ngOnInit(): void {
    this.atividadesService
      .listarAtividades(this.idUsuario)
      .subscribe((activities) => {
        this.idUsuario = (activities[0] as any).id;
      });
    console.log(this.idUsuario);
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.loginService
        .login(
          this.validateForm.controls.email.value,
          this.validateForm.controls.password.value,
        )
        .subscribe((res) => {
          if (res) {
            this.router.navigate([`/atividades/${this.idUsuario}`]);
          } else {
            this.validateForm.controls.password.setErrors({ invalid: true });
          }
        });
    }
  }
}
