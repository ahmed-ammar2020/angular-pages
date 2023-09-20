import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css'],
})
export class CollectionHomeComponent {
  data = [
    {
      name: faker.person.fullName(),
      age: faker.number.int({ min: 30, max: 45 }),
      job: faker.person.jobTitle(),
    },
    {
      name: faker.person.fullName(),
      age: faker.number.int({ min: 30, max: 45 }),
      job: faker.person.jobTitle(),
    },
    {
      name: faker.person.fullName(),
      age: faker.number.int({ min: 30, max: 45 }),
      job: faker.person.jobTitle(),
    },
    {
      name: faker.person.fullName(),
      age: faker.number.int({ min: 30, max: 45 }),
      job: faker.person.jobTitle(),
    },
  ];

  headers = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Age',
    },
    {
      key: 'job',
      label: 'Job',
    },
  ];
}
