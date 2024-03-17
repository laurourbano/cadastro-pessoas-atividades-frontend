import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AtividadesService } from '../../../services/atividades.service';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-adicionar',
  standalone: true,
  imports: [
    NzButtonModule,
    NzIconModule,
    NzFormModule,
    ReactiveFormsModule,
    NzInputModule,
    NzCardModule,
    RouterModule,
    NzDatePickerModule,
  ],
  templateUrl: './adicionar.component.html',
  styleUrl: './adicionar.component.scss',
})
export class AdicionarComponent {
  validateForm: FormGroup<{
    name: FormControl<string>;
    description: FormControl<string>;
    start_date: FormControl<Date>;
    end_date: FormControl<Date>;
  }> = this.fb.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    start_date: [new Date()],
    end_date: [new Date()],
  });
  constructor(
    private atividadesService: AtividadesService,
    private router: Router,
    private fb: NonNullableFormBuilder,
  ) {}

  submitForm(): void {
    if (this.validateForm.valid) {
      this.atividadesService
        .adicionarAtividade({
          name: this.validateForm.controls.name.value,
          description: this.validateForm.controls.description.value,
          start_date: this.validateForm.controls.start_date.value,
          end_date: this.validateForm.controls.end_date.value,
        })
        .subscribe((res) => {
          if (res) {
            this.router.navigate(['/atividades']);
          } else {
            console.log('Erro ao adicionar atividade');
          }
        });
    }
  }

  cancelar(){
    this.router.navigate(['/atividades'])
  }
}
