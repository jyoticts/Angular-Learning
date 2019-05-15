import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse ,HttpErrorResponse} from '@angular/common/http';
import { HelperService } from '../../services/helper.service';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';


@Injectable()
export class httpInterceptor implements HttpInterceptor {

    constructor(private router: Router , private helperService: HelperService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        //console.log(this.stateManagementService.loadingStatus());
        // this.stateManagementService.startLoading();
        // console.log(this.stateManagementService.getMemberAdditionStatus());
        //console.log(this.stateManagementService.loadingStatus());

    
        console.log("Content-Type : "+request.headers.get("Content-Type")); 
        console.log("Authorization : "+request.headers.get("Authorization")); 
        console.log("cache-control : "+request.headers.get("cache-control")); 
        console.log("Postman-Token : "+request.headers.get("Postman-Token")); 
        if (request.headers) {
            console.log(request.headers);
          }
          this.helperService.startLoader();
        return next.handle(request).pipe(
            tap(res => {
                setTimeout(() => {
                    this.helperService.stopLoader();
                }, 1000);

                if (res instanceof HttpResponse) {
                }
                else if(res instanceof HttpErrorResponse){
                }
            }));
    }


}