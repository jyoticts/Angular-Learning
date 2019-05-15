import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RestService } from '@app/services/rest.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private router: Router, private restService: RestService, private activatedRoute: ActivatedRoute) { }
  deceasedDetails : any;
  nricHash;
  popupMessage;
  showPopup;
  popupOptionsExcluded=[]
  ngOnInit() {
    this.activatedRoute
            .queryParams
            .subscribe(params => {
              if (params["nricHash"]) {
this.nricHash=params["nricHash"];
this.restService.getDeceasedDetails(this.nricHash).subscribe((response: any) => {
  this.deceasedDetails=response;
            });
          }
        });
  }
  back(){
    this.router.navigate(['/home']);
  }
  acknowledge(){
    this.popupMessage="Don you want to acknowledge this NRIC?";
    this.showPopup=true;
  }
  confirmAcknowledge(){
    this.showPopup=false;
    this.router.navigate(['/home']);
  
  }
  cancelAcknowledge(){
    this.showPopup=false;
  }

}