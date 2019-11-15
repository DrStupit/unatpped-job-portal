import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatListModule, MatSnackBarModule, MatChipsModule, MatGridListModule, MatButtonModule, MatAutocompleteModule, MatInputModule} from '@angular/material';
import {MatSidenavModule, MatTabsModule, MatSelectModule, MatExpansionModule, MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListingComponent } from './listing/listing.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FilterComponentComponent } from './filter-component/filter-component.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { HttpClientModule } from '@angular/common/http';
import { AddListingComponent } from './add-listing/add-listing.component';
import { JobsServiceService } from './services/jobs-service.service';
@NgModule({
   declarations: [
      AppComponent,
      ListingComponent,
      ToolbarComponent,
      FilterComponentComponent,
      JobDescriptionComponent,
      AddListingComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatAutocompleteModule,
      MatInputModule,
      MatSidenavModule,
      MatExpansionModule,
      MatCardModule,
      MatToolbarModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatChipsModule,
      MatSelectModule,
      MatSnackBarModule,
      MatGridListModule,
      MatTabsModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   providers: [JobsServiceService],
   bootstrap: [AppComponent]
})
export class AppModule { }
