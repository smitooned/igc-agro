import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService extends DetailsPageComponent {

  // constructor() { }

  canDeactivate(component:DetailsPageComponent): boolean {
    return confirm("Warning: Do you want to discard all changes ?")
  }
}
