export const appApiResources: any = {
    deceasedList: { mock: '', rest: '/lifechainapi/deathRegistrations?offset={0}&sizeOfResult={1}' },
    deceasedDetails: { mock: '', rest: '/lifechainapi/deathRegistrations/{0}' },
    login: { mock: '', rest: '/user/login' },
    getPharmacyList: { mock: '/getPharmacyList.json', rest: '', isExcluded: true },
    getGPOList: { mock: '/getGPOList.json', rest: '', isExcluded: true },
    getGPODetails: { mock: '/getGPODetails.json', rest: 'order/gpoDrugList/{0}', isExcluded: false },
    getCalculations: { mock: '/getCalculations.json', rest: 'order/calculate/{0}/{1}', isExcluded: false },
    purchase: { mock: '', rest: 'order/', isExcluded: false },

};

export const ENVIRONMENT: any = {

    restBaseUrl: 'http://54.164.32.83:8080/gsk/',
    nonAPIBaseUrl: '/ntuc/api'

};
