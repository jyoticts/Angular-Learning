import { Injectable } from '@angular/core';
import { ENVIRONMENT } from '../utils/config/app.constants';

import * as $ from 'jquery';

@Injectable()
export class HelperService {

  constructor() { }
  getUrl(urlObj: any): any {
    const _url: string = (ENVIRONMENT.env === 'MOCK' || urlObj.isExcluded) ? 'assets/json'+urlObj.mock : (urlObj.isNonAPI ? ENVIRONMENT.nonAPIBaseUrl+urlObj.rest : ENVIRONMENT.restBaseUrl+urlObj.rest);
    return (urlObj.params) ? _url.replace(/\{0}/, urlObj.params[0]).replace(/\{1}/, urlObj.params[1]).replace(/\{2}/, urlObj.params[2]) : _url;
  }
  startLoader(delay?: number): void {
    delay = delay || typeof delay === 'number' ? delay : 0;
    setTimeout(() => {
      $('#progressBar').show();
    }, delay);
    // alert("start");
  }

  stopLoader(delay?: number): void {
    delay = delay || typeof delay === 'number' ? delay : 300;
    setTimeout(() => {
      $('#progressBar').hide();
    }, delay);
    
    // alert("stop");
    
  }



}
