import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.scss']
})
export class ArtigoComponent implements OnInit {

  private click: boolean;

  verMais: boolean;

  constructor() {
    this.click = true;
    this.verMais = false;
  }

  ngOnInit(): void {

  }

  btnEstrela(): void {
    this.click = !this.click;
  }

  btnVerMais(): void {
    this.verMais = !this.verMais
  }

  star(): string {
    if (this.click) {
      return "pi pi-star"
    } else {
      return "pi pi-star-fill"
    }
  }

  mostrarEsconder(): string {
    if (this.verMais) {
      return ""
    }
    return "ver mais"
  }
}
