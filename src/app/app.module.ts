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
import { ConfigureBoxesComponent } from './configure-boxes/configure-boxes.component';
import { CartBoxesComponent } from './cart-boxes/cart-boxes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArrangementComponent } from './arrangement/arrangement.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LandingPageComponent,
    DetailsPageComponent,
    DescriptionComponent,
    DescriptionSliderLeftComponent,
    DescriptionInputRightComponent,
    CartNavigatorComponent,
    ConfigureBoxesComponent,
    CartBoxesComponent,
    ArrangementComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {path: 'landing', component: LandingPageComponent},
    {path: 'details', component: DetailsPageComponent}
  ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
