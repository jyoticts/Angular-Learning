import { PurchaseModel } from "@app/models/purchase-model";


export class PurchaseMapper {
    getPurchaseModel(purchaseForm) {
        let purchaseModel = new PurchaseModel();
        purchaseModel.associatedGpoId = purchaseForm.gpoId;
        purchaseModel.dateOfPurchase = new Date();
        purchaseModel.gpoDiscountPercent = purchaseForm.calculatedDetails.gpoDiscountPercent;
        purchaseModel.gpoProcessingFees = purchaseForm.calculatedDetails.gpoProcessingFees;
        purchaseModel.grandTotalInvoicedAmount = purchaseForm.calculatedDetails.grandTotalInvoicedAmount;
        purchaseModel.grandTotalQuantity = purchaseForm.quantity;
        purchaseModel.gskDiscountPercent = purchaseForm.calculatedDetails.gskDiscountPercent;
        purchaseModel.pharmacyIdCode = purchaseForm.pharmacyId;
        purchaseModel.pharmacyName = purchaseForm.pharmacyName;
        purchaseModel.productDescription = purchaseForm.product.drugName;
        purchaseModel.totalRebateAmount = purchaseForm.calculatedDetails.totalRebateAmount;
        purchaseModel.unitofMeasure = purchaseForm.address.addressLine1 + "," + purchaseForm.address.addressLine2 +
            +",ZIP code:" + String(purchaseForm.address.zip) + ",State:" + purchaseForm.address.state;
        return purchaseModel;
    }
}
