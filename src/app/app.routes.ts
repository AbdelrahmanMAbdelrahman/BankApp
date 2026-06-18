import { Routes } from '@angular/router';

import { PageNotFound } from './page-not-found/page-not-found';
import { App } from './app';
import { Home } from './home/home';

export const routes: Routes = [

    {path:"",component:Home},
    {path:"**",component:PageNotFound}
];
