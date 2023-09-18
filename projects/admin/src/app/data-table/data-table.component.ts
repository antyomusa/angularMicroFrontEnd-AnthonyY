import { Component, OnInit } from '@angular/core';
import { EndpointService } from '../services/endpoint.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  host: { 'admin': 'DataTableComponent' },
})
export class DataTableComponent {

  dummyData: any;

  constructor(private endPointService: EndpointService) { }

  ngOnInit(): void {
    this.endPointService.getPost().subscribe(
      (data) => {
        this.dummyData = data;
      },
      (error) => {
        console.error(error);
      }
    );

    this.endPointService.saveUserData(1)
    
  }

  deletePost(){
    const id = this.endPointService.loadUserData().userId;

    this.endPointService.deletePost(id).subscribe(
      (response) => {
        alert('Delete Success')
      }, 
      (error) => {
        alert('Id is invalid')
      }
    )
  }


}
