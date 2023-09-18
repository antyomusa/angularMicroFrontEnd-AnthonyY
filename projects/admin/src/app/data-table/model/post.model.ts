import { FormControl, FormGroup, Validators } from "@angular/forms";

export class PostModel {
    formGroupAddPost = new FormGroup({
        title: new FormControl("", [Validators.required]),
        body: new FormControl("", [Validators.required]),
        userId: new FormControl(""),
    })

    formGroupEditPost = new FormGroup({
        id: new FormControl("", [Validators.required]),
        title: new FormControl("", [Validators.required]),
        body: new FormControl("", [Validators.required]),
        userId: new FormControl(""),
    })

}