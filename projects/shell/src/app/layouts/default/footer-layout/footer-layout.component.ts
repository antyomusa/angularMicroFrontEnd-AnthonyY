import { Component } from '@angular/core';
import { faChartLine, faTable } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-footer-layout',
  templateUrl: './footer-layout.component.html',
  styleUrls: ['./footer-layout.component.scss']
})
export class FooterLayoutComponent {
  // fontawesome
  faChartline = faChartLine;
  faTable = faTable;
}
