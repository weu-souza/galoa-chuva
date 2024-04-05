import {Component} from '@angular/core';
import {DiscussionService} from "../../Api/service/discussion.service";

@Component({
  selector: 'app-criar-topico',
  templateUrl: './criar-topico.component.html',
  styleUrls: ['./criar-topico.component.scss']
})
export class CriarTopicoComponent {
  constructor(private service: DiscussionService) {
  }

  criarTopico() {
    this.service.steps(1);
  }
}
