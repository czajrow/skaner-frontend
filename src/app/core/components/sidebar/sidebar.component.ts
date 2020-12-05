import {Component, OnInit} from '@angular/core';
import { StatusOfConnection, StatusService } from '@/core/services/status.service';
import { Observable } from 'rxjs';

interface SidebarItem {
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public _statusOfConnection = StatusOfConnection;
  public _status: Observable<StatusOfConnection>;

  readonly items: SidebarItem[] = [
    {
      title: 'Home',
      link: '/home',
      icon: 'home',
    },
    {
      title: 'Scanning',
      link: '/scanning',
      icon: 'scanning',
    },
    {
      title: 'Scans',
      link: '/scans',
      icon: 'scans',
    },
    {
      title: 'Settings',
      link: '/settings',
      icon: 'settings'
    },
  ];

  constructor(
    public readonly _statusService: StatusService,
  ) {
    this._status = _statusService.status$;
  }

  ngOnInit(): void {
  }

}
