import { Component, OnInit } from '@angular/core';
import { PostModel } from '../model/post.model';
import { EndpointService } from '../../services/endpoint.service';
import { AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.scss']
})
export class CreateDataComponent {
  postModel = new PostModel

  constructor(private endPointService: EndpointService, private router: Router){}

  get f(): { [key: string]: AbstractControl } {
    return this.postModel.formGroupAddPost.controls;
  }
  
  addPost() {
    const formData = new FormData();
    
    this.postModel.formGroupAddPost.controls['userId'].setValue(this.endPointService.loadUserData().userId)

    Object.keys(this.postModel.formGroupAddPost.controls).forEach(key => {
      const value = this.postModel.formGroupAddPost.get(key)?.value;
      formData.append(key, value);
    })
    this.endPointService.addPost(formData).subscribe(
      (response) => {
        alert('Add Success');
        this.router.navigate(['data'])
      },
      (error) => {
        alert('Add Failed');
      }
    );
  }
}
