import { Component } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  messages: Message[];

  addMessages() {
      this.messages = [
          { severity: 'success', summary: 'Enviado:', detail: 'Gracias por tu comentario, lo tomaremos en cuenta' },
      ];
  }
  constructor(){
    this.messages = [];
  }
}
