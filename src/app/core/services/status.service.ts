import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';

export enum StatusOfConnection {
  Connected = 'Connected',
  Scanning = 'Scanning',
  Offline = 'Offline',
}

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private readonly statusSubject: BehaviorSubject<StatusOfConnection> = new BehaviorSubject<StatusOfConnection>(StatusOfConnection.Offline);
  public status$: Observable<StatusOfConnection> = this.statusSubject.asObservable();

  constructor() {
    interval(2000).subscribe(count => {
      if (count % 3 === 0) {
        this.statusSubject.next(StatusOfConnection.Connected);
      } else if (count % 3 === 1) {
        this.statusSubject.next(StatusOfConnection.Scanning);
      } else {
        this.statusSubject.next(StatusOfConnection.Offline);
      }
    });
  }
}
