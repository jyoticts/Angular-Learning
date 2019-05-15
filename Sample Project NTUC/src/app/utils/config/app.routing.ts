import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '@app/components/login/login.component';
import { HomeComponent } from '@app/components/home/home.component';
import { CreateComponent } from '@app/components/create/create.component';
import { ViewComponent } from '@app/components/view/view.component';
import { UserLayoutComponent } from '@app/components/layout/user-layout/user-layout.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { 
        path: '',
        component: UserLayoutComponent,
        children: [
            { path: 'home', component: HomeComponent},
            { path: 'create', component: CreateComponent},
            { path: 'view', component: ViewComponent}
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