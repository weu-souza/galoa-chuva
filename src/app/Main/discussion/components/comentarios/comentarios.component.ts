import {Component, Input, OnInit} from '@angular/core';
import {
  TopicoModel
} from "../../Api/Model/comentarios.model";
import {DiscussionService} from "../../Api/service/discussion.service";

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.scss']
})
export class ComentariosComponent implements OnInit {
  like: number;
  click: boolean;
  showSubMenu: boolean;
  showComent: boolean;


  @Input() topicosArr: TopicoModel = new TopicoModel();

  comentariosNmr: number;


  constructor(private service: DiscussionService) {
    this.like = 0;
    this.comentariosNmr = 0;
    this.click = false;
    this.showSubMenu = false;
    this.showComent = false;
    this.comentariosNmr = 2;
  }

  ngOnInit(): void {
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

  attApagar() {
    this.showSubMenu = !this.showSubMenu;
  }

  showComents() {
    this.showComent = !this.showComent
  }


  apagar() {
    this.service.deleteTopicos();
  }
}
