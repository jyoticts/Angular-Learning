import { Component,OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { HelperService } from '@app/services/helper.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPH';
  constructor(private helperService: HelperService,private router: Router){
    this.helperService.stopLoader();
  } 
  ngOnInit() {  
    let user = JSON.parse(sessionStorage.getItem('user'));
    if(!user){
      this.router.navigate(['/login']);
    }
  }

}
