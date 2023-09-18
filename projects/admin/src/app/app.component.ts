import { Component } from '@angular/core';
import { EndpointService } from './services/endpoint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin';

   constructor(private endPointService : EndpointService){}

  ngOnInit(): void {
    this.endPointService.getPostDetail(1).subscribe(
      (data) => {
      },
      (error) => {
      }
    );
  }
}
