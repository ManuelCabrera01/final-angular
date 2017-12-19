import { Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { CommentComponent } from './comment/comment.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import {RideListComponent } from './ride-list/ride-list.component';

export const routes: Routes = [
    { path: 'api', component: AuthComponent },
    { path: 'api', component: CommentComponent },
    { path: 'api/rides', component: RideDetailsComponent },
    { path: 'ride/:id', component: RideDetailsComponent },
    { path: '**', redirectTo: '' }
];
