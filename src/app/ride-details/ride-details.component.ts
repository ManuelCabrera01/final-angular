import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RideService} from '../service/ride.service'


@Component({
  selector: 'app-ride-details',
  templateUrl: './ride-details.component.html',
  styleUrls: ['./ride-details.component.css'],
  providers : [RideService]
})
export class RideDetailsComponent implements OnInit {
  ride : any;

  constructor(
    private route : ActivatedRoute,
    private rideService: RideService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      // this.getRideDetails (params['id']);
    })
  }
  // getRideDetails(id) {
  //   // this.rideService.get(id)
  //   .subscribe((ride)=>{
  //     this.ride = ride;
  //   })
  // }

}
