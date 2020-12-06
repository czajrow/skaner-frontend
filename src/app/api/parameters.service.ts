import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  constructor(
    private readonly _http: HttpClient,
  ) {
  }


  public getProbe(): void {
    console.log('IN: getProbe');

    const a: 'json' = 'json';

    const options = {
      responseType: a,
    };

    this._http.request('GET', BASE_URL, options).subscribe(
      result => {
      console.log('RESULT: getProbe');
      console.log(result);
    },
      error => {
        console.log('ERROR: getProbe');
        console.log(error);
      }
    );
  }
}
