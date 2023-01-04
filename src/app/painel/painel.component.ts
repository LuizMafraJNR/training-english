import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES
  public instrucao: string = 'Traduza a frase:'
  public respostaInput!: string
  
  constructor(){}
  
  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.respostaInput = ((<HTMLInputElement>resposta.target).value)
    console.log(this.respostaInput)
  }
}
