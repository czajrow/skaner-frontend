import { Injectable } from '@angular/core';
import { ScanningStatus } from './scanning.service';
import { BehaviorSubject, Observable } from 'rxjs';

export interface ScanViewModel {
  id: string;
  name: string;
  createDate: string;
  status: ScanningStatus;
}

@Injectable({
  providedIn: 'root'
})
export class ScansService {

  private readonly scans: ScanViewModel[] = [];
  private readonly scansSubject: BehaviorSubject<ScanViewModel[]> = new BehaviorSubject<ScanViewModel[]>(this.scans);
  public scans$: Observable<ScanViewModel[]> = this.scansSubject.asObservable();

  constructor() {
    this.scans.push({
      id: '0',
      name: 'Name',
      createDate: new Date().toDateString(),
      status: ScanningStatus.Done,
    });
    this.scansSubject.next(this.scans);
  }

  public addScan(name: string): void {
    this.scans.push({
      id: this.scans.length.toString(),
      name,
      createDate: new Date().toDateString(),
      status: ScanningStatus.NotConnected,
    });
    this.scansSubject.next(this.scans);
  }
}
