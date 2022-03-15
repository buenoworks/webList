import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/shared/services/list.service';
import { ActivatedRoute } from '@angular/router';
import { Photomodel } from 'src/app/shared/models/photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  albumId: any;
  photoList: Photomodel[] = [];

  constructor(
   private listService: ListService,
   private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.albumId = this.route.snapshot.params.albumId;
    this.loadPhoto();
  }

  loadPhoto() {
    this.listService.getPhotos(this.albumId).subscribe(
      res => {
        this.photoList = res;
      },
      err => {}
    );
  }

}
