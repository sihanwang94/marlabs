import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductsPipe } from './products/products.pipe';
import { RatingComponent } from './products/rating/rating.component';
import { HomeComponent } from './layouts/home/home.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { DetailsComponent } from './products/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsPipe,
    RatingComponent,
    HomeComponent,
    NavigationComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path:"home", component:HomeComponent },
      { path:"products", component:ProductsComponent},
      { path:"details/:pCode", component:DetailsComponent },
      { path:"", redirectTo:"home", pathMatch:"full" },
      { path:"**", redirectTo:"home" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
