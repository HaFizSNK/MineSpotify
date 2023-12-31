import { Component, OnInit } from '@angular/core';
import { SearchbarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   public songscard = [
     {
       thumbnail1: '',
       title: 'Music1',
       description: 'Music1 description',
      },
      {
        thumbnail2: 'https://www.shutterstock.com/image-illustration/music-themed-thumbnail-260nw-1125825584.jpg',
        title: 'Music2',
        description: 'Music2 description',
       },
       {
        thumbnail3: 'https://www.shutterstock.com/image-illustration/music-themed-thumbnail-260nw-1125825584.jpg',
        title: 'Music3',
        description: 'Music3 description',
       },
       {
        thumbnail4: 'https://www.shutterstock.com/image-illustration/music-themed-thumbnail-260nw-1125825584.jpg',
        title: 'Music4',
        description: 'Music4 description',
       },
       {
        thumbnail5: 'https://www.shutterstock.com/image-illustration/music-themed-thumbnail-260nw-1125825584.jpg',
        title: 'Music5',
        description: 'Music5 description',
       },
       {
        thumbnail6: 'https://www.shutterstock.com/image-illustration/music-themed-thumbnail-260nw-1125825584.jpg',
        title: 'Music6',
        description: 'Music6 description',
       },
       {
        thumbnail7: 'https://www.shutterstock.com/image-illustration/music-themed-thumbnail-260nw-1125825584.jpg',
        title: 'Music7',
        description: 'Music7 description',
       },
       {
        thumbnail8: 'https://www.shutterstock.com/image-illustration/music-themed-thumbnail-260nw-1125825584.jpg',
        title: 'Music8',
        description: 'Music8 description',
       },
       
   ]
  constructor(private sb:SearchbarService) { }

  ngOnInit() {
  }
OnNavigation(pageName:string){
  if(pageName==='search'){
    this.sb.isSearchVisible.next(true);
  }
  else{
    this.sb.isSearchVisible.next(false);
  }
}
}