import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@app/components/login/login.component';
import { HomeComponent } from '@app/components/home/home.component';
import { CreateComponent } from '@app/components/create/create.component';
import { ViewComponent } from '@app/components/view/view.component';
import { UserLayoutComponent } from '@app/components/layout/user-layout/user-layout.component';
import { RegisterUserComponent } from '@app/components/register-user/register-user.component';
import { PurchaseComponent } from '@app/components/purchase/purchase.component';
import { OrderSummaryComponent } from '@app/components/order-summary/order-summary.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'purchase', component: PurchaseComponent },
    { 
        path: '',
        component: UserLayoutComponent,
        children: [
            { path: 'home', component: HomeComponent},
            { path: 'create', component: CreateComponent},
            { path: 'view', component: ViewComponent},
            { path: 'register', component: RegisterUserComponent},
            { path: 'order-summary', component: OrderSummaryComponent}
        ]
    }
    
    // { path: 'createconsortium', component: CreateConsortiumComponent },
    // { path: 'genesis', component: GenesisComponent },
    // { path: 'dashboard', component: DashboardComponent },
    // { path: 'addmember', component: AddMemberComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        onSameUrlNavigation: 'reload'
    })],
    exports: [
        RouterModule
    ]
})
export class AppRouting { }