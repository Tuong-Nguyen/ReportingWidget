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

  private static getUrl() {
    return WidgetService.BASE_URL + WidgetService.ENDPOINT;
  }

  getAll(): Observable<Widget[]> {
    return this.http.get<Widget[]>(WidgetService.getUrl());
  }

  add(widget: Widget) {
    this.http.post(WidgetService.getUrl(), widget);
  }

  remove(id: number): Observable<boolean> {
    return this.http.delete(WidgetService.getUrl() + '/' + id);
  }
}
