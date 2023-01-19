import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
//import { iconSubset } from './icons/icon-subset';
import { cilListNumbered, cilPaperPlane, brandSet } from '@coreui/icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'billing-generator-frontend';

  constructor(private router: Router, public iconSetService: IconSetService) {
    iconSetService.icons = {...brandSet }//, ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
  }
}
