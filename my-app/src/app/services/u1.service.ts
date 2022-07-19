import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class U1Service {

  private showAddproduct: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddproduct(): void {
    console.log("this is from server")
    this.showAddproduct = !this.showAddproduct;
    this.subject.next(this.showAddproduct);

  }
  ontoggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
