import {Component, OnInit} from '@angular/core';
import {DiscussionService} from "../../Api/service/discussion.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TopicoModel} from "../../Api/Model/comentarios.model";


@Component({
  selector: 'app-topico-input',
  templateUrl: './topico-input.component.html',
  styleUrls: ['./topico-input.component.scss']
})
export class TopicoInputComponent implements OnInit {
  // @ts-ignore
  adicionarTopico: FormGroup;
  topico: TopicoModel = new TopicoModel();

  constructor(private service: DiscussionService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createform();
  }

  enviar() {
    this.service.steps(2)
    if (this.adicionarTopico.dirty && this.adicionarTopico.valid) {
      this.topico = Object.assign({}, this.topico, this.adicionarTopico.value);
      this.service.postTopicos(this.topico);
    }
  }

  createform() {
    this.adicionarTopico = this.fb.group({
      assunto: ['', Validators.required],
      conteudo: ['', Validators.required],
    })
  }
}
