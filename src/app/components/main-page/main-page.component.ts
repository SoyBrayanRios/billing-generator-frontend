import { Component, OnInit } from '@angular/core';
import { navItems } from '../_nav';
import { ActivatedRoute } from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { cilListNumbered, cilPaperPlane, brandSet, cilChartLine } from '@coreui/icons';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public navItems = navItems;

  constructor(private route: ActivatedRoute, public iconSet: IconSetService) { 
    iconSet.icons = { cilListNumbered, cilPaperPlane, cilChartLine,...brandSet };
  }

  ngOnInit(): void {
  }
}