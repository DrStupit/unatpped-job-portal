import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from '../services/jobs-service.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit {
  listings = [];

  constructor(private jobService: JobsServiceService) { }

  ngOnInit() {

    this.jobService.getJobListings().subscribe((data: any[]) => {
      this.listings = data;
      console.log(data);
    });

    console.log(this.listings);
  }

}
