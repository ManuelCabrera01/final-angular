import { Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { CommentComponent } from './comment/comment.component';
import {RideListComponent } from './ride-list/ride-list.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';

export const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'rides/:id/comment', component: CommentComponent },
    { path: '', component: RideListComponent },
    { path: 'rides/:id', component: RideDetailsComponent },
    { path: '**', redirectTo: '' }
];
