// I referenced these docs to help me here https://angular.dev/guide/routing/define-routes

import { Routes } from '@angular/router';
import { List } from './users/list/list';

export const routes: Routes = [
  {
    path: 'users',
    component: List
  }
];
