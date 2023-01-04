import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit {
  public frases: Array<Frase> = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public respostaInput: string = ""

  public rodada: number = 0;
  public rodadaFrase!: Frase;

  public progresso: number = 0

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit(): void {}


  public atualizaResposta(resposta: Event): void {
    this.respostaInput = (<HTMLInputElement>resposta.target).value;
  }

  public verificaResposta(): void {
    if (this.rodadaFrase.ptBreak == this.respostaInput) {
      alert('A tradução está correta!');

      // Adiciona rodada e verifica respostas
      this.rodada++;
      this.atualizaRodada()

      // Progresso
      this.progresso = this.progresso + (100 / this.frases.length)

    } else {
      alert('A tradução está errada!');
    }
  }

  public atualizaRodada():void {
    this.rodadaFrase = this.frases[this.rodada];
    this.respostaInput = ""
  }
}
