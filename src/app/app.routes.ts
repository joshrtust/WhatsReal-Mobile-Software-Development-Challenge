// I referenced these docs to help me here https://angular.dev/guide/routing/define-routes

import { Routes } from '@angular/router';
import { List } from './users/list/list';

export const routes: Routes = [
    { // On root path, redirect to users
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    },
    {
        path: 'users',
        component: List
    }, 
    { // On any route, redirect to users
        path: '**',
        redirectTo: 'users'
    }
];
