import {Component, OnInit} from '@angular/core';
import {DiscussionService} from "../Api/service/discussion.service";
import { TopicoModel} from "../Api/Model/comentarios.model";

@Component({
  selector: 'app-discussao',
  templateUrl: './discussao.component.html',
  styleUrls: ['./discussao.component.scss']
})
export class DiscussaoComponent implements OnInit {
  index: number;
  // @ts-ignore
  comentariosModel: ComentariosModel[];
  // @ts-ignore
  topicosModel: TopicoModel[];
  // @ts-ignore
  comentarios: number;
  // @ts-ignore
  teste: number;


  constructor(private service: DiscussionService) {
    this.index = 0
  }

  ngOnInit(): void {
    this.service.n.subscribe(numero => {
      this.index = numero
    })
    this.getTopicos();
    this.somarComentario()
  }



  getTopicos() {
    this.service.getTopicos().subscribe(res => {
      this.topicosModel = res;
    });
  }

  somarComentario() {

  }


}
