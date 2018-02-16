import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
// import {BlogComponent } from './blog/Blog.Component'
import { AuthComponent } from './auth/auth.component';
// import { CommentComponent } from './comment/comment.component';
import {RideListComponent } from './ride-list/ride-list.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';

export const routes: Routes = [
    { path: '', component: AuthComponent },
    // { path: 'rides/:id/comment', component: CommentComponent },
    { path: 'rides', component: RideListComponent },
    { path: 'rides/:id', component: RideDetailsComponent },
    { path: 'rides', redirectTo: '' },
    { path: 'profile/:id', component: ProfileComponent },
    // { path: 'blog', component: BlogComponent }
];
