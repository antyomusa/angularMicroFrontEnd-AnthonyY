import { Component } from '@angular/core';
import { faChartLine, faTable, faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {
  
  // fontawesome
  faChartline = faChartLine;
  faTable = faTable;
  faBars = faBars;

  // sidenav
  opened = false;
  
  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 720) {
        return true;
    } else {
        return false;
    }
  }

}
