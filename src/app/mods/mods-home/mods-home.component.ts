import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  modalShown = false;

  toggleModal() {
    this.modalShown = !this.modalShown;
  }

  accords = [
    {
      question: faker.lorem.sentence() + '?',
      answer: faker.lorem.paragraph(),
    },
    {
      question: faker.lorem.sentence() + '?',
      answer: faker.lorem.paragraph(),
    },
    {
      question: faker.lorem.sentence() + '?',
      answer: faker.lorem.paragraph(),
    },
    {
      question: faker.lorem.sentence() + '?',
      answer: faker.lorem.paragraph(),
    },
  ];
}
