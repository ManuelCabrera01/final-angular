import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';

import { AppComponent } from './app.component';
import { RideListComponent } from './ride-list/ride-list.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { AuthComponent } from './auth/auth.component';
import { CommentComponent } from './comment/comment.component';
import { RideService } from './ride.service';


@NgModule({
  declarations: [
    AppComponent,
    RideListComponent,
    RideDetailsComponent,
    AuthComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,
     HttpModule,
     RouterModule.forRoot(routes)
  ],
  providers: [RideService],
  bootstrap: [AppComponent]
})
export class AppModule { }
