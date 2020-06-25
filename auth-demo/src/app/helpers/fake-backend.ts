import { HttpRequest, HttpInterceptor, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable, ɵCodegenComponentFactoryResolver } from '@angular/core';

@Injectable()
export class BackendInterceptor implements HttpInterceptor {

  // two possible tokens, for testing the roles of the user
    private isAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6dHJ1ZX0.iy8az1ZDe-_hS8GLDKsQKgPHvWpHl0zkQBqy1QIPOkA';
    private notAdminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1vc2ggSGFtZWRhbmkiLCJhZG1pbiI6ZmFsc2V9.oEyti9UbZt78ejCXw9Ocv20zoqXp6ZWNMXDI_b6oICk';

    private token = this.isAdminToken;

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // fake a response to a post to /api/authenticate
        if (request.method === "POST" && request.url.endsWith('/api/authenticate')){
            if (request.body.email === 'mosh@domain.com' && request.body.password === '1234')
                return of(new HttpResponse({ status: 200, body: { token: this.token }}));
            else
                return of(new HttpResponse({ status: 400 })); // bad request
        } else {
            // fake a response to a get request to /api/orders
            if (request.method === "GET" && request.url.endsWith('/api/orders')){
                if (request.headers.get('Authorization') === 'Bearer ' + this.token)
                    return of(new HttpResponse({ status: 200, body: [1, 2, 3]}));
                else
                    return of(new HttpResponse({ status: 401})); // unauthorized
            } else {
                // pass on any other request
                return next.handle(request);
            }
        }
    }

}