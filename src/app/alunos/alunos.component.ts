import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Aluno } from '../modelo/Aluno';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule, MediaPipe],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent {

    formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    nota1: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.min(0), Validators.max(10)]),
    nota2: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.min(0), Validators.max(10)]),
  });

  btnCadastrar:boolean = true;
  vetor: Aluno[] = [];
  indice:number = -1;

  cadastrar(){
    this.vetor.push(this.formulario.value as Aluno);

    this.formulario.reset();
  }

  //função de selação
  selecionar(indice: number){
    this.indice = indice;

    this.formulario.setValue({nome: this.vetor[indice].nome,
                              nota1: this.vetor[indice].nota1,
                              nota2: this.vetor[indice].nota2});

    this.btnCadastrar = false;
  }

  alterar(){
    //alter vetor
    this.vetor[this.indice] = this.formulario.value as Aluno;

    //limpar os inputts
    this.formulario.reset();

    //visibilidade dos botoes
    this.btnCadastrar = true;
  }

  excluir(){
    this.vetor.splice(this.indice, 1);

    //limpeza dos inputs
    this.formulario.reset();

    this.btnCadastrar = true;
  }

  cancelar(){
    //limpeza dos inputs
    this.formulario.reset();

    this.btnCadastrar = true;
    
  }

}
