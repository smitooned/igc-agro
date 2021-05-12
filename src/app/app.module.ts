import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { DescriptionComponent } from './description/description.component';
import { DescriptionSliderLeftComponent } from './description-slider-left/description-slider-left.component';
import { DescriptionInputRightComponent } from './description-input-right/description-input-right.component';
import { CartNavigatorComponent } from './cart-navigator/cart-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LandingPageComponent,
    DetailsPageComponent,
    DescriptionComponent,
    DescriptionSliderLeftComponent,
    DescriptionInputRightComponent,
    CartNavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
    {path: 'landing', component: LandingPageComponent},
    {path: 'details', component: DetailsPageComponent}
  ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
