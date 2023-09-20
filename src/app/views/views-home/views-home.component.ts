import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css'],
})
export class ViewsHomeComponent {
  stats = [
    {
      label: 'Faves',
      value: 43,
    },
    {
      label: 'Views',
      value: 31200,
    },
    {
      label: 'Members',
      value: 22,
    },
  ];

  lists = [
    {
      imageURL: faker.image.urlPicsumPhotos(),
      header: faker.lorem.word(),
      meta: faker.lorem.word(),
      description: faker.lorem.paragraph(),
    },
    {
      imageURL: faker.image.urlPicsumPhotos(),
      header: faker.lorem.word(),
      meta: faker.lorem.word(),
      description: faker.lorem.paragraph(),
    },
    {
      imageURL: faker.image.urlPicsumPhotos(),
      header: faker.lorem.word(),
      meta: faker.lorem.word(),
      description: faker.lorem.paragraph(),
    },
  ];
}
