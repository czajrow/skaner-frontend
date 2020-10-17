import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export const API_URL = 'http://127.0.0.1:5000';


@Injectable({
  providedIn: 'root'
})
export class DataClient {

  constructor(
    @Inject(HttpClient) private readonly _httpClient: HttpClient,
  ) {
  }

  createData(data: {data: any}): any {
    const url = API_URL + '/data';
    const content = JSON.stringify(data);

    const options: any = {
      // body: content,
      observe: 'response',
      responseType: 'blob' as 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
    };

    return this._httpClient.post<Blob>( url, content, options).pipe(
      map(response => {
        return blobToObject((response as HttpResponse<any>).body);
      }),
    );
  }
}

export interface IDataViewModel {
  id: string;
  name: string;
  surname: string;
}

export class DataViewModel implements IDataViewModel {
  id: string;
  name: string;
  surname: string;

  constructor(id: string, name: string, surname: string) {
    this.id = id;
    this.name = name;
    this.surname = surname;
  }
}

function blobToObject(blob: Blob): Observable<any> {
  return new Observable<string>((observer: any) => {
    if (!blob) {
      observer.next('');
      observer.complete();
    } else {
      const reader = new FileReader();
      reader.onload = event => {
        observer.next(JSON.parse(event.target.result as string));
        observer.complete();
      };
      reader.readAsText(blob);
    }
  });
}
