import { Component,OnInit } from '@angular/core';
import { Router, NavigationStart} from '@angular/router';

import { HelperService } from '@app/services/helper.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'SPH';
  constructor(private helperService: HelperService,private router: Router){
    this.helperService.stopLoader();
  } 
  ngOnInit() { 
    this.router.events.subscribe((event) => { 
      if(event instanceof NavigationStart){        
        let navigationPath = event.url;
    let user = sessionStorage.getItem('user');
    if(!user && navigationPath!='/login' && navigationPath!='/purchase'){
      
      this.router.navigate(['/login']);
    }
  }
  })
  }

}

