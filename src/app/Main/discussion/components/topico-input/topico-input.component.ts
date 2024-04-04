import {Component} from '@angular/core';
import {DiscussionService} from "../../service/discussion.service";


@Component({
  selector: 'app-topico-input',
  templateUrl: './topico-input.component.html',
  styleUrls: ['./topico-input.component.scss']
})
export class TopicoInputComponent {
  constructor(private service: DiscussionService) {
  }

  enviar() {
    this.service.steps(2)
  }
}
