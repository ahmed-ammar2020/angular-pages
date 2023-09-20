import { Component } from '@angular/core';
import { fa, faker } from '@faker-js/faker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  slides: any[] = new Array(5).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  constructor() {}

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: faker.image.urlPicsumPhotos(),
      title: 'First slide',
      subtitle: faker.lorem.sentence(),
    };
    this.slides[1] = {
      id: 1,
      src: faker.image.urlPicsumPhotos(),
      title: 'Second slide',
      subtitle: faker.lorem.sentence(),
    };
    this.slides[2] = {
      id: 2,
      src: faker.image.urlPicsumPhotos(),
      title: 'Third slide',
      subtitle: faker.lorem.sentence(),
    };
    this.slides[3] = {
      id: 3,
      src: faker.image.urlPicsumPhotos(),
      title: 'Fourth slide',
      subtitle: faker.lorem.sentence(),
    };
    this.slides[4] = {
      id: 4,
      src: faker.image.urlPicsumPhotos(),
      title: 'Fifth slide',
      subtitle: faker.lorem.sentence(),
    };
  }
}
