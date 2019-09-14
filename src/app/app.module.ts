import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatListModule, MatButtonModule, MatAutocompleteModule, MatInputModule} from '@angular/material';
import {MatSidenavModule, MatExpansionModule, MatToolbarModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListingComponent } from './listing/listing.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
@NgModule({
   declarations: [
      AppComponent,
      ListingComponent,
      ToolbarComponent,
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
      MatListModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
