import {EventEmitter, Injectable} from '@angular/core';
import {
  TopicoModel,
  topicosObj
} from "../Model/comentarios.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  public n: EventEmitter<number> = new EventEmitter<number>();
  topicos: TopicoModel[] = topicosObj;


  constructor() {
  }

  steps(index: number) {
    this.n.emit(index)
  }


  postTopicos(topicos: TopicoModel) {
    this.topicos.push(topicos);
  }

  deleteTopicos() {
    this.topicos.pop()
  }

  getTopicos(): Observable<TopicoModel[]> {
    return of(this.topicos);
  }
}
