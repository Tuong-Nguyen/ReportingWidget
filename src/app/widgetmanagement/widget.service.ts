import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';

import { Widget } from './widget';

@Injectable()
export class WidgetService {
  static readonly ENDPOINT = 'widgets';
  static readonly BASE_URL = 'http://localhost:3000/';

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAll(): Observable<Widget[]> {
    return this.http.get<Widget[]>(this.getUrl());
  }

  add(widget: Widget) {
    this.http.post(this.getUrl(), widget);
  }

  remove(id: number): Observable<boolean> {
    return this.http.delete(this.getUrl() + '/' + id);
  }

  private getUrl() {
    return WidgetService.BASE_URL + WidgetService.ENDPOINT;
  }
}
