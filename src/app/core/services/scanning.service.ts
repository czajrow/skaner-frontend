import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, Subscription } from 'rxjs';

export enum ScanningStatus {
  Scanning = 'Scanning',
  Postprocessing = 'Postprocessing',
  Cancelling = 'Cancelling',
  Connected = 'Connected',
  NotConnected = 'NotConnected',
  Done = 'Done',
}

@Injectable({
  providedIn: 'root'
})
export class ScanningService {

  private sub: Subscription;

  private readonly statusSubject: BehaviorSubject<ScanningStatus> = new BehaviorSubject<ScanningStatus>(ScanningStatus.NotConnected);
  public readonly status: Observable<ScanningStatus> = this.statusSubject.asObservable();

  private readonly progressSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0.0);
  public readonly progress: Observable<number> = this.progressSubject.asObservable();


  constructor() {
  }

  public scan(): void {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = new Subscription();
    }
    this.sub.add(interval(200).subscribe(count => {
      if (count > 100) {
        this.sub.unsubscribe();
        this.statusSubject.next(ScanningStatus.Cancelling);
      } else if (count > 80) {
        this.statusSubject.next(ScanningStatus.Postprocessing);
      } else if (count > 3) {
        this.statusSubject.next(ScanningStatus.Scanning);
      }
      this.progressSubject.next(count / 100.0 > 1.0 ? 1.0 : count / 100.0);
    }));
  }

}
