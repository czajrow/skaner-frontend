import { Injectable } from '@angular/core';
import { ScanningStatus } from './scanning.service';

export interface ScanViewModel {
  name: string;
  createDate: string;
  status: ScanningStatus;
}

@Injectable({
  providedIn: 'root'
})
export class ScansService {

  constructor() { }
}
