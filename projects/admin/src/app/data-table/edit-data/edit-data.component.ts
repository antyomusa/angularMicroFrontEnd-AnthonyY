import { Component, OnInit } from '@angular/core';
import { PostModel } from '../model/post.model';
import { EndpointService } from '../../services/endpoint.service';
import { AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {

  postModel = new PostModel

  // declare variable
  postDetail : any;

  constructor(private endPointService: EndpointService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((data: any) => {
      const id = data.params.id;
      this.endPointService.getPostDetail(id).subscribe(
        (data) => {
          this.postDetail = data;
          this.postModel.formGroupEditPost.patchValue({
            title: this.postDetail.title,
            body: this.postDetail.body
          })
        },
        (error) => {
          console.error(error);
        }
      );
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.postModel.formGroupEditPost.controls;
  }

  editPost(){

    this.activatedRoute.paramMap.subscribe((data: any) => {
      const id = data.params.id;

      const formData = new FormData();
    
      this.postModel.formGroupEditPost.controls['userId'].setValue(this.endPointService.loadUserData().userId)
      this.postModel.formGroupEditPost.controls['id'].setValue(id)
  
      Object.keys(this.postModel.formGroupEditPost.controls).forEach(key => {
        const value = this.postModel.formGroupEditPost.get(key)?.value;
        formData.append(key, value);
      })
      this.endPointService.editPost(formData, id).subscribe(
        (response) => {
            alert('Edit Success');
            this.router.navigate(['data'])
        },
        (error) => {
          alert('Id is Invalid');
        }
      );
    })

  }


}
