import { Component, Input, OnInit } from '@angular/core';
import { ScanViewModel } from '../../../../core/services/scans.service';
import { ScanningService, ScanningStatus } from '../../../../core/services/scanning.service';

@Component({
  selector: 'app-scan-container',
  templateUrl: './scan-container.component.html',
  styleUrls: ['./scan-container.component.scss']
})
export class ScanContainerComponent implements OnInit {

  public _isInProgress = false;
  public _status: ScanningStatus;

  @Input() set scan(value: ScanViewModel) {
    if (value) {
      this._scan = value;
      this.createDate = new Date(this._scan.createDate).toDateString();
      this._status = value.status;
      this._isInProgress = value.status !== ScanningStatus.Done;
      if (this._isInProgress) {
        this.watchScan();
      }
    }
  }
  public _scan: ScanViewModel;
  public createDate: string;

  constructor(
    public readonly _scanningService: ScanningService,
  ) { }

  ngOnInit(): void {
  }

  public onClick(): void {
    console.log('onClick');
  }

  public watchScan(): void {
    this._scanningService.status$.subscribe(status => {
      this._status = status;
      if (status === ScanningStatus.Done) {
        this._isInProgress = false;
      }
    });
  }

}
