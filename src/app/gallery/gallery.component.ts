import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent  {

  image= [
    {  'url': './assets/Images/image1.jpg'},
    {  'url': './assets/Images/image2.jpg'},
    {  'url': './assets/Images/image3.jpg'},
    {  'url': './assets/Images/image4.jpg'},
    {  'url': './assets/Images/image5.jpg'}

  ];

}
