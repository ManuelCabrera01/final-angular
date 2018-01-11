import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { routes } from './app.routing';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { RideListComponent } from './ride-list/ride-list.component';
import { RideDetailsComponent } from './ride-details/ride-details.component';
import { AuthComponent } from './auth/auth.component';
import { CommentComponent } from './comment/comment.component';
import { RideService } from './service/ride.service';
import { AuthService } from './service/auth.service';
import { ProfileComponent } from './profile/profile.component';
import { FilterPipe } from './pipes/filter.pipe';

import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    RideListComponent,
    RideDetailsComponent,
    AuthComponent,
    CommentComponent,
    ProfileComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
     FormsModule,
     HttpModule,
     RouterModule.forRoot(routes),
     FileUploadModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBq14RxyVWcfcjRmJ8vFCDIoA2f-HkBTBs'
    })
  ],
  providers: [
      RideService,
      AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
