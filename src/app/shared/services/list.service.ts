import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostModel } from '../models/post.model';
import { UserModel } from '../models/user.model';
import { AlbumModel } from '../models/album.model';
import { TodoModel } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get<UserModel[]>(`${environment.URL_BASE_SITE}/users`);
  }

  getPots() {
    return this.http.get<PostModel[]>(`${environment.URL_BASE_SITE}/posts`);
  }

  getAlbums() {
    return this.http.get<AlbumModel[]>(`${environment.URL_BASE_SITE}/albums`);
  }

  getTodos() {
    return this.http.get<TodoModel[]>(`${environment.URL_BASE_SITE}/todos`);
  }
}
