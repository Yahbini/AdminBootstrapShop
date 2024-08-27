import { Routes } from '@angular/router';
import { LoginComponent } from './components/Login/login.component';
import { AdminComponent } from './components/Admin/admin.component';
import { DashboardComponent } from './components/Admin/Dashboard/dashboard.component';
import { AddProductComponent } from './components/Admin/Product/add.component';
import { ListProductComponent } from './components/Admin/Product/list.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'add-product',
                component: AddProductComponent
            },
            {
                path: 'list-product',
                component: ListProductComponent
            }
        ]
    }
];
