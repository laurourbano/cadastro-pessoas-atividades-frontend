import { Component, Input, SimpleChanges } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuComponent } from './shared/components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @Input() autenticado!: boolean;
  constructor() {
    console.log(this.autenticado)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['autenticado'].currentValue)
  }

}
