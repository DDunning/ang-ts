import { Injectable } from '@angular/core';
import { DataService } from './data-service.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FollowersService extends DataService {

  private static url: string = 'https://api.github.com/users/mosh-hamedani/followers';

  constructor(http: HttpClient){
    super(FollowersService.url, http);
   }
}
