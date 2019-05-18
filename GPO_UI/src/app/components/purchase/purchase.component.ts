import { Component, OnInit } from '@angular/core';
import { RestService } from '@app/services/rest.service';
import { PurchaseMapper } from '@app/mapper/purchase-mapperl';
import { HelperService } from '@app/services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  constructor(private restService: RestService,private helperService: HelperService,
    private router: Router) { }
  pharmacyList;
  gpoList;
  purchaseForm: any;
  productList;
  popupMessage
  showPopup=false;
  popupOptionsExcluded=["cancelation"]

  ngOnInit() {
    this.purchaseForm = {};
    this.restService.getPharmacyList().subscribe((response: any) => {
      this.pharmacyList = response;
    });

    this.restService.getGPOList().subscribe((response: any) => {
      this.gpoList = response;
    });
    this.purchaseForm.address={addressLine1:"",addressLine2:"",zip:"",state:""};
  }
  onChangePharmacy(pharmacy) {
    this.purchaseForm.pharmacyName=this.pharmacyList.find(p=>p.id==this.purchaseForm.pharmacyId).name;


  }
  onChangeGPO(id) {    
    this.purchaseForm.product=null;
    this.restService.getGPODetails(id).subscribe((response: any) => {
      this.productList = response;
      console.log( this.productList )
    });
  }
  selectProduct(product){
    this.purchaseForm.product=product;
    this.purchaseForm.calculatedDetails=null;
  }
  onChangeQuantity(qty){
    this.purchaseForm.quantity=qty;
    this.purchaseForm.totalPrice=this.purchaseForm.product.drugPrice*qty;
    this.helperService.startLoader();
    this.restService.getCalculations(this.purchaseForm.totalPrice,this.purchaseForm.gpoId).subscribe((response: any) => {
    this.purchaseForm.calculatedDetails=response;
    this.helperService.stopLoader()
    },error=>{
      
    this.helperService.stopLoader()
    })
    }
    purchase(){
      let purchaseMapper=new PurchaseMapper();
      console.log(purchaseMapper.getPurchaseModel(this.purchaseForm))
      this.restService.purchae(purchaseMapper.getPurchaseModel(this.purchaseForm)).subscribe(
        response=>{

          this.acknowledge("Purchase order submitted. "+response);
        
      },
      error=>{
        
        this.acknowledge("Failed to submit purchase order ");
      })
    }

    acknowledge(message){
      this.popupMessage=message;
      this.showPopup=true;
    }
    
 cancel(){
  this.router.navigate(["/login"])
}
    confirmAcknowledge(){
      this.showPopup=false;
      this.router.navigate(['/home']);
    
    }
    cancelAcknowledge(){
      this.showPopup=false;
    }
}
