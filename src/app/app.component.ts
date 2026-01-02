import { Component } from '@angular/core';
import { AlunosComponent } from "./alunos/alunos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AlunosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cadastro-alunos';
}
