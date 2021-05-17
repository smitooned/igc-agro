import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService extends DetailsPageComponent {

  constructor(private route:ActivatedRoute,private router:Router) {
    super();
   }

  canDeactivate(component:DetailsPageComponent): boolean {
    window.history.pushState({}, "", this.router.url)
    return confirm("Warning: Do you want to discard all changes ?")
  }
}
