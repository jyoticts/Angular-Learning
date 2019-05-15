export const appApiResources: any = {
    deceasedList: {mock: '', rest: '/lifechainapi/deathRegistrations?offset={0}&sizeOfResult={1}'},
    deceasedDetails: {mock: '', rest: '/lifechainapi/deathRegistrations/{0}'},
    login: {mock: '', rest: '/user/login'},

};

export const ENVIRONMENT: any = {

    restBaseUrl: 'http://18.222.68.121/ntuc/ntucincome',
    nonAPIBaseUrl: '/ntuc/api'

};
