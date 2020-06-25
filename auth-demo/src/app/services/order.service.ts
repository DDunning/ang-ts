import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() { 
    let token = localStorage.getItem('token');

    return this.http.get('/api/orders', {headers: {'Authorization': 'Bearer ' + token}})
    .pipe(  map(response => response as any[]));
  }
}
