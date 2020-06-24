import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getOrders() { 
    return [ 1, 2, 3];
    // return this.http.get('/api/orders')
    //   .map(response => response.json());
  }
}
