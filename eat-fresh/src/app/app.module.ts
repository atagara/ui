import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { SearchComponent } from './search/search.component';
import { ProductModule } from './product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
	HttpClientModule,

	// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
	// and returns simulated server responses.
	// Remove it when a real server is ready to receive requests.
	HttpClientInMemoryWebApiModule.forRoot(
	  InMemoryDataService, { dataEncapsulation: false }
	)	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
