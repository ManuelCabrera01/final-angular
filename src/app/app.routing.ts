import { Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { CommentComponent } from './comment/comment.component';
import {RideListComponent } from './ride-list/ride-list.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';

export const routes: Routes = [
    { path: ' ', component: AuthComponent },
    { path: ' ', component: CommentComponent },
    { path: ' ', component: RideListComponent },
    { path: 'ride/:id', component: RideDetailsComponent },
    { path: '**', redirectTo: '' }
];
