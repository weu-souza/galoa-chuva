import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  public n: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  steps(index: number) {
  this.n.emit(index)
  }
}
