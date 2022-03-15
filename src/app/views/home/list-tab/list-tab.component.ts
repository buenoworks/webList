import { Component, OnInit } from '@angular/core';
import { AlbumModel } from 'src/app/shared/models/album.model';
import { PostModel } from 'src/app/shared/models/post.model';
import { TodoModel } from 'src/app/shared/models/todo.model';
import { UserModel } from 'src/app/shared/models/user.model';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-list-tab',
  templateUrl: './list-tab.component.html',
  styleUrls: ['./list-tab.component.scss']
})
export class ListTabComponent implements OnInit {
  isLoading: boolean = false;
  postList: PostModel[] = [];
  userList: UserModel[] = [];
  albumList: AlbumModel[] = [];
  todoList: TodoModel[] = [];

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.loadPost();
    this.loadUsers();
  }

  loadUsers() {
    this.listService.getUsers().subscribe(
      res => {
        this.userList = res;
        console.log(this.userList);
      },
      err => {}
    );
  }

  loadPost() {
    this.listService.getPots().subscribe(
      res => {
        this.postList = res;
      },
      err => {}
    );
  }

  loadAlbums() {
    this.listService.getAlbums().subscribe(
      res => {
        this.albumList = res;
      },
      err => {}
    );
  }

  loadTodo() {
    this.listService.getTodos().subscribe(
      res => {
        this.todoList = res;
      },
      err => {}
    );
  }

  tab(e: any) {
    let typeTab = e.index;
    this.loadPost();

    if(typeTab == 0) {
      this.loadPost();
    } else if(typeTab == 1) {
      this.loadAlbums();
    } else {
      this.loadTodo();
    }
  }
}
