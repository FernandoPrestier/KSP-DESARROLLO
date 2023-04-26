import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateListDetailService {
  objEmploye: any;
  private enviarStateSubject = new Subject<any>();
  enviarStateObservable = this.enviarStateSubject.asObservable();

  constructor() { }

  enviarObjToState(obj: any) {
    this.objEmploye = obj;
    this.enviarStateSubject.next(obj);
  }
}
