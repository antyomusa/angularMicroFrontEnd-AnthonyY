import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
  })
}

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  private postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPost(): Observable<unknown> {
    return this.http.get(`${this.postsUrl}`)
  }

  getPostDetail(id: number): Observable<unknown> {
    return this.http.get(`${this.postsUrl}/${id}`)
  }

  deletePost(id: number): Observable<unknown> {
    return this.http.delete(`${this.postsUrl}/${id}`)
  }

  addPost(body: FormData): Observable<unknown> {
    return this.http.post(this.postsUrl, body)
  }

  editPost(body: FormData, id: number): Observable<unknown> {
    return this.http.put(`${this.postsUrl}/${id}`, body)
  }

  saveUserData(randomNumber : number) {
    const userData = { userId : randomNumber }
    sessionStorage.setItem('userData', JSON.stringify(userData))
  }

  loadUserData() {
    const userData = sessionStorage.getItem('userData')
    return JSON.parse(userData ? userData : '');
  }
}
