import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit{
  like: number;
  comentarios: number;
  click: boolean;

  constructor() {
    this.like = 0;
    this.comentarios = 0;
    this.click = false;
  }

  ngOnInit(): void {
    this.like = 0
  }



  likeBtn() {
    this.click = !this.click
    if (this.click) {
      this.like++
    }
    if (!this.click) {
      this.like--
    }
  }

  coracao(): string {
    if (this.click) {
      return "pi pi-heart-fill";
    }
    return "pi pi-heart";
  }
}
