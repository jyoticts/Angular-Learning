import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private deceasedDetails : any;
  public setDeceasedDetails(deceasedDetails){
    this.deceasedDetails=deceasedDetails;
  }
  public getDeceasedDetails() {
    return this.deceasedDetails;
  }

}
