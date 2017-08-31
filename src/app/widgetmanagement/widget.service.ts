import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';

import { Widget, WidgetSize } from './widget';

@Injectable()
export class WidgetService {
  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getWidgets(): Observable<Widget[]> {
    return this.http.get<Widget[]>('http://localhost:3000/widgets');
  }
}
