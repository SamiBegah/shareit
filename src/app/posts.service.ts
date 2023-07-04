import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private apiUrl = 'http://localhost:8080/posts';
  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPost(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createPost(post: any) {
    return this.http.post(this.apiUrl, post);
  }

  updatePost(id: number, post: any) {
    return this.http.put(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
