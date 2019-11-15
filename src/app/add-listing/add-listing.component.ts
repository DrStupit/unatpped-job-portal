import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from '../services/jobs-service.service';
import { JobPost } from '../job';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.scss']
})
export class AddListingComponent implements OnInit {

  jobListing = new JobPost();

  constructor(private jobService: JobsServiceService, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSubmit() {
        this.jobService.postNewJob(
          '',
          this.jobListing.company,
          '2019-10-12T14:00:25.910+00:00',
          this.jobListing.contact,
          this.jobListing.overview,
          this.jobListing.requirements,
          this.jobListing.responsibilities,
          this.jobListing.location,
          this.jobListing.title
        )
      .subscribe(data => {
        this.snackBar.open('Successfully Added Listing', '', {
          duration: 4000,
        });
        console.log('Reponse Back from post: ' + data);
      });
  }

}
