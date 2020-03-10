import { Component, OnInit, ViewChild } from '@angular/core';
import { Lembrete } from '../../interfaces/lembrete';
import { LembreteService } from '../../services/lembrete.service';
import { ErrorMsgComponent } from '../../compartilhado/error-msg/error-msg.component';

@Component({
  selector: 'app-lista-lembrete',
  templateUrl: './lista-lembrete.component.html',
  styleUrls: ['./lista-lembrete.component.css']
})
export class ListaLembreteComponent implements OnInit {

  public lembretes: Lembrete[];
  @ViewChild(ErrorMsgComponent) errorMsgComponent: ErrorMsgComponent;

  constructor(private lembreteService: LembreteService) { }

  ngOnInit(): void {
    this.getListaLembretes();
  }

  getListaLembretes() {
    this.lembreteService.getListaLembretes()
      .subscribe((lembretes: Lembrete[]) => {
        this.lembretes = lembretes;
        console.log(lembretes);
      }, () => { this.errorMsgComponent.setError('Falha ao buscar os lembretes.');
    });
  }

  deletaLembrete(id: number) {
    this.lembreteService.deletaLembrete(id)
      .subscribe(() => {
        this.getListaLembretes();
      }, () => { this.errorMsgComponent.setError('Falha ao deletar o lembrete.');
    });
  }

  getLembrete(id: number) {
    this.lembreteService.getLembrete(id)
      .subscribe(() => {
        this.getLembrete(id);
      }, () => { this.errorMsgComponent.setError('Falha ao buscar o lembrete.');
    });
  }

  addLembrete(lembrete: Lembrete) {
    this.lembreteService.addLembrete(lembrete)
      .subscribe(() => {
        this.addLembrete(lembrete);
      }, () => { this.errorMsgComponent.setError('Falha ao adicionar o lembrete.');
    });
  }

  atualizaLembrete(lembrete: Lembrete) {
    this.lembreteService.atualizaLembrete(lembrete)
      .subscribe(() => {
        this.atualizaLembrete(lembrete);
      }, () => { this.errorMsgComponent.setError('Falha ao atualizar o lembrete.');
    });
  }
}
