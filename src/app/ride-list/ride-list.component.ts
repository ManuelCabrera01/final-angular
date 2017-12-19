import { Component, OnInit } from '@angular/core';
import {RideService} from '../ride.service'
@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css'],
   providers: [RideService]
})
export class RideListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
