import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css'],
})
export class PainelComponent implements OnInit, OnDestroy {
  public frases: Array<Frase> = FRASES;
  public instrucao: string = 'Traduza a frase:';
  public respostaInput: string = ""

  public rodada: number = 0;
  public rodadaFrase!: Frase;

  public progresso: number = 0

  public tentativas: number = 3 

  @Output() public encerrarJogo = new EventEmitter()
  constructor() {
    this.atualizaRodada()
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
      console.log("Componente painel foi destruido")
  }

  public atualizaResposta(resposta: Event): void {
    this.respostaInput = (<HTMLInputElement>resposta.target).value;
  }

  public verificaResposta(): void {
    if (this.rodadaFrase.ptBreak == this.respostaInput) {
      alert('A tradução está correta!');

      // Adiciona rodada e verifica respostas
      this.rodada++;
      
      // concluir
      if(this.rodada == 4) {
        alert('Traduções concluidas, parabens!')
        this.encerrarJogo.emit('Vitoria')
      }

      // Progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      
      // atualiza rodada
      this.atualizaRodada()
    } else {
      alert('A tradução está errada!');

      // diominuir a varivavel tentativas
      this.tentativas--
      if(this.tentativas == -1) {
        alert('Você perdeu todas as tentativas.')
        this.encerrarJogo.emit('Derrota')
      }
     
    }
  }

  public atualizaRodada():void {
    this.rodadaFrase = this.frases[this.rodada];
    this.respostaInput = ""
  }
}
