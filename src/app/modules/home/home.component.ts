import {Component, OnInit} from '@angular/core';
import {DataClient} from '../../core/api/api-clients';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly _dataClient: DataClient,
  ) {
  }

  ngOnInit(): void {
  }

  onMakeCallClick(): void {
    this._dataClient.createData({data: {a: 'abc', b: 'bcd', c: 'cde'}}).subscribe(response => {
      // console.log('response', response);
      response.subscribe(a => console.log(a));
    });
  }

}
