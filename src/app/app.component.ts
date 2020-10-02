import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { type } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lembretes: Array<string> = [];
  lembrete: string;

  variavelSombra: string = '10px 10px yellow';

  salvar(){
    this.lembretes = [this.lembrete, ...this.lembretes];
    this.lembrete = "";
  }
}
