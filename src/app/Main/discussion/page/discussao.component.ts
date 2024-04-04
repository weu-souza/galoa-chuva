import {Component, OnInit} from '@angular/core';
import {DiscussionService} from "../service/discussion.service";

@Component({
  selector: 'app-discussao',
  templateUrl: './discussao.component.html',
  styleUrls: ['./discussao.component.scss']
})
export class DiscussaoComponent implements OnInit {
  index: number;

  constructor(private service: DiscussionService) {
    this.index = 0
  }

  ngOnInit(): void {
    this.service.n.subscribe(numero => {
        this.index = numero
      }
    )
  }


}
