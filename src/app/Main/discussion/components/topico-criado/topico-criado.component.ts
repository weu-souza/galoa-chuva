import {Component} from '@angular/core';
import {DiscussionService} from "../../Api/service/discussion.service";

@Component({
  selector: 'app-topico-criado',
  templateUrl: './topico-criado.component.html',
  styleUrls: ['./topico-criado.component.scss']
})
export class TopicoCriadoComponent {

  constructor(private service: DiscussionService) {
  }

  criarTopico() {
  this.service.steps(1)
  }
}
