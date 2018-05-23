import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  selectedImageIndex = 0;
  images: any[] = [{
    url: `https://static.pexels.com/photos/297933/pexels-photo-297933.jpeg`,
    category: 'clothing',
    text: `Men's clothing, men's clothes tailored to your needs.`
  },
  {
    url: `https://static.pexels.com/photos/404168/pexels-photo-404168.jpeg`,
    category: 'footwear',
    text: `Men's shoes give character to the whole stylization and this is what you pay attention to at the first moment.
    Meet comfortable and modern models that will make you look even better.`
  },
  {
    url: `https://static.pexels.com/photos/685530/pexels-photo-685530.jpeg`,
    category: 'sport',
    text: `Properly selected men's sports clothing and footwear today is almost half of the success in each discipline! `
  },
  {
    url: `https://static.pexels.com/photos/322207/pexels-photo-322207.jpeg`,
    category: `accessories`,
    text: `Men's accessories and accessories that tempt with a flash and encourage high quality.`
  }];
  constructor() { }

  ngOnInit() {

    setInterval(() => {
      this.nextImage();
    }, 7000);
  }

  nextImage() {
    if (this.selectedImageIndex + 1 < this.images.length) {
      this.selectedImageIndex = this.selectedImageIndex + 1;
    } else {
      this.selectedImageIndex = 0;
    }
  }
  previousImage() {
    if (this.selectedImageIndex - 1 >= 0) {
      this.selectedImageIndex = this.selectedImageIndex - 1;
    } else {
      this.selectedImageIndex = this.images.length - 1;
    }
  }
}
